// RosterPage.jsx — full talent roster page
const TALENT_URL = 'https://script.google.com/macros/s/AKfycbwEo1SmfVmXy8WCopvrbmgh3Rmea-2jVTE4VRxfLoj58PuwW3nsaVEroIZuCNJzmC0Jdw/exec?action=getTalent';

const PLACEHOLDERS = [
  { name: 'Vegas MC',      type: 'Host & Emcee',       tags: ['Vegas', 'Nightlife', 'Parties'],    avail: 'Open',   bio: 'High-energy host with 5+ years on the Vegas strip. Crowd work, bottle service entrances, and full event MC.' },
  { name: 'Comedy Act',    type: 'Stand-Up Comedian',  tags: ['Comedy', 'Corporate', 'Events'],    avail: 'Open',   bio: 'Stand-up and improv background. Clean and dirty sets available. Works any room size.' },
  { name: 'Party Starter', type: 'Bachelor Specialist', tags: ['Bachelor', 'Vegas', 'All night'],  avail: 'Booked', bio: 'The go-to for bachelor and bachelorette parties. Brings the chaos, keeps it legendary.' },
  { name: 'Film Ready',    type: 'SAG-Eligible Actor',  tags: ['Film', 'TV', 'Commercial'],        avail: 'Open',   bio: 'Set-ready and professional. SAG-eligible. Experience in film, TV, and branded content.' },
  { name: 'Brand Pro',     type: 'Corporate Performer', tags: ['Corporate', 'Brand-safe', 'Pro'],  avail: 'Open',   bio: 'Polished, audience-trained, and brand-safe. Trade shows, product launches, branded activations.' },
  { name: 'Themed Talent', type: 'Character Performer', tags: ['Themed', 'Custom', 'Costumed'],   avail: 'Open',   bio: 'Character work, themed costumes, and custom concepts. If you can dream it up, this is your person.' },
  { name: 'Nightlife Pro', type: 'Club Entertainer',    tags: ['Clubs', 'Pool', 'VIP'],            avail: 'Open',   bio: 'Pool parties, VIP sections, bar crawls. Knows the scene, shows up ready, always delivers.' },
  { name: 'Milestone MC',  type: 'Event Entertainer',   tags: ['Birthdays', 'Private', 'Roast'],  avail: 'Open',   bio: 'Custom entrances, roasts, surprise reveals. Makes the guest of honor feel like royalty.' },
];

const RosterCard = ({ t, isLive }) => {
  const href = isLive && t.social
    ? `https://instagram.com/${t.social.replace('@', '')}`
    : 'intake.html';
  const target = isLive && t.social ? '_blank' : undefined;
  const rel    = isLive && t.social ? 'noopener noreferrer' : undefined;

  return (
    <div className="od-roster-card">
      <div className="od-roster-photo">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        {!isLive && <div className="od-roster-photo-label">Portrait coming soon</div>}
        {isLive && t.social && <div className="od-roster-photo-label">{t.social}</div>}
      </div>

      <div className="od-roster-info">
        <div className="od-roster-header">
          <div>
            <div className="od-roster-name">{t.name}</div>
            <div className="od-roster-type">{t.type}</div>
          </div>
          <div className={`od-talent-avail ${t.avail === 'Booked' ? 'booked' : 'open'}`}>
            <span className="od-talent-avail-dot" /> {t.avail}
          </div>
        </div>

        {t.bio && <div className="od-roster-bio">{t.bio}</div>}

        <div className="od-roster-footer">
          <div className="od-talent-tags">
            {t.tags.map(tag => <span key={tag} className="od-talent-tag">{tag}</span>)}
          </div>
          <a href={href} target={target} rel={rel} className="od-roster-cta">
            {isLive && t.social ? 'View Instagram →' : 'Book this performer →'}
          </a>
        </div>
      </div>
    </div>
  );
};

const RosterPage = () => {
  const [roster, setRoster]   = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter]   = React.useState('All');

  React.useEffect(() => {
    fetch(TALENT_URL)
      .then(r => r.json())
      .then(d => {
        if (d.talent && d.talent.length > 0) {
          setRoster(d.talent.map(t => ({
            name:  t.name,
            type:  t.performerType || 'Performer',
            tags:  t.gigs ? t.gigs.split(',').map(g => g.trim()).filter(Boolean) : [t.location || 'Vegas'],
            avail: 'Open',
            social: t.social || null,
            bio:   t.bio   || null,
          })));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const isLive   = roster.length > 0;
  const cards    = isLive ? roster : PLACEHOLDERS;
  const allTags  = ['All', ...Array.from(new Set(cards.flatMap(c => c.tags))).sort()];
  const filtered = filter === 'All' ? cards : cards.filter(c => c.tags.includes(filter));

  return (
    <>
      {/* Page hero */}
      <section className="od-page-hero">
        <div className="od-inner">
          <div className="od-eyebrow">The roster</div>
          <h1 className="od-page-title">
            Meet the <span className="od-accent-blue">talent.</span>
          </h1>
          <p className="od-page-sub">
            Every performer is vetted, insured, and trained for the room.
            {isLive
              ? ` ${cards.length} active performer${cards.length !== 1 ? 's' : ''} available now.`
              : ' Profiles dropping soon — reach out and we\'ll match you manually.'
            }
          </p>
          {!isLive && (
            <a href="intake.html" className="od-btn-primary" style={{marginTop:'1.5rem',display:'inline-block'}}>
              Book a performer →
            </a>
          )}
        </div>
      </section>

      {/* Filter bar */}
      <section className="od-section" style={{paddingTop:'2rem',paddingBottom:'0'}}>
        <div className="od-inner">
          <div className="od-roster-filters">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`od-roster-filter-btn ${filter === tag ? 'active' : ''}`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="od-section">
        <div className="od-inner">
          {loading ? (
            <div className="od-text-center" style={{padding:'4rem 0',opacity:0.5}}>Loading roster…</div>
          ) : (
            <div className="od-roster-grid">
              {filtered.map((t, i) => (
                <RosterCard key={i} t={t} isLive={isLive} />
              ))}
            </div>
          )}

          {!isLive && (
            <div className="od-text-center" style={{marginTop:'3rem',padding:'2rem',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px'}}>
              <div className="od-eyebrow" style={{marginBottom:'0.75rem'}}>Don't see what you need?</div>
              <p style={{opacity:0.7,marginBottom:'1.5rem'}}>
                Our full roster is bigger than what's shown here. Tell us your event and we'll match you with the right talent.
              </p>
              <a href="intake.html" className="od-btn-primary">Get a custom quote →</a>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="od-section od-section-dark">
        <div className="od-inner od-text-center">
          <div className="od-eyebrow">Ready to book?</div>
          <h2 className="od-sec-title" style={{maxWidth:'600px',margin:'0 auto 1rem'}}>
            Tell us your event.<br/>We'll handle the rest.
          </h2>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap',marginTop:'2rem'}}>
            <a href="intake.html" className="od-btn-primary">Book a performer →</a>
            <a href="talent.html" className="od-btn-outline">Apply to join the roster →</a>
          </div>
        </div>
      </section>
    </>
  );
};

window.RosterPage = RosterPage;
