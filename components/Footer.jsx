// Footer.jsx — editorial multi-column footer with mega wordmark
const Footer = () => (
  <footer className="od-footer" data-screen-label="Footer">
    <div className="od-inner">
      <div className="od-footer-cols">
        <div className="od-footer-col">
          <div className="od-footer-heading">Book</div>
          <a href="../intake/index.html">Request a quote</a>
          <a href="#services">Services</a>
          <a href="#showcase">Divas Show</a>
          <a href="#talent">Full roster</a>
        </div>
        <div className="od-footer-col">
          <div className="od-footer-heading">Talent</div>
          <a href="#">Apply to the roster</a>
          <a href="#">Open gigs</a>
          <a href="#">Talent login</a>
          <a href="#">Agent login</a>
        </div>
        <div className="od-footer-col">
          <div className="od-footer-heading">Company</div>
          <a href="#">About</a>
          <a href="#">Press</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>
        <div className="od-footer-col">
          <div className="od-footer-heading">Follow</div>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
          <a href="#">X / Twitter</a>
        </div>
      </div>

      <div className="od-footer-mega" aria-hidden="true">
        Only<span>Dwarfs</span>
      </div>

      <div className="od-footer-legal">
        <span>© 2026 OnlyDwarfs Entertainment LLC · Las Vegas, NV</span>
        <span className="od-footer-legal-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Licensing</a>
        </span>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
