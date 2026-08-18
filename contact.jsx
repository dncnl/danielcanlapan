const { Eyebrow, Field, Input, Textarea, Select, Checkbox, Button, Card, Icon, CopyEmail, Reveal } = window.DncnlDevDesignSystem_cd0d7e;

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const invalid = touched && !email.includes('@');
  return (
    <section id="contact" style={{ padding: 'var(--section-y) var(--page-pad-x)', background: 'var(--surface)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="06" rule>contact</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h2 style={{ fontSize: 'var(--fs-3xl)', maxWidth: '20ch', margin: 'var(--space-5) 0 0' }}>Email is the fastest way to reach me.</h2>
        </Reveal>
        <Reveal delay={100}>
          <CopyEmail email="danielcanlapan0402@gmail.com" style={{ marginTop: 'var(--space-6)', maxWidth: 760 }} />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px,0.85fr) minmax(340px,1fr)', gap: 'clamp(32px,5vw,80px)', marginTop: 'clamp(40px,5vw,72px)', alignItems: 'start' }}>
          <Reveal delay={60}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <p style={{ margin: 0, maxWidth: 'var(--measure-narrow)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
                Internships, project work, collaborations, or a question about something I've built — a paragraph is enough. I reply within two working days.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(max(200px, (100% - var(--space-5)) / 2), 1fr))',
                gap: 'var(--space-4) var(--space-5)', justifyContent: 'center', maxWidth: 480, margin: '0 auto',
                width: '100%', fontSize: 'var(--fs-sm)', paddingTop: 'var(--space-4)', borderTop: 'var(--rule)',
              }}>
                <a href="tel:+639614904854" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="phone" size={16} />+63 961 490 4854</a>
                <a href="https://github.com/dncnl" target="_blank" rel="noreferrer" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="github" size={16} />github.com/dncnl</a>
                <a href="#" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="linkedin" size={16} />LinkedIn</a>
                <span style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-muted)' }}><Icon name="map-pin" size={16} />San Joaquin, Mabalacat City, Pampanga</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Card variant="framed">
              {sent ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-5) 0' }}>
                  <Icon name="check" size={28} />
                  <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-tight)', fontSize: 'var(--fs-xl)' }}>Message received.</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>I'll get back to you within two working days.</p>
                  <Button variant="ghost" size="sm" onClick={() => setSent(false)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setTouched(true); if (email.includes('@')) setSent(true); }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                  <Field label="name" htmlFor="c-name"><Input id="c-name" placeholder="your name" /></Field>
                  <Field label="email" htmlFor="c-email" required error={invalid ? 'that address looks off' : undefined}>
                    <Input id="c-email" placeholder="you@company.com" value={email} invalid={invalid}
                      onChange={(e) => setEmail(e.target.value)} onBlur={() => setTouched(true)} />
                  </Field>
                  <Field label="about" htmlFor="c-kind" hint="pick the closest fit">
                    <Select id="c-kind" options={['internship', 'project work', 'collaboration', 'something else']} />
                  </Field>
                  <Field label="message" htmlFor="c-brief"><Textarea id="c-brief" rows={4} placeholder="what are you working on?" /></Field>
                  <Checkbox label="send me a copy of this message" />
                  <Button block size="lg" type="submit">Send it</Button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Contact });
