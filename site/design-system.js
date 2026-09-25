/* @ds-bundle: {"format":4,"namespace":"SarahMcGuireDesignSystem_65167b","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Seal","sourcePath":"components/brand/Seal.jsx"},{"name":"MenuItem","sourcePath":"components/commerce/MenuItem.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"cd2b91a89861","components/brand/Seal.jsx":"a2a0aeb08f17","components/commerce/MenuItem.jsx":"0dec085cb606","components/commerce/ProductCard.jsx":"28fab5a49348","components/core/Badge.jsx":"bdff2827d5e0","components/core/Button.jsx":"272572e702da","components/core/Divider.jsx":"8b0b641c84d4","components/core/Icon.jsx":"e103acacd1f2","components/core/IconButton.jsx":"4ecaf40a33a1","components/core/Tag.jsx":"42706994e462","components/feedback/Dialog.jsx":"879927c134b2","components/feedback/Toast.jsx":"6b3fc5199956","components/feedback/Tooltip.jsx":"12bf467bb4f4","components/forms/Checkbox.jsx":"888727864d95","components/forms/Input.jsx":"a163236896fd","components/forms/QuantityStepper.jsx":"726cc152d6d1","components/forms/Radio.jsx":"fefc0237c6be","components/forms/Select.jsx":"b8f9a6bbb1da","components/navigation/Tabs.jsx":"90632063f6d3","ui_kits/website/AboutPage.jsx":"6e52fe1b0b0d","ui_kits/website/CartDrawer.jsx":"81c8916eab18","ui_kits/website/CheckoutPage.jsx":"6a9cfb76f546","ui_kits/website/HomePage.jsx":"8f2a5a3c65dd","ui_kits/website/MenuPage.jsx":"9112001663ce","ui_kits/website/ProductPage.jsx":"3cc2ed9b07a6","ui_kits/website/SiteFooter.jsx":"f530a4dd0466","ui_kits/website/SiteHeader.jsx":"59440b83b8fa","ui_kits/website/data.js":"c2498b857083"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SarahMcGuireDesignSystem_65167b = window.SarahMcGuireDesignSystem_65167b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function Logo({
  variant = 'full',
  color = 'pecan',
  height,
  width,
  base = 'assets/logo/',
  alt = 'Sarah McGuire Baked Goods',
  style
}) {
  const file = (variant === 'mark' ? 'mark' : variant === 'wordmark' ? 'wordmark' : 'logo') + '-' + color + '.png';
  return /*#__PURE__*/React.createElement("img", {
    src: base + file,
    alt: alt,
    style: {
      display: 'block',
      height: height,
      width: width || (height ? 'auto' : undefined),
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Seal.jsx
try { (() => {
function Seal({
  size = 160,
  variant = 'full',
  color = 'pecan',
  background = 'var(--cream-50)',
  base,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 1px 3px rgba(65,46,34,.22)',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: variant,
    color: color,
    base: base,
    width: variant === 'mark' ? undefined : '74%',
    height: variant === 'mark' ? '62%' : undefined
  }));
}
Object.assign(__ds_scope, { Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Seal.jsx", error: String((e && e.message) || e) }); }

// components/commerce/MenuItem.jsx
try { (() => {
function MenuItem({
  name,
  price,
  description,
  note,
  leader = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      padding: '10px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 21,
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, name), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, note), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderBottom: leader ? '1px dotted var(--pecan-300)' : 'none',
      transform: 'translateY(-5px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      color: 'var(--text-brand)',
      fontWeight: 600,
      fontVariantNumeric: 'lining-nums'
    }
  }, price)), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontStyle: 'italic',
      color: 'var(--text-muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { MenuItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/MenuItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  pecan: ['var(--pecan-100)', 'var(--pecan-700)'],
  olive: ['var(--olive-100)', 'var(--olive-700)'],
  rose: ['var(--rose-100)', 'var(--rose-700)'],
  honey: ['var(--honey-100)', 'var(--honey-700)'],
  lavender: ['var(--lavender-100)', 'var(--lavender-700)'],
  solid: ['var(--southern-pecan)', 'var(--creamed-butter)'],
  error: ['var(--status-error-bg)', 'var(--status-error)']
};
function Badge({
  tone = 'pecan',
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.pecan;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-subhead)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  label,
  script,
  tone = 'soft',
  spacing = 24,
  style
}) {
  const line = {
    flex: 1,
    borderTop: '1px solid ' + (tone === 'strong' ? 'var(--line-strong)' : tone === 'hair' ? 'var(--line-hair)' : 'var(--line-soft)')
  };
  if (!label) return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      display: 'flex',
      margin: spacing + 'px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line
  }));
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      margin: spacing + 'px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line
  }), /*#__PURE__*/React.createElement("span", {
    style: script ? {
      fontFamily: 'var(--font-script)',
      fontSize: 34,
      color: 'var(--text-brand)',
      lineHeight: 1
    } : {
      fontFamily: 'var(--font-subhead)',
      fontSize: 12,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'assets/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  title,
  ...rest
}) {
  const url = 'url(' + CDN + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 16,
    fs: 11
  },
  md: {
    h: 'var(--control-h-md)',
    px: 24,
    fs: 12
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 32,
    fs: 13
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    bgH: 'var(--action-primary-hover)',
    fg: 'var(--text-on-dark)',
    bd: 'transparent'
  },
  secondary: {
    bg: 'var(--action-secondary)',
    bgH: 'var(--action-secondary-hover)',
    fg: 'var(--text-on-dark)',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    bgH: 'var(--pecan-50)',
    fg: 'var(--text-brand)',
    bd: 'var(--line-strong)'
  },
  ghost: {
    bg: 'transparent',
    bgH: 'var(--pecan-50)',
    fg: 'var(--text-brand)',
    bd: 'transparent'
  },
  light: {
    bg: 'var(--creamed-butter)',
    bgH: 'var(--cream-0)',
    fg: 'var(--text-brand)',
    bd: 'transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      minHeight: s.h,
      maxWidth: '100%',
      padding: '6px ' + s.px + 'px',
      boxSizing: 'border-box',
      textAlign: 'center',
      lineHeight: 1.25,
      fontFamily: 'var(--font-subhead)',
      fontSize: s.fs,
      fontWeight: 500,
      letterSpacing: 'var(--ls-button)',
      textTransform: 'uppercase',
      background: h && !disabled ? v.bgH : v.bg,
      color: v.fg,
      border: '1px solid ' + v.bd,
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transform: p && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out),transform var(--dur-fast)',
      outline: 'none',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.fs + 5
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.fs + 5
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  description,
  price,
  unit,
  image,
  badge,
  badgeTone = 'olive',
  soldOut,
  onAdd,
  onClick,
  logoBase = 'assets/logo/',
  layout = 'card',
  style
}) {
  const [h, setH] = React.useState(false);
  const img = image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: h ? 'scale(1.03)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--cream-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoBase + 'mark-dusty-rose.png',
    alt: "",
    style: {
      height: '46%',
      opacity: .55
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: layout === 'card' ? 'var(--surface-card)' : 'transparent',
      borderRadius: 'var(--radius-card)',
      boxShadow: layout === 'card' ? h ? 'var(--shadow-2)' : 'var(--shadow-1)' : 'none',
      overflow: 'hidden',
      transition: 'box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: layout === 'card' ? 0 : 'var(--radius-card)',
      cursor: onClick ? 'pointer' : 'default'
    }
  }, img, (badge || soldOut) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: soldOut ? 'error' : badgeTone
  }, soldOut ? 'Sold out' : badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: layout === 'card' ? '18px 20px 20px' : '14px 2px 0',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '4px 12px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    onClick: onClick,
    style: {
      flex: '1 1 150px',
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 25,
      fontWeight: 500,
      color: 'var(--text-strong)',
      lineHeight: 1.1,
      cursor: onClick ? 'pointer' : 'default'
    }
  }, name), price != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-brand)',
      whiteSpace: 'nowrap'
    }
  }, price, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, " / ", unit))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.45,
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, description), onAdd && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "outline",
    iconLeft: "plus",
    disabled: soldOut,
    onClick: onAdd,
    fullWidth: true
  }, "Add to box"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 40,
  badge,
  disabled,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const map = {
    ghost: ['transparent', 'var(--pecan-50)', 'var(--text-brand)', 'transparent'],
    outline: ['transparent', 'var(--pecan-50)', 'var(--text-brand)', 'var(--line-soft)'],
    solid: ['var(--action-primary)', 'var(--action-primary-hover)', 'var(--text-on-dark)', 'transparent']
  };
  const [bg, bgH, fg, bd] = map[variant] || map.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: h && !disabled ? bgH : bg,
      color: fg,
      border: '1px solid ' + bd,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      padding: 0,
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }), badge != null && badge !== 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      boxSizing: 'border-box',
      borderRadius: 999,
      background: 'var(--dusty-rose)',
      color: 'var(--pecan-900)',
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 12,
      lineHeight: '18px',
      textAlign: 'center'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected,
  onClick,
  children,
  count,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-pressed": !!selected,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 38,
      padding: '0 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      fontWeight: 500,
      background: selected ? 'var(--southern-pecan)' : h ? 'var(--pecan-50)' : 'transparent',
      color: selected ? 'var(--creamed-butter)' : 'var(--text-brand)',
      border: '1px solid ' + (selected ? 'var(--southern-pecan)' : 'var(--line-soft)'),
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      opacity: .7
    }
  }, count));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      background: 'var(--bg-paper)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-3)',
      padding: '36px 36px 28px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: 36,
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 12,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 14px',
      fontFamily: 'var(--font-heading)',
      fontSize: 32,
      fontWeight: 500,
      color: 'var(--text-strong)',
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      marginTop: 28
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  default: ['var(--pecan-800)', 'var(--creamed-butter)', 'check'],
  success: ['var(--olive-700)', 'var(--creamed-butter)', 'check'],
  error: ['var(--status-error)', 'var(--cream-0)', 'alert-circle'],
  info: ['var(--cream-0)', 'var(--text-strong)', 'info']
};
function Toast({
  tone = 'default',
  children,
  action,
  onAction,
  onClose,
  icon,
  style
}) {
  const [bg, fg, ic] = TONES[tone] || TONES.default;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      minHeight: 52,
      padding: '10px 14px 10px 18px',
      boxSizing: 'border-box',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-3)',
      fontSize: 18,
      maxWidth: 460,
      border: tone === 'info' ? '1px solid var(--line-hair)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ic,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      lineHeight: 1.35
    }
  }, children), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      fontFamily: 'var(--font-subhead)',
      fontSize: 12,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      textDecoration: 'underline',
      textUnderlineOffset: 4,
      padding: '4px 2px'
    }
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      display: 'flex',
      padding: 4,
      opacity: .8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top'
}) {
  const [o, setO] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: '100%',
    marginTop: 8
  } : {
    bottom: '100%',
    marginBottom: 8
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)' + (o ? '' : ' translateY(3px)'),
      ...pos,
      background: 'var(--pecan-800)',
      color: 'var(--creamed-butter)',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.3,
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: o ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  description,
  disabled,
  name,
  value,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: 2,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (checked ? 'var(--southern-pecan)' : 'var(--pecan-300)'),
      background: checked ? 'var(--southern-pecan)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    color: "var(--creamed-butter)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  multiline,
  rows = 4,
  disabled,
  style,
  inputStyle,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const base = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: 19,
    color: 'var(--text-strong)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    border: '1px solid ' + (error ? 'var(--status-error)' : f ? 'var(--line-strong)' : 'var(--line-soft)'),
    borderRadius: 'var(--radius-control)',
    outline: 'none',
    boxShadow: f ? 'var(--shadow-focus)' : 'none',
    padding: multiline ? '12px 14px' : '0 14px',
    height: multiline ? undefined : 'var(--control-h-md)',
    resize: 'vertical',
    transition: 'border-color var(--dur-fast),box-shadow var(--dur-fast)',
    ...inputStyle
  };
  const p = {
    disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: base,
    ...rest
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      opacity: disabled ? .6 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 12,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, p)) : /*#__PURE__*/React.createElement("input", p), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: error ? 'var(--status-error)' : 'var(--text-muted)',
      fontStyle: error ? 'normal' : 'italic'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
  unit,
  style
}) {
  const h = size === 'sm' ? 34 : 44;
  const b = dis => ({
    width: h,
    height: h,
    border: 'none',
    background: 'transparent',
    color: 'var(--text-brand)',
    cursor: dis ? 'not-allowed' : 'pointer',
    opacity: dis ? .35 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  });
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: h,
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrease",
    style: b(value <= min),
    disabled: value <= min,
    onClick: () => set(value - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: unit ? 64 : 28,
      textAlign: 'center',
      fontSize: size === 'sm' ? 17 : 20,
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'lining-nums'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, " ", unit)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increase",
    style: b(value >= max),
    disabled: value >= max,
    onClick: () => set(value + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 16
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  description,
  disabled,
  name,
  value,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: 2,
      boxSizing: 'border-box',
      borderRadius: '50%',
      border: '1px solid ' + (checked ? 'var(--southern-pecan)' : 'var(--pecan-300)'),
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--southern-pecan)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  onChange,
  placeholder,
  disabled,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      opacity: disabled ? .6 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 12,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 42px 0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1px solid ' + (error ? 'var(--status-error)' : f ? 'var(--line-strong)' : 'var(--line-soft)'),
      borderRadius: 'var(--radius-control)',
      outline: 'none',
      boxShadow: f ? 'var(--shadow-focus)' : 'none',
      cursor: 'pointer'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-brand)",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      marginTop: -9,
      pointerEvents: 'none'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: error ? 'var(--status-error)' : 'var(--text-muted)',
      fontStyle: error ? 'normal' : 'italic'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  align = 'start',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 32,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      borderBottom: '1px solid var(--line-hair)',
      ...style
    }
  }, tabs.map(t => {
    const id = typeof t === 'string' ? t : t.value;
    const lab = typeof t === 'string' ? t : t.label;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        background: 'none',
        border: 'none',
        padding: '14px 0',
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'var(--font-subhead)',
        fontSize: 12,
        letterSpacing: '.24em',
        textTransform: 'uppercase',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--southern-pecan)' : 'transparent'),
        transition: 'color var(--dur-fast),border-color var(--dur-fast)'
      }
    }, lab);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
function AboutPage({
  go
}) {
  const {
    Logo,
    Button,
    Divider
  } = window.SarahMcGuireDesignSystem_65167b;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-200)',
      borderRadius: 'var(--radius-lg)',
      aspectRatio: '4 / 5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)',
      fontStyle: 'italic',
      fontSize: 18
    }
  }, "Photo of Sarah in the kitchen"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 12,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Our kitchen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      margin: '14px 0 4px'
    }
  }, "Hi, I'm Sarah."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 44,
      color: 'var(--woodland-olive)',
      marginBottom: 18
    }
  }, "welcome in"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 21,
      lineHeight: 1.6,
      margin: '0 0 16px'
    }
  }, "I bake out of a small kitchen in Tulsa, Oklahoma \u2014 cookies by the dozen, pies with crusts rolled that morning, and cakes for the days you'll remember."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 21,
      lineHeight: 1.6,
      margin: '0 0 28px'
    }
  }, "Everything is made by hand in small batches, with real butter and good vanilla. If you have a recipe you grew up with, tell me about it."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('custom')
  }, "Get in touch"))));
}
function CustomPage() {
  const {
    Input,
    Select,
    Button,
    Checkbox,
    Dialog
  } = window.SarahMcGuireDesignSystem_65167b;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '56px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 12,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Custom orders"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      margin: '12px 0 8px'
    }
  }, "Let's bake something for your day."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Please give us at least two weeks for celebration cakes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What are you after?",
    options: ['Celebration cake', 'Cupcakes', 'Iced cookies', 'Pies for a crowd'],
    value: "Celebration cake"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Date needed",
    type: "date"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "How many guests?",
    placeholder: "About 20"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Pickup or delivery",
    options: ['Pickup in Tulsa', 'Local delivery'],
    value: "Pickup in Tulsa"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tell us more",
    multiline: true,
    rows: 4,
    style: {
      gridColumn: '1 / -1'
    },
    placeholder: "Flavors, colors, a theme, allergies\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'd like a tasting box first",
    description: "Four flavors, $18, credited to your order"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setSent(true)
  }, "Send inquiry")), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    onClose: () => setSent(false),
    eyebrow: "Inquiry sent",
    title: "Thank you \u2014 we'll be in touch.",
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSent(false)
    }, "Wonderful")
  }, "Sarah reads every note herself and will reply within two days."));
}
Object.assign(window, {
  AboutPage,
  CustomPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartDrawer.jsx
try { (() => {
function CartDrawer({
  open,
  items,
  setQty,
  close,
  checkout
}) {
  const {
    IconButton,
    QuantityStepper,
    Button,
    Divider
  } = window.SarahMcGuireDesignSystem_65167b;
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: close,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-base)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 420,
      background: 'var(--bg-paper)',
      boxShadow: 'var(--shadow-3)',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '22px 24px 10px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 32,
      margin: 0
    }
  }, "Your box"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Close",
    onClick: close
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '0 24px'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 0',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 44,
      color: 'var(--dusty-rose)'
    }
  }, "nothing yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic',
      fontSize: 18
    }
  }, "Your box is empty. The cookies are waiting.")) : items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr auto',
      gap: 14,
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid var(--line-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--cream-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/mark-dusty-rose.png",
    style: {
      height: '56%',
      opacity: .55
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 500,
      color: 'var(--text-strong)',
      lineHeight: 1.15
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, '$' + i.price, " / ", i.unit), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "sm",
    value: i.qty,
    min: 0,
    onChange: v => setQty(i.id, v)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-brand)'
    }
  }, '$' + i.price * i.qty)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px 24px',
      borderTop: '1px solid var(--line-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 22,
      color: 'var(--text-strong)',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, '$' + total)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, "Pickup in Tulsa. Pay when you order."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: !items.length,
    onClick: checkout
  }, "Choose pickup day"))));
}
window.CartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CheckoutPage.jsx
try { (() => {
function CheckoutPage({
  items,
  placeOrder
}) {
  const {
    Input,
    Radio,
    Select,
    Button,
    Divider,
    MenuItem
  } = window.SarahMcGuireDesignSystem_65167b;
  const [mode, setMode] = React.useState('pickup');
  const [day, setDay] = React.useState('Saturday');
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const eb = {
    fontFamily: 'var(--font-subhead)',
    fontSize: 12,
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: 16
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '56px 24px 0',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 52,
      margin: '0 0 28px'
    }
  }, "Almost ready"), /*#__PURE__*/React.createElement("div", {
    style: eb
  }, "Your details"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "(918) 555-0100"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@example.com",
    style: {
      gridColumn: '1 / -1'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: eb
  }, "Pickup or delivery"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "m",
    checked: mode === 'pickup',
    onChange: () => setMode('pickup'),
    label: "Pickup in Tulsa",
    description: "Address sent with your confirmation"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "m",
    checked: mode === 'deliver',
    onChange: () => setMode('deliver'),
    label: "Local delivery",
    description: "Within Tulsa city limits, $8"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Day",
    options: ['Thursday', 'Friday', 'Saturday'],
    value: day,
    onChange: setDay
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Anything we should know?",
    multiline: true,
    rows: 3,
    placeholder: "Allergies, a birthday name, a favorite color\u2026"
  })), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-1)',
      padding: 28,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eb
  }, "Your box"), items.map(i => /*#__PURE__*/React.createElement(MenuItem, {
    key: i.id,
    name: i.qty + ' × ' + i.name,
    price: '$' + i.price * i.qty,
    leader: false
  })), mode === 'deliver' && /*#__PURE__*/React.createElement(MenuItem, {
    name: "Delivery",
    price: "$8",
    leader: false
  }), /*#__PURE__*/React.createElement(Divider, {
    tone: "hair",
    spacing: 12
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 24,
      color: 'var(--text-strong)',
      fontWeight: 600,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, '$' + (total + (mode === 'deliver' ? 8 : 0)))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => placeOrder(day, mode)
  }, "Place order")));
}
function ConfirmPage({
  order,
  go
}) {
  const {
    Button,
    Seal
  } = window.SarahMcGuireDesignSystem_65167b;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 640,
      margin: '0 auto',
      padding: '80px 24px 0',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--kraft)',
      borderRadius: 'var(--radius-lg)',
      padding: 36,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 170,
    base: "assets/logo/"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 64,
      color: 'var(--text-brand)',
      lineHeight: 1
    }
  }, "Thank you"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      margin: '14px 0 10px'
    }
  }, "Your order is in."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 21,
      margin: '0 0 30px'
    }
  }, "We'll have it boxed and ready ", order.mode === 'pickup' ? 'for pickup' : 'at your door', " on ", order.day, ". A confirmation is on its way to your inbox."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('home')
  }, "Back home"));
}
Object.assign(window, {
  CheckoutPage,
  ConfirmPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CheckoutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function HomePage({
  go,
  add,
  openProduct
}) {
  const {
    Logo,
    Button,
    ProductCard,
    Divider
  } = window.SarahMcGuireDesignSystem_65167b;
  const P = window.SM_DATA.products;
  const feat = [P[0], P[3], P[6]];
  const eb = {
    fontFamily: 'var(--font-subhead)',
    fontSize: 12,
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  const cats = [['Cookies', 'by the dozen'], ['Pies', 'whole & seasonal'], ['Cakes', 'layered & custom'], ['Cupcakes', 'for a crowd']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 24px 40px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: eb
  }, "Tulsa, Oklahoma"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 72,
      lineHeight: 1.02,
      fontWeight: 500,
      margin: '18px 0 0',
      letterSpacing: '-.01em'
    }
  }, "Cookies, pies & cakes, baked by hand."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 52,
      color: 'var(--dusty-rose)',
      margin: '6px 0 14px'
    }
  }, "from our kitchen to yours"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      lineHeight: 1.5,
      maxWidth: 500,
      margin: '0 0 30px'
    }
  }, "Small batches, real butter, and recipes worth sharing. Order ahead for pickup this weekend."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('menu')
  }, "See the menu"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => go('custom')
  }, "Custom orders"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-0)',
      borderRadius: 'var(--radius-xl)',
      aspectRatio: '1 / 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    base: "assets/logo/",
    width: "78%"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, cats.map(([c, s]) => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => go('menu', c),
    style: {
      background: 'var(--surface-sunken)',
      border: 'none',
      borderRadius: 'var(--radius-card)',
      padding: '26px 20px',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, c), /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: 'italic',
      fontSize: 17,
      color: 'var(--text-muted)'
    }
  }, s))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "This week's favorites",
    spacing: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 36
    }
  }, feat.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    logoBase: "assets/logo/",
    name: p.name,
    price: '$' + p.price,
    unit: p.unit,
    description: p.desc,
    badge: p.badge,
    badgeTone: p.tone,
    onAdd: () => add(p),
    onClick: () => openProduct(p)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '72px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dusty-rose)',
      borderRadius: 'var(--radius-lg)',
      padding: '52px 56px',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eb,
      color: 'var(--pecan-800)'
    }
  }, "Birthdays \xB7 Showers \xB7 Weddings"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      margin: '12px 0 8px',
      color: 'var(--pecan-900)'
    }
  }, "A cake made just for the day."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      color: 'var(--pecan-900)',
      maxWidth: 560
    }
  }, "Tell Sarah the date, the crowd, and the flavors you love. She'll sketch something sweet.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('custom')
  }, "Start an inquiry"))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MenuPage.jsx
try { (() => {
function MenuPage({
  initialCat,
  add,
  openProduct
}) {
  const {
    Tag,
    ProductCard
  } = window.SarahMcGuireDesignSystem_65167b;
  const {
    categories,
    products
  } = window.SM_DATA;
  const [cat, setCat] = React.useState(initialCat || 'All');
  const list = cat === 'All' ? products : products.filter(p => p.cat === cat);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 12,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Menu & Pricing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 60,
      margin: '12px 0 6px'
    }
  }, "The Menu"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Baked Thursday through Saturday. Order two days ahead.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '32px 0 40px'
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c),
    count: c === 'All' ? undefined : products.filter(p => p.cat === c).length
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    logoBase: "assets/logo/",
    name: p.name,
    price: '$' + p.price,
    unit: p.unit,
    description: p.desc,
    badge: p.badge,
    badgeTone: p.tone,
    soldOut: p.soldOut,
    onAdd: () => add(p),
    onClick: () => openProduct(p)
  }))));
}
window.MenuPage = MenuPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MenuPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductPage.jsx
try { (() => {
function ProductPage({
  product: p,
  add,
  go
}) {
  const {
    Button,
    Badge,
    QuantityStepper,
    Tabs,
    Select,
    Checkbox,
    Icon
  } = window.SarahMcGuireDesignSystem_65167b;
  const [q, setQ] = React.useState(1);
  const [tab, setTab] = React.useState('Details');
  const [note, setNote] = React.useState(false);
  const [opt, setOpt] = React.useState(p.cat === 'Cakes' ? '8 inch' : '');
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('menu'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-subhead)',
      fontSize: 11,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), "Back to menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 56,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-200)',
      borderRadius: 'var(--radius-lg)',
      aspectRatio: '1 / 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/mark-dusty-rose.png",
    style: {
      height: '42%',
      opacity: .55
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, null, p.cat), p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone
  }, p.badge)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 52,
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--text-brand)',
      margin: '12px 0 18px'
    }
  }, '$' + p.price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, " / ", p.unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 21,
      lineHeight: 1.55,
      margin: '0 0 28px'
    }
  }, p.long), p.cat === 'Cakes' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Size",
    options: ['6 inch', '8 inch', '10 inch'],
    value: opt,
    onChange: setOpt
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: note,
    onChange: setNote,
    label: "Add a handwritten note",
    description: "Free with every order"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: q,
    onChange: setQ
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    disabled: p.soldOut,
    onClick: () => add(p, q),
    style: {
      flex: 1
    }
  }, p.soldOut ? 'Sold out this week' : 'Add to box')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 18,
      color: 'var(--text-muted)',
      fontSize: 17,
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 17
  }), "Ready for pickup Thursday \u2013 Saturday"), /*#__PURE__*/React.createElement(Tabs, {
    style: {
      marginTop: 36
    },
    tabs: ['Details', 'Ingredients', 'Storage'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      margin: '16px 0 0'
    }
  }, tab === 'Details' ? 'Baked the day before pickup and boxed in kraft with our seal.' : tab === 'Ingredients' ? 'Butter, flour, cane sugar, eggs, vanilla. Made in a kitchen that handles nuts, dairy and wheat.' : 'Keep covered at room temperature for two days, or refrigerate up to five.'))));
}
window.ProductPage = ProductPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
function SiteFooter({
  go
}) {
  const {
    Logo,
    Icon
  } = window.SarahMcGuireDesignSystem_65167b;
  const h = {
    fontFamily: 'var(--font-subhead)',
    fontSize: 11,
    letterSpacing: '.26em',
    textTransform: 'uppercase',
    color: 'var(--honey-300)',
    marginBottom: 12
  };
  const a = {
    display: 'block',
    background: 'none',
    border: 'none',
    padding: '3px 0',
    color: 'var(--creamed-butter)',
    fontFamily: 'var(--font-body)',
    fontSize: 18,
    cursor: 'pointer',
    textAlign: 'left'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--southern-pecan)',
      color: 'var(--creamed-butter)',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 28px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    color: "cream",
    base: "assets/logo/",
    width: 200
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h
  }, "Shop"), /*#__PURE__*/React.createElement("button", {
    style: a,
    onClick: () => go('menu')
  }, "The menu"), /*#__PURE__*/React.createElement("button", {
    style: a,
    onClick: () => go('custom')
  }, "Custom cakes"), /*#__PURE__*/React.createElement("button", {
    style: a,
    onClick: () => go('menu')
  }, "Seasonal pies")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h
  }, "Visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: 1.6
    }
  }, "Pickup in Tulsa, Oklahoma", /*#__PURE__*/React.createElement("br", null), "Thursday \u2013 Saturday")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h
  }, "Say hello"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 22
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 22
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 22
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px 24px 28px',
      borderTop: '1px solid rgba(248,242,231,.2)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 15,
      opacity: .85
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Sarah McGuire Baked Goods"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 28,
      lineHeight: .8,
      opacity: 1
    }
  }, "made by hand")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
function SiteHeader({
  page,
  go,
  cartCount,
  openCart
}) {
  const {
    Logo,
    IconButton
  } = window.SarahMcGuireDesignSystem_65167b;
  const links = [['menu', 'Menu'], ['custom', 'Custom Orders'], ['about', 'Our Kitchen']];
  const L = ({
    id,
    label
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => go(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 0',
      fontFamily: 'var(--font-subhead)',
      fontSize: 11.5,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: page === id ? 'var(--text-strong)' : 'var(--text-muted)',
      borderBottom: '1px solid ' + (page === id ? 'var(--southern-pecan)' : 'transparent')
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(248,242,231,.94)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--line-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--woodland-olive)',
      color: 'var(--creamed-butter)',
      textAlign: 'center',
      fontSize: 16,
      padding: '7px 16px'
    }
  }, "Order by Wednesday for weekend pickup in Tulsa"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.slice(0, 2).map(([id, l]) => /*#__PURE__*/React.createElement(L, {
    key: id,
    id: id,
    label: l
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    base: "assets/logo/",
    width: 210
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(L, {
    id: "about",
    label: "Our Kitchen"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "shopping-bag",
    label: "Your box",
    badge: cartCount,
    onClick: openCart
  }))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.SM_DATA = {
  categories: ['All', 'Cookies', 'Pies', 'Cakes', 'Cupcakes', 'Breads'],
  products: [{
    id: 'bbcc',
    cat: 'Cookies',
    name: 'Brown Butter Chocolate Chip',
    price: 24,
    unit: 'dozen',
    desc: 'Dark chocolate chunks, flaky sea salt',
    badge: 'Bestseller',
    tone: 'rose',
    long: 'Butter browned until it smells like toffee, folded with dark chocolate and finished with a pinch of flaky salt. Crisp edges, soft middles.'
  }, {
    id: 'snick',
    cat: 'Cookies',
    name: 'Snickerdoodle',
    price: 22,
    unit: 'dozen',
    desc: 'Cinnamon sugar, chewy centre',
    long: 'A soft, tangy cookie rolled twice in cinnamon sugar.'
  }, {
    id: 'sugar',
    cat: 'Cookies',
    name: 'Iced Sugar Cookies',
    price: 30,
    unit: 'dozen',
    desc: 'Hand-iced, made to your colors',
    badge: 'Custom',
    tone: 'lavender',
    long: 'Vanilla sugar cookies iced by hand. Tell us your colors and theme.'
  }, {
    id: 'pecan',
    cat: 'Pies',
    name: 'Honey Pecan Pie',
    price: 34,
    unit: 'pie',
    desc: 'Whole 9-inch, all-butter crust',
    badge: 'Seasonal',
    tone: 'olive',
    long: 'Oklahoma pecans set in a honey custard, baked in an all-butter crust rolled the morning it bakes.'
  }, {
    id: 'apple',
    cat: 'Pies',
    name: 'Lattice Apple Pie',
    price: 32,
    unit: 'pie',
    desc: 'Tart apples, brown sugar, cinnamon',
    long: 'Sliced tart apples with brown sugar and cinnamon under a woven lattice top.'
  }, {
    id: 'cherry',
    cat: 'Pies',
    name: 'Sour Cherry Pie',
    price: 34,
    unit: 'pie',
    desc: 'Crumb top',
    soldOut: true,
    long: 'Sour cherries with a brown-sugar crumb.'
  }, {
    id: 'lemon',
    cat: 'Cakes',
    name: 'Lemon Lavender Cake',
    price: 58,
    unit: '8 inch',
    desc: 'Three layers, honey buttercream',
    badge: 'New',
    tone: 'honey',
    long: 'Three lemon layers with a whisper of lavender, filled and frosted with honey buttercream.'
  }, {
    id: 'choc',
    cat: 'Cakes',
    name: 'Chocolate Celebration Cake',
    price: 62,
    unit: '8 inch',
    desc: 'Fudge frosting, pressed flowers',
    long: 'Dark chocolate layers with fudge frosting, finished with edible flowers.'
  }, {
    id: 'vanilla',
    cat: 'Cupcakes',
    name: 'Vanilla Bean Cupcakes',
    price: 36,
    unit: 'dozen',
    desc: 'Swirled buttercream',
    long: 'Vanilla bean cupcakes with a tall swirl of buttercream.'
  }, {
    id: 'strawb',
    cat: 'Cupcakes',
    name: 'Strawberry Cupcakes',
    price: 38,
    unit: 'dozen',
    desc: 'Real berry buttercream',
    long: 'Strawberry cake with buttercream made from real berries.'
  }, {
    id: 'banana',
    cat: 'Breads',
    name: 'Banana Bread',
    price: 14,
    unit: 'loaf',
    desc: 'Brown sugar crackle top',
    long: 'Very ripe bananas, brown sugar, and a crackly top.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
