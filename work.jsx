const { Eyebrow, ProjectCard, Card, Tag, Reveal, Icon, Button } = window.DncnlDevDesignSystem_cd0d7e;

function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" style={{ padding: 'var(--section-y) var(--page-pad-x)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="02" rule>projects</Eyebrow></Reveal>
        <HeaderRise id="work-heading" style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>Projects</HeaderRise>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)', marginTop: 'var(--space-7)' }}>
          {window.PROJECTS.map((p) => (
            <div key={p.title} style={{ width: '100%', maxWidth: 880 }}>
              <ProjectCard {...p} target="_blank" rel="noreferrer" aria-label={`${p.title}, opens in a new tab`} />
              {p.submission && (
                <p style={{ marginTop: 'var(--space-3)', textAlign: 'center', fontSize: 'var(--fs-2xs)', color: 'var(--text-subtle)', lineHeight: 'var(--lh-body)' }}>
                  {p.submission.note}{' '}
                  <a href={p.submission.href} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                    {p.submission.label} <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>(opens in a new tab)</span>
                  </a>
                </p>
              )}
            </div>
          ))}
          <Card variant="hairline" className="hover-card" style={{ width: '100%', maxWidth: 880, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 'var(--space-5)' }}>
            <div>
              <Eyebrow>coursework & self-directed</Eyebrow>
              <p style={{ marginTop: 'var(--space-4)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)', fontSize: 'var(--fs-sm)' }}>
                Machine learning, intelligent systems, software engineering and data structures & algorithms,
                plus predictive-model exercises, desktop tools and API work that live in the repos rather than in a case study.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                {['machine learning', 'intelligent systems', 'software engineering', 'dsa'].map((t) => <Tag key={t} className="hover-tag">{t}</Tag>)}
              </div>
            </div>
            <Button variant="secondary" as="a" href="https://github.com/dncnl" target="_blank" rel="noreferrer" aria-label="Browse the repos, opens in a new tab">
              Browse the repos <Icon name="arrow-up-right" size={15} />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Work });
