// IntakeForm.jsx — premium booking intake form
const IntakeForm = () => {
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '',
    type: '', date: '', location: '',
    guests: '', details: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [focused, setFocused] = React.useState(null);
  const [smsConsent, setSmsConsent] = React.useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Completion math for the side-panel progress
  const required = ['name', 'email', 'phone', 'type', 'date', 'location', 'guests'];
  const completed = required.filter((k) => form[k].trim().length > 0).length;
  const pct = Math.round((completed / required.length) * 100);

  const eventTypes = [
    'Birthday',
    'Bachelor / Bachelorette',
    'Private Party',
    'Bar / Club Night',
    'Corporate',
    'Wedding',
    'Other',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwEo1SmfVmXy8WCopvrbmgh3Rmea-2jVTE4VRxfLoj58PuwW3nsaVEroIZuCNJzmC0Jdw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'newLead',
          name: form.name,
          email: form.email,
          phone: form.phone,
          eventType: form.type,
          eventDate: form.date,
          location: form.location,
          headcount: form.guests,
          details: form.details,
          source: 'website',
        }),
      });
    } catch (err) {
      // no-cors mode won't surface a readable response — treat completion as success
    }
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
          <div className="od-eyebrow">Request received</div>
          <h1 className="od-intake-success-title">
            You're on the <span className="od-accent-blue">list.</span>
          </h1>
          <p className="od-intake-success-sub">
            A booking agent will reach out within 24 hours with a custom quote and a shortlist of performers for your event.
          </p>
          <div className="od-intake-success-meta">
            <div className="od-intake-success-row">
              <span>Reference</span>
              <span className="od-mono">OD-{Math.random().toString(36).slice(2, 8).toUpperCase()}</span>
            </div>
            <div className="od-intake-success-row">
              <span>Contact</span>
              <span>{form.email}</span>
            </div>
            <div className="od-intake-success-row">
              <span>Event</span>
              <span>{form.type || '—'} · {form.location || '—'}</span>
            </div>
          </div>
          <div className="od-intake-success-actions">
            <a href="index.html" className="od-btn-outline">Back to home</a>
            <a href="mailto:bookings@onlydwarfs.com" className="od-btn-primary">Email the team</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="od-intake" data-screen-label="Intake Form">
      <div className="od-intake-glow" aria-hidden="true" />
      <div className="od-intake-shell">

        {/* ── LEFT: editorial panel ── */}
        <aside className="od-intake-aside">
          <div className="od-intake-aside-inner">
            <a href="index.html" className="od-intake-back">
              <span className="od-intake-back-arrow">←</span> Back to OnlyDwarfs
            </a>

            <div className="od-eyebrow" style={{ marginTop: 56 }}>
              Booking intake · Step 1 of 1
            </div>
            <h1 className="od-intake-headline">
              Tell us<br/>
              the <span className="od-accent-blue">vibe.</span>
            </h1>
            <p className="od-intake-lede">
              A real booking agent replies within 24 hours with a custom quote and a handpicked shortlist. No bots. No commitment.
            </p>

            <div className="od-intake-pts">
              <div className="od-intake-pt">
                <span className="od-intake-pt-num">01</span>
                <div>
                  <div className="od-intake-pt-t">Vetted talent</div>
                  <div className="od-intake-pt-d">Every performer is insured, trained for the room, and show-ready.</div>
                </div>
              </div>
              <div className="od-intake-pt">
                <span className="od-intake-pt-num">02</span>
                <div>
                  <div className="od-intake-pt-t">Quote in 24 hours</div>
                  <div className="od-intake-pt-d">Custom pricing per event, per venue. Usually faster than 24.</div>
                </div>
              </div>
              <div className="od-intake-pt">
                <span className="od-intake-pt-num">03</span>
                <div>
                  <div className="od-intake-pt-t">We handle logistics</div>
                  <div className="od-intake-pt-d">Contracts, riders, travel, coordination. You just enjoy the show.</div>
                </div>
              </div>
            </div>

            <div className="od-intake-contact">
              <div className="od-intake-contact-lbl">Need to talk to a human?</div>
              <a href="mailto:bookings@onlydwarfs.com" className="od-intake-contact-val">bookings@onlydwarfs.com</a>
              <a href="tel:+17028722970" className="od-intake-contact-val">+1 (702) 872-2970</a>
            </div>
          </div>
        </aside>

        {/* ── RIGHT: form ── */}
        <main className="od-intake-form-wrap">

          <div className="od-intake-progress-bar">
            <div className="od-intake-progress-meta">
              <span>Booking request</span>
              <span className="od-intake-progress-pct">{completed} / {required.length} fields</span>
            </div>
            <div className="od-intake-progress-track">
              <div className="od-intake-progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <form className="od-intake-form" onSubmit={handleSubmit}>

            {/* Section 1 — You */}
            <div className="od-intake-group">
              <div className="od-intake-group-head">
                <span className="od-intake-group-num">01</span>
                <div>
                  <div className="od-intake-group-title">About you</div>
                  <div className="od-intake-group-sub">So we know who's asking and how to reach you.</div>
                </div>
              </div>
              <div className="od-intake-fields">
                <Field label="Full name" required focused={focused === 'name'}>
                  <input
                    type="text" value={form.name} onChange={update('name')}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    placeholder="Jordan Marino" required
                  />
                </Field>
                <div className="od-intake-row-2">
                  <Field label="Email" required focused={focused === 'email'}>
                    <input
                      type="email" value={form.email} onChange={update('email')}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      placeholder="you@company.com" required
                    />
                  </Field>
                  <Field label="Phone" required focused={focused === 'phone'}>
                    <input
                      type="tel" value={form.phone} onChange={update('phone')}
                      onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                      placeholder="(555) 123-4567" required
                    />
                  </Field>
                </div>
              </div>
            </div>

            {/* Section 2 — The event */}
            <div className="od-intake-group">
              <div className="od-intake-group-head">
                <span className="od-intake-group-num">02</span>
                <div>
                  <div className="od-intake-group-title">The event</div>
                  <div className="od-intake-group-sub">What kind of night are we booking for?</div>
                </div>
              </div>
              <div className="od-intake-fields">
                <Field label="Type of entertainment" required focused={focused === 'type'}>
                  <div className="od-intake-select">
                    <select
                      value={form.type} onChange={update('type')}
                      onFocus={() => setFocused('type')} onBlur={() => setFocused(null)}
                      required
                    >
                      <option value="">Select event type…</option>
                      {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <span className="od-intake-select-arrow" aria-hidden="true">▾</span>
                  </div>
                </Field>
                <div className="od-intake-row-2">
                  <Field label="Event date" required focused={focused === 'date'}>
                    <input
                      type="date" value={form.date} onChange={update('date')}
                      onFocus={() => setFocused('date')} onBlur={() => setFocused(null)}
                      required
                    />
                  </Field>
                  <Field label="Location / City" required focused={focused === 'location'}>
                    <input
                      type="text" value={form.location} onChange={update('location')}
                      onFocus={() => setFocused('location')} onBlur={() => setFocused(null)}
                      placeholder="Las Vegas, NV" required
                    />
                  </Field>
                </div>
                <Field label="Approximate guest count" required focused={focused === 'guests'}>
                  <div className="od-intake-guest-row">
                    <input
                      type="number" min="1" value={form.guests} onChange={update('guests')}
                      onFocus={() => setFocused('guests')} onBlur={() => setFocused(null)}
                      placeholder="25" required
                    />
                    <div className="od-intake-guest-chips">
                      {['1–10', '10–25', '25–50', '50–100', '100+'].map((r) => (
                        <button
                          key={r} type="button"
                          className="od-intake-chip"
                          onClick={() => {
                            const map = { '1–10': '10', '10–25': '25', '25–50': '50', '50–100': '100', '100+': '150' };
                            setForm({ ...form, guests: map[r] });
                          }}
                        >{r}</button>
                      ))}
                    </div>
                  </div>
                </Field>
              </div>
            </div>

            {/* Section 3 — Details */}
            <div className="od-intake-group">
              <div className="od-intake-group-head">
                <span className="od-intake-group-num">03</span>
                <div>
                  <div className="od-intake-group-title">The details</div>
                  <div className="od-intake-group-sub">The weirder the better. Give us everything.</div>
                </div>
              </div>
              <div className="od-intake-fields">
                <Field label="Additional details" focused={focused === 'details'} hint="Theme, specific performers, timeline, surprise elements, dress code — anything helps.">
                  <textarea
                    rows={5} value={form.details} onChange={update('details')}
                    onFocus={() => setFocused('details')} onBlur={() => setFocused(null)}
                    placeholder="We're planning a bachelor party at the Cosmopolitan, want a dwarf MC for the steakhouse dinner and something wild for the after-party…"
                  />
                </Field>
              </div>
            </div>

            {/* Submit */}
            <div className="od-intake-submit-row">
              <div className="od-intake-legal">
                <label className="od-sms-consent">
                  <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} style={{marginRight:'7px', accentColor:'#9B59F5', flexShrink:0, marginTop:'2px'}} />
                  <span>I agree to receive text messages from OnlyDwarfs about my booking inquiry. Message &amp; data rates may apply. Reply STOP to opt out.</span>
                </label>
                <div style={{marginTop:'8px'}}>By submitting, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>. We'll never share your details.</div>
              </div>
              <button type="submit" className="od-btn-primary od-btn-lg od-intake-submit" disabled={submitting}>
                {submitting ? 'Sending…' : <>Request my quote <span className="od-btn-arrow">→</span></>}
              </button>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
};

// Small field wrapper
const Field = ({ label, required, focused, hint, children }) => (
  <label className={`od-intake-field ${focused ? 'focused' : ''}`}>
    <div className="od-intake-field-label">
      <span>{label}</span>
      {required && <span className="od-intake-field-req">Required</span>}
    </div>
    {children}