// site-nav.js — shared vanilla nav for admin pages (command.html, performer-dashboard.html)
// Injects the same nav as the public site. No React/Babel required.
(function () {
  const isAdmin = !!localStorage.getItem('od_auth');

  // ── CSS ─────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .sn-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: 64px;
      display: flex; align-items: center;
      padding: 0 32px;
      background: rgba(6,12,24,0.92);
      border-bottom: 1px solid #1A2E48;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      font-family: 'Inter', sans-serif;
      justify-content: space-between;
    }
    .sn-left { display: flex; align-items: center; gap: 28px; }
    .sn-logo { display: flex; align-items: center; text-decoration: none; }
    .sn-logo img { height: 28px; }
    .sn-links { display: flex; align-items: center; gap: 24px; list-style: none; margin: 0; padding: 0; }
    .sn-links a {
      color: #6B8299; font-size: 13px; font-weight: 600;
      text-decoration: none; transition: color 140ms;
    }
    .sn-links a:hover { color: #E2EAF4; }
    .sn-right { display: flex; align-items: center; gap: 16px; }
    .sn-cta {
      background: #00AFEF; color: #000; font-weight: 800; font-size: 13px;
      padding: 8px 18px; border-radius: 8px; text-decoration: none;
      transition: opacity 140ms;
    }
    .sn-cta:hover { opacity: 0.85; }

    /* Admin ⚡ button */
    .sn-admin-wrap { position: relative; }
    .sn-admin-btn {
      background: rgba(255,255,255,0.05); border: 1px solid #1A2E48;
      border-radius: 8px; color: #E2EAF4; font-size: 15px;
      padding: 6px 12px; cursor: pointer; font-family: inherit;
      transition: background 140ms, border-color 140ms;
      line-height: 1;
    }
    .sn-admin-btn:hover { background: rgba(255,255,255,0.1); border-color: #2A4464; }
    .sn-dropdown {
      display: none; position: absolute; right: 0; top: calc(100% + 10px);
      background: #0C1624; border: 1px solid #1A2E48;
      border-radius: 12px; padding: 6px; min-width: 200px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.7); z-index: 9999;
    }
    .sn-dropdown.open { display: block; }
    .sn-dropdown a, .sn-dropdown button {
      display: block; width: 100%; text-align: left;
      padding: 10px 13px; border-radius: 7px; font-size: 13px;
      font-weight: 600; font-family: inherit; text-decoration: none;
      color: #E2EAF4; background: none; border: none; cursor: pointer;
      transition: background 120ms;
    }
    .sn-dropdown a:hover, .sn-dropdown button:hover { background: rgba(255,255,255,0.07); }
    .sn-divider { height: 1px; background: #1A2E48; margin: 5px 6px; }
    .sn-signout { color: #4A6480 !important; }
    .sn-signout:hover { color: #f87171 !important; background: rgba(239,68,68,0.08) !important; }

    /* Push page content below nav */
    .sn-spacer { height: 64px; }
  `;
  document.head.appendChild(style);

  // ── HTML ─────────────────────────────────────────────────────────
  const nav = document.createElement('nav');
  nav.className = 'sn-nav';
  nav.innerHTML = `
    <div class="sn-left">
      <a href="index.html" class="sn-logo">
        <img src="assets/OnlyDwarfsLOGOText.svg" alt="OnlyDwarfs" />
      </a>
      <ul class="sn-links">
        <li><a href="services.html">Services</a></li>
        <li><a href="roster.html">Roster</a></li>
        <li><a href="divas.html">Divas Show</a></li>
      </ul>
    </div>
    <div class="sn-right">
      <a href="intake.html" class="sn-cta">Book now</a>
      ${isAdmin ? `
      <div class="sn-admin-wrap">
        <button class="sn-admin-btn" id="sn-admin-btn">⚡</button>
        <div class="sn-dropdown" id="sn-dropdown">
          <a href="command.html">⚙️ Admin Panel</a>
          <a href="performer-dashboard.html">🎭 Performer Dashboard</a>
          <a href="hub.html">📊 Hub</a>
          <a href="index.html">🌐 Public Site</a>
          <div class="sn-divider"></div>
          <button class="sn-signout" id="sn-signout">Sign Out</button>
        </div>
      </div>` : `<a href="performer-login.html" style="color:#6B8299;font-size:13px;font-weight:600;text-decoration:none;">Login</a>`}
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  // ── Dropdown toggle ───────────────────────────────────────────────
  if (isAdmin) {
    const btn      = document.getElementById('sn-admin-btn');
    const dropdown = document.getElementById('sn-dropdown');
    const signout  = document.getElementById('sn-signout');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sn-admin-wrap')) dropdown.classList.remove('open');
    });
    signout.addEventListener('click', () => {
      localStorage.removeItem('od_auth');
      sessionStorage.removeItem('od_performer');
      window.location.href = 'index.html';
    });
  }
})();
