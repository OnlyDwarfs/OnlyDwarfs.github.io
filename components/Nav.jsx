// Nav.jsx — sticky top with live status dot + compact booking CTA
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`od-nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="od-nav-logo">
        Only<span>Dwarfs</span>
      </a>
      <ul className="od-nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#talent">Roster</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#showcase">Divas Show</a></li>
        <li>
          <a href="../intake/index.html" className="od-nav-cta">
            <span className="od-nav-cta-dot" /> Book now
          </a>
        </li>
      </ul>
    </nav>
  );
};

window.Nav = Nav;
