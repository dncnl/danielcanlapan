const { Eyebrow, Card, Tag, Reveal, Icon, Button } = window.DncnlDevDesignSystem_cd0d7e;

function About() {
  return (
    <section id="about" style={{ padding: 'var(--section-y) var(--page-pad-x)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="05" rule>about</Eyebrow></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px,1.15fr) minmax(280px,0.75fr)', gap: 'clamp(32px,5vw,80px)', marginTop: 'var(--space-5)', alignItems: 'start' }}>
          <div>
            <Reveal delay={60}>
              <h2 style={{ fontSize: 'var(--fs-3xl)', maxWidth: '20ch', margin: 0 }}>The long version.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p style={{ marginTop: 'var(--space-5)', maxWidth: 'var(--measure)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
                I'm a fourth-year computer science student at Angeles University Foundation, in Mabalacat City,
                Pampanga. I started my degree at Saint Louis University in Baguio and transferred my first year
                across, which taught me early how to pick up an unfamiliar system and keep moving.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p style={{ marginTop: 'var(--space-4)', maxWidth: 'var(--measure)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
                I like the whole arc of a build: sitting in the planning phase long enough to define the actual
                problem, drawing the interface, writing the API behind it, then documenting it so the next person
                doesn't have to guess. Most recently that meant Kalinga, a multilingual offline-first care app we
                took to the Presidential Hackathon's international track.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ marginTop: 'var(--space-4)', maxWidth: 'var(--measure)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', letterSpacing: 'var(--tracking-none)' }}>
                I'm open to internships, project work and collaborations — especially anything where design,
                data and engineering have to meet in the same room.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Card variant="block" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <div>
                <Eyebrow>education</Eyebrow>
                <div style={{ marginTop: 'var(--space-3)', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-slight)', fontSize: 'var(--fs-lg)' }}>B.S. Computer Science</div>
                <div style={{ marginTop: 6, fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>Angeles University Foundation · 4th year, A.Y. 2025–2026 · expected 2027</div>
                <div style={{ marginTop: 6, fontSize: 'var(--fs-sm)', color: 'var(--text-subtle)' }}>Transfer credits: 1st year, Saint Louis University, Baguio City</div>
              </div>
              <div style={{ paddingTop: 'var(--space-5)', borderTop: 'var(--rule)' }}>
                <Eyebrow>scholarship</Eyebrow>
                <div style={{ marginTop: 'var(--space-3)', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-slight)', fontSize: 'var(--fs-lg)' }}>DOST-SEI Undergraduate Scholar</div>
                <div style={{ marginTop: 6, fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>RA 7687, merit-based national science scholarship · 2023–present</div>
              </div>
              <div style={{ paddingTop: 'var(--space-5)', borderTop: 'var(--rule)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {['machine learning', 'intelligent systems', 'software engineering', 'data structures & algorithms'].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <Button variant="secondary" as="a" href="assets/resume.docx" download>
                Download résumé <Icon name="download" size={15} />
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { About });
