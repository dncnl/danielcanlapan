const { Eyebrow, ProjectCard, Card, Tag, Reveal, Icon, Button, IconButton } = window.DncnlDevDesignSystem_cd0d7e;

function Work() {
  const slides = React.useMemo(() => ([
    ...window.PROJECTS.map((p) => ({ kind: 'project', data: p })),
    { kind: 'coursework' },
  ]), []);
  const [index, setIndex] = React.useState(0);
  const go = (delta) => setIndex((i) => (i + delta + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section id="work" style={{ padding: 'var(--section-y) var(--page-pad-x)' }}>
      <style>{`
        @keyframes workSlideIn{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}
        .work-slide{animation:workSlideIn var(--dur-3) var(--ease-out)}
        @media (prefers-reduced-motion:reduce){.work-slide{animation:none}}
      `}</style>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="02" rule>projects</Eyebrow></Reveal>
        <HeaderRise style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>Projects</HeaderRise>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)', marginTop: 'var(--space-7)' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)' }}>
            <IconButton icon="chevron-left" label="Previous" size="sm" variant="ghost" onClick={() => go(-1)} />
            <div key={index} className="work-slide" style={{ width: '100%', maxWidth: 400 }}>
              {slide.kind === 'project' ? (
                <ProjectCard {...slide.data} target="_blank" rel="noreferrer" />
              ) : (
                <Card variant="hairline" className="hover-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 'var(--space-5)' }}>
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
                  <Button variant="secondary" as="a" href="https://github.com/dncnl" target="_blank" rel="noreferrer">
                    Browse the repos <Icon name="arrow-up-right" size={15} />
                  </Button>
                </Card>
              )}
            </div>
            <IconButton icon="chevron-right" label="Next" size="sm" variant="ghost" onClick={() => go(1)} />
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} aria-label={`Show slide ${i + 1} of ${slides.length}`}
                style={{
                  width: 8, height: 8, padding: 0, borderRadius: 'var(--radius-full)', border: 0, cursor: 'pointer',
                  background: i === index ? 'var(--ochre)' : 'var(--border-soft)', transition: 'var(--transition-ui)',
                }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Work });
