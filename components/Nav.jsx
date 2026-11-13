// Nav.jsx -- sticky top with live status dot + compact booking CTA
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Phone menu: close on Escape
  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Use anchor-only links on the homepage, full path links everywhere else
  const isHome = window.location.pathname === '/' ||
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname.endsWith('/');
  const href = (anchor) => isHome ? anchor : `index.html${anchor}`;

  return (
    <nav className={`od-nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="od-nav-inner-wrap">
        {/* Phone-only menu button (hidden on desktop via site.css) */}
        <button
          type="button"
          className="od-nav-burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="od-nav-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
        <ul className="od-nav-links od-nav-links-left">
          <li><a href="services.html">Services</a></li>
          <li><a href="roster.html">Roster</a></li>
          <li><a href={href('#process')}>Process</a></li>
        </ul>
        <a href="index.html" className="od-nav-logo">
          <img src="assets/OnlyDwarfsLOGOText.svg" alt="OnlyDwarfs" className="od-nav-logo-img" />
        </a>
        <ul className="od-nav-links od-nav-links-right">
          <li><a href="divas.html">Divas Show</a></li>
          <li><a href="performer-login.html">Login</a></li>
          <li>
            <a href="intake.html" className="od-nav-cta">
              <span className="od-nav-cta-dot" /> Book now
            </a>
          </li>
          <li>
            <a href="login.html" className="od-nav-staff" title="Staff portal"></a>
          </li>
        </ul>
      </div>
      {/* Phone-only dropdown: the same links as the desktop bar */}
      <div id="od-nav-menu" className="od-nav-menu" hidden={!menuOpen}>
        <a href="services.html" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="roster.html" onClick={() => setMenuOpen(false)}>Roster</a>
        <a href={href('#process')} onClick={() => setMenuOpen(false)}>Process</a>
        <a href="divas.html" onClick={() => setMenuOpen(false)}>Divas Show</a>
        <a href="performer-login.html" onClick={() => setMenuOpen(false)}>Login</a>
      </div>
    </nav>
  );
};

window.Nav = Nav;