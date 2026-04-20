// Marquee.jsx — infinite horizontal marquee with the brand's greatest hits
const Marquee = () => {
  const items = [
    'Legendary',
    'Booked',
    'Unforgettable',
    'Worldwide',
    'Iconic',
    'Nightlife',
    'Vegas',
    'Flagship',
    'Showtime',
    'On Demand',
  ];
  const full = [...items, ...items, ...items];
  return (
    <div className="od-marquee" aria-hidden="true">
      <div className="od-marquee-track">
        {full.map((w, i) => (
          <span key={i} className="od-marquee-item">
            {w}
            <span className="od-marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

window.Marquee = Marquee;
