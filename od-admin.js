/* OnlyDwarfs owner pages: sign-in check + backend password.
   Put this tag in <head> of every owner page, before any other script:
     <script src="/od-admin.js"></script>
   crm.html uses data-allow="manager" so the manager can open it too.
   The password is checked by the CRM backend, never in the page. */
(function () {
  var KEY = 'od_admin_key', ROLE = 'od_admin_role';
  var LOGIN = '/performer-login.html';
  var BACKEND = 'script.google.com/macros/';
  var tag = document.currentScript;
  var allow = (tag && tag.getAttribute('data-allow')) || 'admin';

  function read(k) { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } }
  function clear() {
    try {
      localStorage.removeItem(KEY); localStorage.removeItem(ROLE);
      localStorage.removeItem('od_auth'); localStorage.removeItem('od_mgr');
    } catch (e) {}
  }
  function toLogin() { (window.top || window).location.replace(LOGIN); }

  // The old browser-only flags unlock nothing any more
  try { localStorage.removeItem('od_auth'); localStorage.removeItem('od_mgr'); } catch (e) {}

  var key = read(KEY), role = read(ROLE);
  var okRole = role === 'admin' || (allow === 'manager' && role === 'manager');
  if (!key || !okRole) { clear(); toLogin(); return; }

  // Add the password to every call this page makes to the CRM backend
  var realFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    try {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      if (url.indexOf(BACKEND) !== -1) {
        init = init || {};
        var method = (init.method || 'GET').toUpperCase();
        var body = init.body;
        if (method === 'GET') {
          input = url + (url.indexOf('?') === -1 ? '?' : '&') + 'adminKey=' + encodeURIComponent(key);
        } else if (typeof FormData !== 'undefined' && body instanceof FormData) {
          if (body.has('data')) {
            var d = JSON.parse(body.get('data')); d.adminKey = key; body.set('data', JSON.stringify(d));
          } else { body.set('adminKey', key); }
        } else if (typeof URLSearchParams !== 'undefined' && body instanceof URLSearchParams) {
          body.set('adminKey', key);
        } else if (typeof body === 'string') {
          var j = JSON.parse(body); j.adminKey = key; init.body = JSON.stringify(j);
        }
      }
    } catch (e) {}
    return realFetch(input, init);
  };

  window.ODAdmin = {
    role: role,
    signOut: function (to) { clear(); (window.top || window).location.href = to || LOGIN; }
  };

  // Recheck with the backend: a changed password signs this browser out
  var src = 'https://script.google.com/macros/s/AKfycbwEo1SmfVmXy8WCopvrbmgh3Rmea-2jVTE4VRxfLoj58PuwW3nsaVEroIZuCNJzmC0Jdw/exec';
  if (src) {
    realFetch(src + '?action=checkAdmin&adminKey=' + encodeURIComponent(key))
      .then(function (r) { return r.json(); })
      .then(function (res) { if (!res || !res.role) { clear(); toLogin(); } })
      .catch(function () {});
  }
})();
