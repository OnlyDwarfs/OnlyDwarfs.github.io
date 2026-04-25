/**
 * universal-nav.js — injects the OnlyDwarfs site nav on every public page.
 * Detects admin auth, shows extra links + Sign Out when logged in.
 * Skips injection inside iframes (admin shell).
 */

(function () {
  // Don't inject inside an iframe
  if (window.self !== window.top) return;

  const isAdmin = localStorage.getItem('od_auth') === 'd7e135b4594b61ba3b6d0c242e3124b1d2603862535a903631b98ee60945f555';

  // ── STYLES ──────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .un-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 9900;
      height: 56px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 28px;
      background: rgba(8,10,18,0.96);
      border-bottom: 1px solid rgba(255,255,255,0.07);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
    .un-logo {
      display: flex; align-items: center; text-decoration: none;
      flex-shrink: 0;
    }
    .un-logo img { height: 24px; }
    .un-logo-text {
      font-size: 15px; font-weight: 800;
      color: #9B59F5;
    }
    .un-logo-text span { color: #E8EDF5; }
    .un-links {
      display: flex; align-items: center; gap: 4px;
      list-style: none; margin: 0; padding: 0;
      flex-wrap: nowrap;
    }
    .un-links a {
      color: rgba(255,255,255,0.50);
      font-size: 13px; font-weight: 600;
      text-decoration: none; padding: 6px 10px;
      border-radius: 6px;
      transition: color 140ms, background 140ms;
      white-space: nowrap;
    }
    .un-links a:hover { color: #fff; background: rgba(255,255,255,0.07); }
    .un-sep-v {
      width: 1px; height: 16px;
      background: rgba(255,255,255,0.10);
      margin: 0 4px;
      flex-shrink: 0;
    }
    .un-right { display: flex; align-items: center; gap: 8px; }
    .un-cta {
      background: #00AFEF; color: #000;
      font-size: 12px; font-weight: 800;
      padding: 7px 16px; border-radius: 7px;
      text-decoration: none; letter-spacing: 0.01em;
      display: flex; align-items: center; gap: 6px;
      transition: opacity 140ms; white-space: nowrap;
    }
    .un-cta::before {
      content: ''; display: inline-block;
      width: 6px; height: 6px; border-radius: 50%;
      background: #000; opacity: 0.5;
    }
    .un-cta:hover { opacity: 0.88; }
    .un-login {
      color: rgba(255,255,255,0.40);
      font-size: 12px; font-weight: 600;
      text-decoration: none; padding: 6px 10px;
      border-radius: 6px;
      transition: color 140ms, background 140ms;
    }
    .un-login:hover { color: #fff; background: rgba(255,255,255,0.06); }
    .un-signout-btn {
      background: transparent; border: 1px solid rgba(255,255,255,0.10);
      border-radius: 6px; color: rgba(255,255,255,0.35);
      font-size: 11px; font-weight: 600; padding: 5px 10px;
      cursor: pointer; font-family: inherit; line-height: 1;
      transition: all 140ms;
    }
    .un-signout-btn:hover {
      background: rgba(239,68,68,0.1);
      border-color: rgba(239,68,68,0.3);
      color: #f87171;
    }
    /* push page content below nav */
    .un-body-offset { padding-top: 56px !important; }
  `;
  document.head.appendChild(style);

  // ── NAV HTML ─────────────────────────────────────────────────
  const nav = document.createElement('nav');
  nav.className = 'un-nav';
  nav.innerHTML = `
    <a href="/index.html" class="un-logo">
      <img
        src="/assets/OnlyDwarfsLOGOText.svg"
        alt="OnlyDwarfs"
        onerror="this.outerHTML='<span class=\\'un-logo-text\\'>Only<span>Dwarfs</span></span>'"
      />
    </a>

    <ul class="un-links">
      <li><a href="/services.html">Services</a></li>
      <li><a href="/divas.html">Divas Show</a></li>
      ${isAdmin ? `
      <li class="un-sep-v"></li>
      <li><a href="/admin.html#crm">CRM</a></li>
      <li><a href="/admin.html#roster">Roster</a></li>
      <li><a href="/admin.html#divas">DwarfDivas</a></li>
      <li><a href="/admin.html#hub">Hub</a></li>
      ` : ''}
    </ul>

    <div class="un-right">
      <a href="/intake.html" class="un-cta">Book now</a>
      ${isAdmin
        ? `<button class="un-signout-btn" onclick="(function(){localStorage.removeItem('od_auth');sessionStorage.removeItem('od_performer');window.location.href='/index.html';})()">Sign Out</button>`
        : `<a href="/performer-login.html" class="un-login">Login</a>`
      }
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  // Push body content below nav
  document.body.classList.add('un-body-offset');
})();
