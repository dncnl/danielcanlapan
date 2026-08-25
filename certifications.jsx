const { Eyebrow, Card, Reveal, Icon, Button } = window.DncnlDevDesignSystem_cd0d7e;

function Certifications() {
  const slides = window.CERTIFICATIONS || [];
  if (!slides.length) return null;

  return (
    <section id="certifications" style={{ padding: 'var(--section-y) var(--page-pad-x)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="04" rule>certifications</Eyebrow></Reveal>
        <HeaderRise style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>Certifications</HeaderRise>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-5)', justifyContent: 'center', maxWidth: 920, margin: 'var(--space-7) auto 0',
        }}>
          {slides.map((slide, i) => (
            <Reveal key={slide.title} delay={60 * i}>
              <Card variant="hairline" className="hover-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-3)', padding: 'var(--space-5)' }}>
                {slide.badge ? (
                  <img src={slide.badge} alt={`${slide.title} badge`} width={240} height={240}
                    style={{ width: 240, height: 240, objectFit: 'contain' }} />
                ) : (
                  <Icon name="award" size={40} className="hover-accent" style={{ color: 'var(--text-subtle)', transition: 'var(--transition-ui)' }} />
                )}
                <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-slight)', fontSize: 'var(--fs-md)' }}>{slide.title}</div>
                <p style={{ margin: 0, fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)' }}>{slide.issuer}</p>
                {slide.credentialId && (
                  <p style={{ margin: 0, fontSize: 'var(--fs-2xs)', color: 'var(--text-subtle)', lineHeight: 'var(--lh-body)' }}>
                    Credential ID: {slide.credentialId}
                  </p>
                )}
                {slide.href && (
                  <Button variant="secondary" size="sm" as="a" href={slide.href} target="_blank" rel="noreferrer">
                    View credential <Icon name="arrow-up-right" size={15} />
                  </Button>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Certifications });
