const { Eyebrow, Card, Tag, Reveal, Icon, Button } = window.DncnlDevDesignSystem_cd0d7e;

function Portrait() {
  const [broken, setBroken] = React.useState(false);
  return (
    <div style={{
      width: 96, height: 96, borderRadius: 'var(--radius-full)', overflow: 'hidden', flex: '0 0 auto',
      border: 'var(--border-hair) solid var(--border-hairline)', background: 'var(--surface)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {broken ? (
        <span style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: 'var(--fs-lg)', color: 'var(--text-subtle)' }}>DC</span>
      ) : (
        <img src="assets/portrait.jpeg" alt="Daniel Martin Canlapan" onError={() => setBroken(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: 'var(--section-y) var(--page-pad-x)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="05" rule>about</Eyebrow></Reveal>
        <style>{`
          @media (max-width:760px){
            .about-grid{grid-template-columns:1fr !important}
          }
        `}</style>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px,1.15fr) minmax(280px,0.75fr)', gap: 'clamp(32px,5vw,80px)', marginTop: 'var(--space-5)', alignItems: 'start' }}>
          <div>
            <Reveal delay={60}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
                <Portrait />
                <h2 style={{ fontSize: 'var(--fs-3xl)', margin: 0 }}>About me</h2>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <p style={{ marginTop: 'var(--space-5)', maxWidth: 'var(--measure)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
                I build software across the stack: web applications, machine learning models, and the interfaces people actually use, backed by documentation that keeps it all legible.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p style={{ marginTop: 'var(--space-4)', maxWidth: 'var(--measure)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
                I'm a fourth-year computer science student at Angeles University Foundation. I started at Saint Louis University in Baguio and transferred my first year across.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <p style={{ marginTop: 'var(--space-4)', maxWidth: 'var(--measure)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
                I like getting the plan right before I touch the interface or the API behind it, then writing it down so the next person doesn't have to guess. Most recently that meant Kalinga, a care app for migrant caregivers, built for the Presidential Hackathon's international track.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <p style={{ marginTop: 'var(--space-4)', maxWidth: 'var(--measure)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
                Open to internships, project work and collaborations, especially where design, data and engineering have to meet in the same room.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Card variant="block" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <div>
                <Eyebrow>education</Eyebrow>
                <div style={{ marginTop: 'var(--space-3)', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-slight)', fontSize: 'var(--fs-lg)' }}>B.S. Computer Science</div>
                <div style={{ marginTop: 6, fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>Angeles University Foundation, expected 2027</div>
              </div>
              <div style={{ paddingTop: 'var(--space-5)', borderTop: 'var(--rule)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {['machine learning', 'intelligent systems', 'software engineering', 'data structures & algorithms'].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <Button variant="secondary" as="a" href="assets/Daniel_Canlapan_Resume.pdf" download>
                Download CV <Icon name="download" size={15} />
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { About });
