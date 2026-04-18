// Nav.jsx — sticky top with live status dot + compact booking CTA
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
      <a href="index.html" className="od-nav-logo">
        <img src="assets/OnlyDwarfsLOGOText.svg" alt="OnlyDwarfs" className="od-nav-logo-img" />
      </a>
      <ul className="od-nav-links">
        <li><a href={href('#services')}>Services</a></li>
        <li><a href={href('#talent')}>Roster</a></li>
        <li><a href={href('#process')}>Process</a></li>
        <li><a href="divas.html">Divas Show</a></li>
        <li>
          <a href="intake.html" className="od-nav-cta">
            <span className="od-nav-cta-dot" /> Book now
          </a>
        </li>
        <li>
          <a href="hub.html" className="od-nav-staff" title="Staff portal">
            ⚙
          </a>
        </li>
      </ul>
    </nav>
  );
};

window.Nav = Nav;
