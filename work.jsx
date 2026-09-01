const { Eyebrow, ProjectCard, Card, Tag, Reveal, Icon, Button, IconButton } = window.DncnlDevDesignSystem_cd0d7e;

function Work() {
  const slides = React.useMemo(() => ([
    ...window.PROJECTS.map((p) => ({ kind: 'project', data: p })),
    { kind: 'coursework' },
  ]), []);
  const [index, setIndex] = React.useState(0);
  const go = (delta) => setIndex((i) => (i + delta + slides.length) % slides.length);
  const slide = slides[index];
  const multi = slides.length > 1;

  const touch = React.useRef({ x: 0, y: 0, active: false, swiped: false });
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY, active: true, swiped: false };
  };
  const onTouchMove = (e) => {
    if (!touch.current.active) return;
    const t = e.touches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) touch.current.swiped = true;
  };
  const onTouchEnd = (e) => {
    if (!touch.current.active) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current.active = false;
    if (multi && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  };
  const onClickCapture = (e) => {
    if (touch.current.swiped) {
      e.preventDefault();
      e.stopPropagation();
      touch.current.swiped = false;
    }
  };
  const onKeyDown = (e) => {
    if (!multi) return;
    if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
  };

  return (
    <section id="work" aria-labelledby="work-heading" style={{ padding: 'var(--section-y) var(--page-pad-x)', background: 'var(--bg)' }}>
      <style>{`
        @keyframes workSlideIn{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}
        .work-slide{animation:workSlideIn var(--dur-3) var(--ease-out)}
        .work-arrow{opacity:.85;transition:var(--transition-ui)}
        .work-arrow:hover{opacity:1}
        @media (prefers-reduced-motion:reduce){.work-slide{animation:none}}
      `}</style>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="02" rule>projects</Eyebrow></Reveal>
        <HeaderRise id="work-heading" style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>Projects</HeaderRise>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-7)' }}>
          <div
            role="region" aria-roledescription="carousel" aria-label="Projects"
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
            onClickCapture={onClickCapture} onKeyDown={onKeyDown}
            style={{ width: '100%', maxWidth: 880, position: 'relative' }}
          >
            <div key={index} className="work-slide" aria-live="polite">
              {slide.kind === 'project' ? (
                <React.Fragment>
                  <ProjectCard {...slide.data} target="_blank" rel="noreferrer" aria-label={`${slide.data.title}, opens in a new tab`} />
                  {slide.data.submission && (
                    <p style={{ marginTop: 'var(--space-3)', textAlign: 'center', fontSize: 'var(--fs-2xs)', color: 'var(--text-subtle)', lineHeight: 'var(--lh-body)' }}>
                      {slide.data.submission.note}{' '}
                      <a href={slide.data.submission.href} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                        {slide.data.submission.label} <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>(opens in a new tab)</span>
                      </a>
                    </p>
                  )}
                </React.Fragment>
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
                  <Button variant="secondary" as="a" href="https://github.com/dncnl" target="_blank" rel="noreferrer" aria-label="Browse the repos, opens in a new tab">
                    Browse the repos <Icon name="arrow-up-right" size={15} />
                  </Button>
                </Card>
              )}
            </div>
            {multi && slide.kind === 'project' && (
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, pointerEvents: 'none',
                aspectRatio: '16 / 10',
              }}>
                <IconButton
                  icon="chevron-left" label="Previous project" size="md" variant="ghost" className="work-arrow"
                  onClick={() => go(-1)}
                  style={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', width: 44, height: 44, pointerEvents: 'auto', background: 'rgba(1,1,1,.55)', color: '#fff', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                />
                <IconButton
                  icon="chevron-right" label="Next project" size="md" variant="ghost" className="work-arrow"
                  onClick={() => go(1)}
                  style={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', width: 44, height: 44, pointerEvents: 'auto', background: 'rgba(1,1,1,.55)', color: '#fff', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                />
              </div>
            )}
            {multi && slide.kind !== 'project' && (
              // Card content is inset by a fixed var(--space-5) (24px) padding regardless of
              // card width, so parking these just outside that padding (-20 to 24) never touches
              // the text, unlike centering on the whole card which used to land on the paragraph.
              <React.Fragment>
                <IconButton
                  icon="chevron-left" label="Previous project" size="md" variant="ghost" className="work-arrow"
                  onClick={() => go(-1)}
                  style={{ position: 'absolute', top: '50%', left: -20, transform: 'translateY(-50%)', width: 44, height: 44, zIndex: 2, background: 'rgba(1,1,1,.55)', color: '#fff', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                />
                <IconButton
                  icon="chevron-right" label="Next project" size="md" variant="ghost" className="work-arrow"
                  onClick={() => go(1)}
                  style={{ position: 'absolute', top: '50%', right: -20, transform: 'translateY(-50%)', width: 44, height: 44, zIndex: 2, background: 'rgba(1,1,1,.55)', color: '#fff', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                />
              </React.Fragment>
            )}
          </div>
          {multi && (
            <div style={{ display: 'flex' }}>
              {slides.map((_, i) => (
                <button
                  key={i} onClick={() => setIndex(i)}
                  aria-label={`Show slide ${i + 1} of ${slides.length}`}
                  aria-current={i === index ? 'true' : undefined}
                  style={{
                    width: 44, height: 44, padding: 0, border: 0, background: 'transparent', cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <span style={{
                    width: 8, height: 8, borderRadius: 'var(--radius-full)',
                    background: i === index ? 'var(--ochre)' : 'var(--border-soft)', transition: 'var(--transition-ui)', display: 'block',
                  }} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Work });
