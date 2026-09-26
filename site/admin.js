// Site admin: log in with the passphrase, then click any text to change it or
// any photo placeholder to upload a photo. Edits are saved to Netlify (see
// netlify/functions/) and shown to every visitor.
//
// How edits are matched to the page: each piece of text is identified by where
// it is (the page, or "site" for the header and footer), what it originally
// said, and which occurrence of that wording it is. Photo slots are the cream
// placeholder boxes showing the faint logo mark, numbered in page order.
(function () {
  var API = '/api';
  var TOKEN_KEY = 'smb-admin-session';
  var PLACEHOLDER = /mark-dusty-rose\.png$/;

  var content = { text: {}, images: {} };
  var session = loadSession();
  var editing = false;

  var originals = new WeakMap(); // text node -> text from the page files
  var applied = new WeakMap();   // text node -> edited text we wrote into it
  var nodeKeys = new WeakMap();  // text node -> edit key

  // Hide the page until saved edits arrive, so visitors don't see the old text flash.
  document.documentElement.classList.add('smb-loading');
  var reveal = function () { document.documentElement.classList.remove('smb-loading'); };
  setTimeout(reveal, 2500);

  fetch(API + '/content', { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) { if (data) { content.text = data.text || {}; content.images = data.images || {}; } })
    .catch(function () { /* local preview without Netlify: show the page as written */ })
    .then(function () { schedule(); requestAnimationFrame(reveal); });

  // ---------- session ----------
  function loadSession() {
    try {
      var s = JSON.parse(localStorage.getItem(TOKEN_KEY) || 'null');
      return s && s.token && s.expiresAt > Date.now() ? s : null;
    } catch (e) { return null; }
  }
  function saveSession(s) {
    session = s;
    try { s ? localStorage.setItem(TOKEN_KEY, JSON.stringify(s)) : localStorage.removeItem(TOKEN_KEY); } catch (e) {}
  }
  function authed(method, url, body, type) {
    var headers = { Authorization: 'Bearer ' + (session && session.token) };
    if (type) headers['Content-Type'] = type;
    return fetch(url, { method: method, headers: headers, body: body }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (data) {
        if (r.status === 401) { logOut(); openLogin("Your admin session ended. Please log in again."); throw new Error('signed out'); }
        if (!r.ok) throw new Error(data.error || 'Something went wrong (HTTP ' + r.status + ').');
        return data;
      });
    });
  }

  // ---------- applying edits to the page ----------
  function root() { return document.getElementById('dc-root'); }

  function scopeOf(el) {
    var main = el.closest('main');
    if (!main) return 'site';
    var page = main.querySelector('[data-screen-label]');
    return page ? page.getAttribute('data-screen-label') : 'page';
  }

  function textNodes(r) {
    var out = [];
    var w = document.createTreeWalker(r, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p || p.closest('script,style,textarea,option,[data-smb-admin],[data-no-edit]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (w.nextNode()) out.push(w.currentNode);
    return out;
  }

  // The page's own wording for a text node, tracking changes React makes.
  function originalOf(n) {
    var o = originals.get(n), cur = n.nodeValue;
    if (o === undefined) o = cur;
    else if (applied.has(n)) { if (cur !== applied.get(n)) { o = cur; applied.delete(n); } }
    else if (cur !== o) o = cur;
    originals.set(n, o);
    return o;
  }

  function apply() {
    var r = root();
    if (!r) return;
    var counts = {};
    textNodes(r).forEach(function (n) {
      var o = originalOf(n);
      var base = scopeOf(n.parentElement) + '::' + o.trim();
      var i = counts[base] || 0;
      counts[base] = i + 1;
      var key = base + '::' + i;
      nodeKeys.set(n, key);
      var edit = content.text[key];
      if (typeof edit === 'string') {
        var v = o.match(/^\s*/)[0] + edit + o.match(/\s*$/)[0];
        if (n.nodeValue !== v) n.nodeValue = v;
        applied.set(n, v);
      } else if (applied.has(n)) {
        applied.delete(n);
        if (n.nodeValue !== o) n.nodeValue = o;
      }
    });

    var slotCounts = {};
    Array.prototype.forEach.call(r.querySelectorAll('img'), function (img) {
      if (!PLACEHOLDER.test(img.getAttribute('src') || '')) return;
      var slot = img.parentElement;
      var scope = scopeOf(slot);
      var i = slotCounts[scope] || 0;
      slotCounts[scope] = i + 1;
      var key = scope + '::photo::' + i;
      if (slot.getAttribute('data-smb-slot') !== key) slot.setAttribute('data-smb-slot', key);
      if (getComputedStyle(slot).position === 'static') slot.style.position = 'relative';

      var photo = slot.querySelector(':scope > img[data-smb-photo]');
      var id = content.images[key];
      if (id) {
        if (!photo) {
          photo = document.createElement('img');
          photo.setAttribute('data-smb-photo', '');
          photo.alt = '';
          photo.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;z-index:1';
          slot.appendChild(photo);
        }
        var src = API + '/image/' + id;
        if (photo.getAttribute('src') !== src) photo.setAttribute('src', src);
      } else if (photo) {
        photo.remove();
      }

      var badge = slot.querySelector(':scope > [data-smb-badge]');
      if (editing && session) {
        if (!badge) {
          badge = document.createElement('div');
          badge.setAttribute('data-smb-admin', '');
          badge.setAttribute('data-smb-badge', '');
          badge.className = 'smb-badge';
          slot.appendChild(badge);
        }
        var label = id ? 'Change photo' : 'Add photo';
        if (badge.textContent !== label) badge.textContent = label;
      } else if (badge) {
        badge.remove();
      }
    });
    observer.takeRecords();
  }

  var pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { pending = false; apply(); });
  }
  var observer = new MutationObserver(schedule);
  observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['src'] });

  // ---------- admin interface ----------
  var css = document.createElement('style');
  css.textContent = [
    'html.smb-loading #dc-root{visibility:hidden}',
    '.smb-bar{position:fixed;left:0;right:0;bottom:0;z-index:1000;background:var(--pecan-900);color:var(--creamed-butter);font:16px/1.3 var(--font-body);display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;padding:10px 16px;box-shadow:0 -4px 18px rgba(46,32,24,.25)}',
    '.smb-bar b{font-family:var(--font-caps);font-weight:400;font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--honey-300)}',
    '.smb-bar .smb-note{flex:1 1 220px;font-style:italic;opacity:.85}',
    '.smb-bar select,.smb-btn{font:15px var(--font-body);border-radius:4px;padding:7px 12px;cursor:pointer}',
    '.smb-bar select{background:var(--pecan-800);color:var(--creamed-butter);border:1px solid var(--pecan-600)}',
    '.smb-btn{border:1px solid var(--pecan-300);background:transparent;color:inherit}',
    '.smb-btn.smb-primary{background:var(--southern-pecan);border-color:var(--southern-pecan);color:var(--creamed-butter)}',
    '.smb-bar .smb-btn.smb-primary{background:var(--honey-500);border-color:var(--honey-500);color:var(--pecan-900)}',
    '.smb-btn:disabled{opacity:.55;cursor:default}',
    'body.smb-has-bar{padding-bottom:64px}',
    'body.smb-editing #dc-root{cursor:text}',
    'body.smb-editing [data-smb-slot]{outline:2px dashed var(--honey-700);outline-offset:-2px;cursor:pointer}',
    '.smb-badge{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;background:var(--pecan-900);color:var(--creamed-butter);font:13px var(--font-caps);letter-spacing:.18em;text-transform:uppercase;padding:9px 14px;border-radius:999px;white-space:nowrap;pointer-events:none}',
    '.smb-hl{position:fixed;z-index:999;pointer-events:none;outline:2px solid var(--honey-500);background:rgba(226,193,125,.18);border-radius:3px;display:none}',
    '.smb-scrim{position:fixed;inset:0;z-index:1001;background:var(--overlay-scrim);display:flex;align-items:center;justify-content:center;padding:16px}',
    '.smb-dialog{background:var(--cream-0);color:var(--text-body);border-radius:14px;box-shadow:var(--shadow-3);width:min(520px,100%);max-height:calc(100vh - 32px);overflow:auto;padding:28px;box-sizing:border-box;font:19px/1.5 var(--font-body)}',
    '.smb-dialog h2{font-size:30px;margin:0 0 6px}',
    '.smb-dialog p{margin:0 0 16px}',
    '.smb-dialog .smb-where{font-family:var(--font-caps);font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px}',
    '.smb-dialog input,.smb-dialog textarea{width:100%;box-sizing:border-box;font:19px/1.45 var(--font-body);color:var(--text-strong);border:1px solid var(--line-soft);border-radius:4px;padding:10px 12px;background:var(--surface-card)}',
    '.smb-dialog input:focus,.smb-dialog textarea:focus{outline:none;border-color:var(--line-strong);box-shadow:var(--shadow-focus)}',
    '.smb-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}',
    '.smb-dialog .smb-btn{border-color:var(--southern-pecan);color:var(--southern-pecan)}',
    '.smb-dialog .smb-btn.smb-primary{color:var(--creamed-butter)}',
    '.smb-msg{margin-top:12px;font-size:16px;color:var(--status-error);min-height:1em}',
    '@media (max-width:640px){.smb-bar .smb-note{display:none}.smb-bar{gap:8px;padding:8px 12px}.smb-bar select,.smb-btn{padding:6px 9px;font-size:14px}body.smb-has-bar{padding-bottom:104px}}'
  ].join('\n');
  document.head.appendChild(css);

  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') e.textContent = attrs[k];
      else if (k === 'on') Object.keys(attrs.on).forEach(function (ev) { e.addEventListener(ev, attrs.on[ev]); });
      else e.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }

  function dialog(title, where, body, onClose) {
    var scrim = el('div', { class: 'smb-scrim', 'data-smb-admin': '', role: 'dialog', 'aria-modal': 'true', 'aria-label': title });
    var box = el('div', { class: 'smb-dialog' }, [where ? el('div', { class: 'smb-where', text: where }) : null, el('h2', { text: title })].concat(body));
    scrim.appendChild(box);
    function close() { scrim.remove(); document.removeEventListener('keydown', onKey, true); if (onClose) onClose(); }
    function onKey(e) { if (e.key === 'Escape') { e.stopPropagation(); close(); } }
    scrim.addEventListener('mousedown', function (e) { if (e.target === scrim) close(); });
    document.addEventListener('keydown', onKey, true);
    document.body.appendChild(scrim);
    return close;
  }

  // Login
  function openLogin(message) {
    var input = el('input', { type: 'password', autocomplete: 'current-password', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false', 'aria-label': 'Passphrase', placeholder: 'Passphrase' });
    var msg = el('div', { class: 'smb-msg', role: 'alert', text: message || '' });
    var btn = el('button', { class: 'smb-btn smb-primary', type: 'submit', text: 'Log in' });
    var form = el('form', {}, [el('p', { text: 'Enter the admin passphrase to edit the text and photos on this site.' }), input, msg,
      el('div', { class: 'smb-actions' }, [btn, el('button', { class: 'smb-btn', type: 'button', text: 'Cancel', on: { click: function () { close(); } } })])]);
    var close = dialog('Admin', 'Sarah McGuire Baked Goods', [form]);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      btn.disabled = true; btn.textContent = 'Checking…'; msg.textContent = '';
      fetch(API + '/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ passphrase: input.value }) })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (data) {
            if (r.status === 404) throw new Error('Admin only works on the live Netlify site, not a local preview.');
            if (!r.ok) throw new Error(data.error || 'Could not log in (HTTP ' + r.status + ').');
            return data;
          });
        })
        .then(function (s) { saveSession(s); close(); showBar(); setEditing(true); })
        .catch(function (err) { msg.textContent = err.message; btn.disabled = false; btn.textContent = 'Log in'; input.focus(); });
    });
    setTimeout(function () { input.focus(); }, 0);
  }

  // Toolbar
  var bar = null, editBtn = null;
  var highlight = el('div', { class: 'smb-hl', 'data-smb-admin': '' });
  function showBar() {
    if (bar) return;
    var pages = [['', 'Home'], ['menu', 'Menu & Prices'], ['pickup', 'Pickup & FAQ'], ['about', 'About'], ['contact', 'Contact'], ['order', 'Order request']];
    var go = el('select', { 'aria-label': 'Go to page', on: { change: function (e) { location.hash = e.target.value; e.target.selectedIndex = 0; } } },
      [el('option', { value: location.hash.slice(1), text: 'Go to page…' })].concat(pages.map(function (p) { return el('option', { value: p[0], text: p[1] }); })));
    editBtn = el('button', { class: 'smb-btn smb-primary', type: 'button', on: { click: function () { setEditing(!editing); } } });
    bar = el('div', { class: 'smb-bar', 'data-smb-admin': '' }, [
      el('b', { text: 'Admin' }),
      el('span', { class: 'smb-note', text: 'Editing on: click any text or photo to change it. Turn editing off to use the site normally.' }),
      go, editBtn,
      el('button', { class: 'smb-btn', type: 'button', text: 'Log out', on: { click: function () { logOut(); } } })
    ]);
    document.body.appendChild(bar);
    document.body.appendChild(highlight);
    document.body.classList.add('smb-has-bar');
    setEditing(editing);
  }
  function logOut() {
    saveSession(null);
    setEditing(false);
    if (bar) { bar.remove(); bar = null; }
    highlight.remove();
    document.body.classList.remove('smb-has-bar');
  }
  function setEditing(on) {
    editing = !!(on && session);
    document.body.classList.toggle('smb-editing', editing);
    if (editBtn) editBtn.textContent = editing ? 'Turn editing off' : 'Turn editing on';
    if (bar) bar.querySelector('.smb-note').textContent = editing
      ? 'Editing on: click any text or photo to change it. Turn editing off to use the site normally.'
      : 'Editing off: the site works normally.';
    highlight.style.display = 'none';
    schedule();
  }

  // Finds the editable text under the pointer.
  function textAt(x, y) {
    var node = null;
    if (document.caretPositionFromPoint) { var p = document.caretPositionFromPoint(x, y); node = p && p.offsetNode; }
    else if (document.caretRangeFromPoint) { var rg = document.caretRangeFromPoint(x, y); node = rg && rg.startContainer; }
    if (!node || node.nodeType !== 3 || !nodeKeys.has(node) || !root() || !root().contains(node)) return null;
    var range = document.createRange();
    range.selectNodeContents(node);
    var rects = range.getClientRects();
    for (var i = 0; i < rects.length; i++) {
      var r = rects[i];
      if (x >= r.left - 2 && x <= r.right + 2 && y >= r.top - 2 && y <= r.bottom + 2) return { node: node, rect: range.getBoundingClientRect() };
    }
    return null;
  }

  document.addEventListener('mousemove', function (e) {
    if (!editing) return;
    var hit = !e.target.closest('[data-smb-admin],[data-smb-slot]') && textAt(e.clientX, e.clientY);
    if (!hit) { highlight.style.display = 'none'; return; }
    var r = hit.rect;
    highlight.style.cssText = 'display:block;left:' + (r.left - 3) + 'px;top:' + (r.top - 2) + 'px;width:' + (r.width + 6) + 'px;height:' + (r.height + 4) + 'px';
  }, true);

  // While editing, clicks on the page edit instead of navigating.
  document.addEventListener('click', function (e) {
    if (!editing) return;
    if (e.target.closest('[data-smb-admin]:not([data-smb-badge])')) return;
    var r = root();
    if (!r || !r.contains(e.target)) return;
    if (e.target.closest('input,textarea,select,[data-edit-passthrough]')) return;
    e.preventDefault();
    e.stopPropagation();
    var slot = e.target.closest('[data-smb-slot]');
    if (slot) return openPhoto(slot);
    var hit = textAt(e.clientX, e.clientY);
    if (hit) openText(hit.node);
  }, true);

  function describe(key) {
    var scope = key.split('::')[0];
    return scope === 'site' ? 'Header & footer · every page' : scope + ' page';
  }

  function openText(node) {
    var key = nodeKeys.get(node);
    var original = originals.get(node).trim();
    var current = typeof content.text[key] === 'string' ? content.text[key] : original;
    var area = el('textarea', { rows: String(Math.min(10, Math.max(2, Math.ceil(current.length / 44)))), 'aria-label': 'Text' });
    area.value = current;
    var msg = el('div', { class: 'smb-msg', role: 'alert' });
    var save = el('button', { class: 'smb-btn smb-primary', type: 'button', text: 'Save' });
    var restore = typeof content.text[key] === 'string'
      ? el('button', { class: 'smb-btn', type: 'button', text: 'Restore original' }) : null;
    var close = dialog('Edit text', describe(key), [
      area,
      restore ? el('p', { style: 'margin:10px 0 0;font-size:16px;font-style:italic;color:var(--text-muted)', text: 'Original: ' + original }) : null,
      msg,
      el('div', { class: 'smb-actions' }, [save, restore, el('button', { class: 'smb-btn', type: 'button', text: 'Cancel', on: { click: function () { close(); } } })])
    ]);
    function send(value) {
      save.disabled = true; if (restore) restore.disabled = true; msg.textContent = '';
      var edit = {}; edit[key] = value;
      authed('POST', API + '/content', JSON.stringify({ text: edit }), 'application/json')
        .then(function (data) { content.text = data.text || {}; content.images = data.images || content.images; close(); schedule(); })
        .catch(function (err) { if (err.message !== 'signed out') { msg.textContent = err.message; save.disabled = false; if (restore) restore.disabled = false; } else close(); });
    }
    save.addEventListener('click', function () { send(area.value === original ? null : area.value); });
    if (restore) restore.addEventListener('click', function () { send(null); });
    setTimeout(function () { area.focus(); area.select(); }, 0);
  }

  function openPhoto(slot) {
    var key = slot.getAttribute('data-smb-slot');
    var has = !!content.images[key];
    var file = el('input', { type: 'file', accept: 'image/jpeg,image/png,image/webp', style: 'display:none' });
    var msg = el('div', { class: 'smb-msg', role: 'alert' });
    var pick = el('button', { class: 'smb-btn smb-primary', type: 'button', text: has ? 'Choose a new photo' : 'Choose a photo', on: { click: function () { file.click(); } } });
    var remove = has ? el('button', { class: 'smb-btn', type: 'button', text: 'Remove photo' }) : null;
    var close = dialog(has ? 'Change photo' : 'Add a photo', describe(key), [
      el('p', { text: 'Photos are resized for the web before uploading. Landscape or square photos work best in most spots.' }),
      file, msg,
      el('div', { class: 'smb-actions' }, [pick, remove, el('button', { class: 'smb-btn', type: 'button', text: 'Cancel', on: { click: function () { close(); } } })])
    ]);
    function busy(text) { pick.disabled = true; if (remove) remove.disabled = true; pick.textContent = text; msg.textContent = ''; }
    function fail(err) {
      if (err.message === 'signed out') return close();
      msg.textContent = err.message; pick.disabled = false; if (remove) remove.disabled = false;
      pick.textContent = has ? 'Choose a new photo' : 'Choose a photo';
    }
    function done(data) { content.text = data.text || content.text; content.images = data.images || {}; close(); schedule(); }
    file.addEventListener('change', function () {
      var f = file.files && file.files[0];
      if (!f) return;
      busy('Uploading…');
      resize(f).then(function (blob) {
        return authed('POST', API + '/image?slot=' + encodeURIComponent(key), blob, blob.type);
      }).then(done).catch(fail);
    });
    if (remove) remove.addEventListener('click', function () {
      busy('Removing…');
      authed('DELETE', API + '/image?slot=' + encodeURIComponent(key)).then(done).catch(fail);
    });
  }

  // Shrinks a photo to at most 2000px on its long side and saves it as JPEG.
  function resize(f) {
    var MAX = 2000;
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(f);
      var img = new Image();
      img.onload = function () {
        URL.revokeObjectURL(url);
        var scale = Math.min(1, MAX / Math.max(img.naturalWidth, img.naturalHeight));
        var c = document.createElement('canvas');
        c.width = Math.round(img.naturalWidth * scale);
        c.height = Math.round(img.naturalHeight * scale);
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#FFFDF9';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        c.toBlob(function (b) { b ? resolve(b) : reject(new Error('Could not read that image.')); }, 'image/jpeg', 0.85);
      };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error("That file doesn't look like a photo we can use.")); };
      img.src = url;
    });
  }

  // Opened by the "Admin" link at the bottom of the home page.
  window.smbOpenAdmin = function () {
    if (session) { showBar(); setEditing(true); } else openLogin();
  };

  function start() { if (session) showBar(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
