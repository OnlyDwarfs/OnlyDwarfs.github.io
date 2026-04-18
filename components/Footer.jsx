// Footer.jsx — editorial multi-column footer with mega wordmark
const Footer = () => (
  <footer className="od-footer" data-screen-label="Footer">
    <div className="od-inner">
      <div className="od-footer-cols">
        <div className="od-footer-col">
          <div className="od-footer-heading">Book</div>
          <a href="intake.html">Request a quote</a>
          <a href="#services">Services</a>
          <a href="divas.html">DwarfDivas show</a>
          <a href="#talent">Full roster</a>
        </div>
        <div className="od-footer-col">
          <div className="od-footer-heading">Talent</div>
          <a href="talent.html">Apply to the roster</a>
          <a href="talent.html">Open gigs</a>
          <a href="talent.html">Talent portal</a>
        </div>
        <div className="od-footer-col">
          <div className="od-footer-heading">Clients</div>
          <a href="client.html">Create a profile</a>
          <a href="intake.html">Book an event</a>
          <a href="client.html">Track my booking</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div className="od-footer-col">
          <div className="od-footer-heading">Follow</div>
          <a href="https://www.instagram.com/onlydwarfs" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@onlydwarfs" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="mailto:bookings@onlydwarfs.com">Contact us</a>
        </div>
      </div>

      <div className="od-footer-mega" aria-hidden="true">
        Only<span>Dwarfs</span>
      </div>

      <div className="od-footer-legal">
        <span>© 2026 OnlyDwarfs Entertainment LLC · Las Vegas, NV</span>
        <span className="od-footer-legal-links">
          <a href="privacy.html">Privacy</a>
          <a href="terms.html">Terms</a>
          <a href="hub.html" style={{ opacity: 0.55 }}>Staff ⚙</a>
        </span>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
