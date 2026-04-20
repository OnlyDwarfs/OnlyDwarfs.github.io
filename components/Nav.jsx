// Nav.jsx -- sticky top with live status dot + compact booking CTA
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Use anchor-only links on the homepage, full path links everywhere else
  const isHome = window.location.pathname === '/' ||
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname.endsWith('/');
  const href = (anchor) => isHome ? anchor : `index.html${anchor}`;

  return (
    <nav className={`od-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="od-nav-inner-wrap">
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
            <a href="hub.html" className="od-nav-staff" title="Staff portal"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

window.Nav = Nav;
