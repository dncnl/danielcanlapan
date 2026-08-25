const { Eyebrow, Card, Reveal, Icon, Button } = window.DncnlDevDesignSystem_cd0d7e;

function Certifications() {
  const slides = window.CERTIFICATIONS || [];

  return (
    <section id="certifications" aria-labelledby="certifications-heading" style={{ padding: 'clamp(40px,6vw,96px) var(--page-pad-x)', background: 'linear-gradient(to bottom, var(--surface) 0, var(--bg) var(--space-10))' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal><Eyebrow index="04" rule>certifications</Eyebrow></Reveal>
        <HeaderRise id="certifications-heading" style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-5) 0 0' }}>Certifications</HeaderRise>
        <style>{`
          @keyframes badgeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
          .badge-float{animation:badgeFloat 4.8s ease-in-out infinite}
          @media (prefers-reduced-motion:reduce){.badge-float{animation:none}}
        `}</style>
        {slides.length > 0 && (
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-5)', justifyContent: 'center', maxWidth: 920, margin: 'var(--space-7) auto 0',
          }}>
            {slides.map((slide, i) => (
              <Reveal key={slide.title} delay={60 * i}>
                <Card variant="hairline" className="hover-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-3)', padding: 'var(--space-5)' }}>
                  {slide.badge ? (
                    <img src={slide.badge} alt={`${slide.title} badge`} width={130} height={130} className="badge-float"
                      style={{ width: 130, height: 130, objectFit: 'contain', animationDelay: (i * 280) + 'ms' }} />
                  ) : (
                    <Icon name="award" size={40} className="hover-accent badge-float" style={{ color: 'var(--text-subtle)', transition: 'var(--transition-ui)', animationDelay: (i * 280) + 'ms' }} />
                  )}
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: 'var(--tracking-slight)', fontSize: 'var(--fs-md)' }}>{slide.title}</h3>
                  <p style={{ margin: 0, fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)' }}>{slide.issuer}</p>
                  {slide.issued && (
                    <p style={{ margin: 0, fontSize: 'var(--fs-2xs)', color: 'var(--text-subtle)', lineHeight: 'var(--lh-body)' }}>
                      Issued {slide.issued}
                    </p>
                  )}
                  {slide.credentialId && (
                    <p style={{ margin: 0, fontSize: 'var(--fs-2xs)', color: 'var(--text-subtle)', lineHeight: 'var(--lh-body)' }}>
                      Credential ID: {slide.credentialId}
                    </p>
                  )}
                  {slide.href && (
                    <Button variant="secondary" size="sm" as="a" href={slide.href} target="_blank" rel="noreferrer" aria-label={`View ${slide.title} credential, opens in a new tab`}>
                      View credential <Icon name="arrow-up-right" size={15} />
                    </Button>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
Object.assign(window, { Certifications });
