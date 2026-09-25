// Sends a form to Netlify Forms. Netlify finds the forms at deploy time from
// the hidden <form data-netlify="true"> copies in index.html; the field names
// sent here must match the inputs listed there.
window.submitNetlifyForm = function (formName, fields) {
  var body = new URLSearchParams({ 'form-name': formName });
  Object.keys(fields).forEach(function (k) { body.append(k, fields[k] == null ? '' : String(fields[k])); });
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString()
  }).then(function (res) {
    if (!res.ok) throw new Error('Form submission failed: HTTP ' + res.status);
  });
};
