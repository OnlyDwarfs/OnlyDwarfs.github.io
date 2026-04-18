// TalentApply.jsx — talent roster application form
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwEo1SmfVmXy8WCopvrbmgh3Rmea-2jVTE4VRxfLoj58PuwW3nsaVEroIZuCNJzmC0Jdw/exec';

const TalentApply = () => {
  const [form, setForm] = React.useState({
    name: '', phone: '', email: '', location: '',
    performerType: '', rate: '', gigs: [], social: '', bio: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [focused, setFocused] = React.useState(null);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const performerTypes = [
    'Dwarf Entertainer',
    'Dwarf Dancer',
    'Dwarf Comedian',
    'Dwarf MC / Host',
    'Dwarf Actor / Actress',
    'Dwarf Stripper',
    'Other',
  ];

  const gigTypes = [
    'Bachelor / Bachelorette',
    'Birthday Parties',
    'Corporate Events',
    'Bar / Club Nights',
    'Weddings',
    'Private Parties',
    'DwarfDivas Show',
    'Film / TV / Media',
  ];

  const toggleGig = (gig) => {
    const curr = form.gigs;
    setForm({ ...form, gigs: curr.includes(gig) ? curr.filter(g => g !== gig) : [...curr, gig] });
  };

  const required = ['name', 'phone', 'email', 'location', 'performerType'];
  const completed = required.filter(k => form[k].trim().length > 0).length;
  const pct = Math.round((completed / required.length) * 100);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'newTalent',
          name: form.name,
          phone: form.phone,
          email: form.email,
          location: form.location,
          performerType: form.performerType,
          rate: form.rate,
          gigs: form.gigs.join(', '),
          social: form.social,
          bio: form.bio,
        }),
      });
    } catch (err) {}
    setSubmitting(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="od-intake-success">
        <div className="od-intake-success-card">
          <div className="od-intake-success-mark">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <div className="od-eyebrow">Application received</div>
          <h1 className="od-intake-success-title">
            You're on our <span className="od-accent-blue">radar.</span>
          </h1>
          <p className="od-intake-success-sub">
            Our booking team reviews every application. If you're a fit, we'll reach out within 3–5 business days with next steps.
          </p>
          <div className="od-intake-success-meta">
            <div className="od-intake-success-row">
              <span>Name</span>
              <span>{form.name}</span>
            </div>
            <div className="od-intake-success-row">
              <span>Contact</span>
              <span>{form.email}</span>
            </div>
            <div className="od-intake-success-row">
              <span>Type</span>
              <span>{form.performerType || '—'}</span>
            </div>
          </div>
          <div className="od-intake-success-actions">
            <a href="index.html" className="od-btn-outline">Back to home</a>
            <a href="mailto:talent@onlydwarfs.com" className="od-btn-primary">Email talent team</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="od-intake" data-screen-label="Talent Application">
      <div className="od-intake-glow" aria-hidden="true" />
      <div className="od-intake-shell">

        {/* ── LEFT PANEL ── */}
        <aside className="od-intake-aside">
          <div className="od-intake-aside-inner">
            <a href="index.html" className="od-intake-back">
              <span className="od-intake-back-arrow">←</span> Back to OnlyDwarfs
            </a>

            <div className="od-eyebrow" style={{ marginTop: 56 }}>Join the roster</div>
            <h1 className="od-intake-headline">
              Get paid to<br/>
              <span className="od-accent-blue">perform.</span>
            </h1>
            <p className="od-intake-lede">
              We book 50+ events a month and we're always looking for professionals who can show up, deliver, and represent the brand.
            </p>

            <div className="od-intake-pts">
              <div className="od-intake-pt">
                <span className="od-intake-pt-num">01</span>
                <div>
                  <div className="od-intake-pt-t">Real bookings</div>
                  <div className="od-intake-pt-d">We have the demand. We need the talent. That's the whole equation.</div>
                </div>
              </div>
              <div className="od-intake-pt">
                <span className="od-intake-pt-num">02</span>
                <div>
                  <div className="od-intake-pt-t">You set your rate</div>
                  <div className="od-intake-pt-d">Tell us what you charge. We'll find events that work for both sides.</div>
                </div>
              </div>
              <div className="od-intake-pt">
                <span className="od-intake-pt-num">03</span>
                <div>
                  <div className="od-intake-pt-t">We handle the client</div>
                  <div className="od-intake-pt-d">Contracts, logistics, payment. You just perform.</div>
                </div>
              </div>
            </div>

            <div className="od-intake-contact">
              <div className="od-intake-contact-lbl">Questions about the roster?</div>
              <a href="mailto:talent@onlydwarfs.com" className="od-intake-contact-val">talent@onlydwarfs.com</a>
              <a href="tel:+17028722970" className="od-intake-contact-val">+1 (702) 872-2970</a>
            </div>
          </div>
        </aside>

        {/* ── RIGHT FORM ── */}
        <main className="od-intake-form-wrap">
          <div className="od-intake-progress-bar">
            <div className="od-intake-progress-meta">
              <span>Talent application</span>
              <span className="od-intake-progress-pct">{completed} / {required.length} required</span>
            </div>
            <div className="od-intake-progress-track">
              <div className="od-intake-progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <form className="od-intake-form" onSubmit={handleSubmit}>

            {/* Section 1 — About you */}
            <div className="od-intake-group">
              <div className="od-intake-group-head">
                <span className="od-intake-group-num">01</span>
                <div>
                  <div className="od-intake-group-title">About you</div>
                  <div className="od-intake-group-sub">Basic contact info so we can reach you.</div>
                </div>
              </div>
              <div className="od-intake-fields">
                <TField label="Full name" required focused={focused === 'name'}>
                  <input type="text" value={form.name} onChange={update('name')}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    placeholder="Your full name" required />
                </TField>
                <div className="od-intake-row-2">
                  <TField label="Email" required focused={focused === 'email'}>
                    <input type="email" value={form.email} onChange={update('email')}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      placeholder="you@email.com" required />
                  </TField>
                  <TField label="Phone" required focused={focused === 'phone'}>
                    <input type="tel" value={form.phone} onChange={update('phone')}
                      onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                      placeholder="(555) 123-4567" required />
                  </TField>
                </div>
                <TField label="Location (city, state)" required focused={focused === 'location'}>
                  <input type="text" value={form.location} onChange={update('location')}
                    onFocus={() => setFocused('location')} onBlur={() => setFocused(null)}
                    placeholder="Las Vegas, NV" required />
                </TField>
              </div>
            </div>

            {/* Section 2 — Your performance */}
            <div className="od-intake-group">
              <div className="od-intake-group-head">
                <span className="od-intake-group-num">02</span>
                <div>
                  <div className="od-intake-group-title">Your performance</div>
                  <div className="od-intake-group-sub">Tell us what you do and what you charge.</div>
                </div>
              </div>
              <div className="od-intake-fields">
                <TField label="Performer type" required focused={focused === 'performerType'}>
                  <div className="od-intake-select">
                    <select value={form.performerType} onChange={update('performerType')}
                      onFocus={() => setFocused('performerType')} onBlur={() => setFocused(null)} required>
                      <option value="">Select your type…</option>
                      {performerTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <span className="od-intake-select-arrow" aria-hidden="true">▾</span>
                  </div>
                </TField>
                <TField label="Your rate (per appearance)" focused={focused === 'rate'}
                  hint="Ballpark is fine. We'll discuss specifics when we talk.">
                  <input type="text" value={form.rate} onChange={update('rate')}
                    onFocus={() => setFocused('rate')} onBlur={() => setFocused(null)}
                    placeholder="e.g. $500 / appearance" />
                </TField>
                <div>
                  <div className="od-intake-field-label" style={{ marginBottom: 12 }}>
                    <span>Types of gigs you want</span>
                  </div>
                  <div className="od-gig-grid">
                    {gigTypes.map(g => (
                      <button key={g} type="button"
                        className={`od-gig-chip ${form.gigs.includes(g) ? 'active' : ''}`}
                        onClick={() => toggleGig(g)}>
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 — Your profile */}
            <div className="od-intake-group">
              <div className="od-intake-group-head">
                <span className="od-intake-group-num">03</span>
                <div>
                  <div className="od-intake-group-title">Your profile</div>
                  <div className="od-intake-group-sub">Help us know what makes you memorable.</div>
                </div>
              </div>
              <div className="od-intake-fields">
                <TField label="Social media handle" focused={focused === 'social'}
                  hint="Instagram, TikTok, or wherever you're most active. We'll look you up.">
                  <input type="text" value={form.social} onChange={update('social')}
                    onFocus={() => setFocused('social')} onBlur={() => setFocused(null)}
                    placeholder="@yourhandle" />
                </TField>
                <TField label="Short bio" focused={focused === 'bio'}
                  hint="Who you are, what you bring to the room. No fluff — just the real version.">
                  <textarea rows={5} value={form.bio} onChange={update('bio')}
                    onFocus={() => setFocused('bio')} onBlur={() => setFocused(null)}
                    placeholder="I've been performing for 8 years. I do stand-up, I can MC, and I've worked nightclubs all over Vegas. I show up on time and I close the room." />
                </TField>
              </div>
            </div>

            <div className="od-intake-submit-row">
              <div className="od-intake-legal">
                Submitting means you're interested — it's not a commitment. We'll reach out only if there's a fit.
              </div>
              <button type="submit" className="od-btn-primary od-btn-lg od-intake-submit" disabled={submitting}>
                {submitting ? 'Sending…' : <React.Fragment>Apply to the roster <span className="od-btn-arrow">→</span></React.Fragment>}
              </button>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
};

const TField = ({ label, required, focused, hint, children }) => (
  <label className={`od-intake-field ${focused ? 'focused' : ''}`}>
    <div className="od-intake-field-label">
      <span>{label}</span>
      {required && <span className="od-intake-field-req">Required</span>}
    </div>
    {children}
    {hint && <div className="od-intake-field-hint">{hint}</div>}
  </label>
);

window.TalentApply = TalentApply;