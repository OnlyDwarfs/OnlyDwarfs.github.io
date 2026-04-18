// FAQ.jsx — accordion
const FAQ = () => {
  const items = [
    { q: 'How much does it cost to book a performer?',  a: 'Pricing starts at $350 and varies by event type, duration, location, and specific performer. Every inquiry gets a custom quote within 24 hours — no commitment.' },
    { q: 'How far in advance do I need to book?',       a: 'We recommend 1–2 weeks in advance to secure availability, especially weekend events. We often accommodate last-minute — reach out either way.' },
    { q: 'Do you travel outside Las Vegas?',            a: 'We book worldwide. Performers based across the US, coordinated travel for events anywhere in the country or internationally.' },
    { q: 'What kinds of events do you cover?',          a: 'Bachelor/ette parties, birthdays, corporate events, Vegas nightlife, private parties, film and commercial work, promotions, and anything else we can invoice for.' },
    { q: 'Are performers insured and professional?',    a: 'Every performer on the OnlyDwarfs roster is vetted, professional, and covered by our event insurance. We carry full liability for every booking.' },
    { q: 'Can I request a specific performer?',         a: 'Absolutely. If you have someone in mind from our roster, request them by name in the intake form. Otherwise we match you to the best fit for your event.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="od-faq od-section-dark" data-screen-label="FAQ">
      <div className="od-inner">
        <div className="od-section-head">
          <div><div className="od-eyebrow">Questions</div><h2 className="od-sec-title">You asked.<br/><span className="od-accent-blue">We answered.</span></h2></div>
          <p className="od-sec-sub">Still have something specific? Drop it in the booking form — a real booking agent will reply in under a day.</p>
        </div>
        <div className="od-faq-list">
          {items.map((it, i) => (
            <div key={i} className={`od-faq-item ${open === i ? 'open' : ''}`}>
              <button className="od-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="od-faq-q-num">{String(i + 1).padStart(2, '00')}</span>
                <span className="od-faq-q-text">{it.q}</span>
                <span className="od-faq-q-toggle">{open === i ? '−' : '+'}</span>
              </button>
              <div className="od-faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.FAQ = FAQ;