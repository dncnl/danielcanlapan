const { Eyebrow, ProjectCard, Card, Tag, Reveal, Icon, Button } = window.DncnlDevDesignSystem_cd0d7e;

function Work() {
  return (
    <section id="work" style={{ padding: 'var(--section-y) var(--page-pad-x)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="03" rule>projects</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h2 style={{ fontSize: 'var(--fs-3xl)', maxWidth: '24ch', margin: 'var(--space-5) 0 0' }}>Built with a team, shipped under a deadline.</h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'var(--space-5)', marginTop: 'var(--space-7)' }}>
          {window.PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={60 * i}>
              <ProjectCard {...p} target="_blank" rel="noreferrer" style={{ height: '100%' }} />
            </Reveal>
          ))}
          <Reveal delay={80}>
            <Card variant="hairline" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 'var(--space-5)' }}>
              <div>
                <Eyebrow>coursework & self-directed</Eyebrow>
                <p style={{ marginTop: 'var(--space-4)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', fontSize: 'var(--fs-sm)' }}>
                  Machine learning, intelligent systems, software engineering and data structures & algorithms —
                  plus predictive-model exercises, desktop tools and API work that live in the repos rather than in a case study.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                  {['machine learning', 'intelligent systems', 'software engineering', 'dsa'].map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
              <Button variant="secondary" as="a" href="https://github.com/dncnl" target="_blank" rel="noreferrer">
                Browse the repos <Icon name="arrow-up-right" size={15} />
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Work });
