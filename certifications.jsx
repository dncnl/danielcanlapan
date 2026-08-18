const { Eyebrow, Card, Reveal, Icon, IconButton } = window.DncnlDevDesignSystem_cd0d7e;

function Certifications() {
  const slides = window.CERTIFICATIONS || [];
  const [index, setIndex] = React.useState(0);
  const go = (delta) => setIndex((i) => (i + delta + slides.length) % slides.length);
  const slide = slides[index];
  if (!slide) return null;

  return (
    <section id="certifications" style={{ padding: 'var(--section-y) var(--page-pad-x)', borderBottom: 'var(--border-hair) solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="04" rule>certifications</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h2 style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>Certifications</h2>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)' }}>
            {slides.length > 1 && <IconButton icon="chevron-left" label="Previous" size="sm" variant="ghost" onClick={() => go(-1)} />}
            <Card variant="hairline" style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-3)', padding: 'var(--space-5)' }}>
              <Icon name="award" size={22} style={{ color: 'var(--text-subtle)' }} />
              <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-slight)', fontSize: 'var(--fs-md)' }}>{slide.title}</div>
              <p style={{ margin: 0, fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)' }}>{slide.issuer}</p>
            </Card>
            {slides.length > 1 && <IconButton icon="chevron-right" label="Next" size="sm" variant="ghost" onClick={() => go(1)} />}
          </div>
          {slides.length > 1 && (
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Show slide ${i + 1} of ${slides.length}`}
                  style={{
                    width: 8, height: 8, padding: 0, borderRadius: 'var(--radius-full)', border: 0, cursor: 'pointer',
                    background: i === index ? 'var(--ochre)' : 'var(--border-soft)', transition: 'var(--transition-ui)',
                  }} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Certifications });
