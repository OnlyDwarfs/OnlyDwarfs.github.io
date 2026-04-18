// Testimonial.jsx — big editorial quote
const Testimonial = () => {
  const quotes = [
    { q: "Showed up exactly as promised, ran the whole night, everyone's still talking about it three months later. These guys are the move.", who: 'Marcus R.', role: 'Bachelor party · Las Vegas · Oct 2025' },
    { q: "We needed a really specific character for a launch event and they cast it in 48 hours. Professional from first call to wrap.", who: 'Priya K.', role: 'Brand marketing · New York · Jan 2026' },
    { q: "I've booked through three other agencies before finding OnlyDwarfs. Nobody else even comes close on talent or logistics.", who: 'Jon D.', role: 'Event producer · Miami · Mar 2026' },
  ];
  const [i, setI] = React.useState(0);
  return (
    <section className="od-testi" data-screen-label="Testimonial">
      <div className="od-inner">
        <div className="od-eyebrow" style={{ marginBottom: 28 }}>Word of mouth</div>
        <blockquote className="od-testi-quote"><span className="od-testi-mark" aria-hidden="true">"</span>{quotes[i].q}</blockquote>
        <div className="od-testi-foot">
          <div><div className="od-testi-who">{quotes[i].who}</div><div className="od-testi-role">{quotes[i].role}</div></div>
          <div className="od-testi-nav">
            {quotes.map((_, idx) => (
              <button key={idx} className={`od-testi-dot ${idx === i ? 'active' : ''}`} onClick={() => setI(idx)} aria-label={`Quote ${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
window.Testimonial = Testimonial;