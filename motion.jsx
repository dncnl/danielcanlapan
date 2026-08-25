/**
 * Small animation helpers shared across sections — hand-written, not part of _ds_bundle.js.
 * Same GSAP concepts (ScrollTrigger scrub, SplitText stagger, magnetic hover), no dependency.
 * All respect prefers-reduced-motion and skip pointer-driven effects on touch devices.
 */
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/** Thin fixed bar at the very top of the viewport that fills with scroll progress. */
function ScrollProgress() {
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    let raf = null;
    const measure = () => {
      raf = null;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0);
    };
    const onScroll = () => { if (raf == null) raf = window.requestAnimationFrame(measure); };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf != null) window.cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 30, pointerEvents: 'none' }}>
      <div style={{ height: '100%', width: (pct * 100) + '%', background: 'var(--ochre)', transition: prefersReducedMotion() ? 'none' : 'width 80ms linear' }} />
    </div>
  );
}

/** Wraps children in a box that eases toward the cursor on hover and springs back on leave. */
function Magnetic({ children, strength = 0.3, style, ...rest }) {
  const ref = React.useRef(null);
  const enabled = React.useMemo(() => !prefersReducedMotion() && canHover(), []);
  if (!enabled) return children;
  const onMouseMove = (e) => {
    const box = ref.current.getBoundingClientRect();
    const x = (e.clientX - box.left - box.width / 2) * strength;
    const y = (e.clientY - box.top - box.height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onMouseLeave = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; };
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ display: 'inline-block', transition: 'transform 320ms var(--ease-mech)', willChange: 'transform', ...style }}
      {...rest}>
      {children}
    </div>
  );
}

/** Reveals text word-by-word from behind a mask on first scroll into view. Falls back to plain text under reduced motion. */
function SplitReveal({ text, as = 'span', delay = 0, stagger = 36, style, ...rest }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const reduce = prefersReducedMotion();
    const el = ref.current;
    if (reduce || !('IntersectionObserver' in window) || !el) { setShown(true); return; }
    if (el.getBoundingClientRect().top < window.innerHeight) { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setShown(true); io.disconnect(); }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });
    io.observe(el);
    return () => { io.disconnect(); };
  }, []);
  const Tag = as;
  const words = text.split(' ');
  return (
    <Tag ref={ref} style={style} {...rest}>
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <span style={{
            display: 'inline-block',
            transform: shown ? 'translateY(0)' : 'translateY(115%)',
            opacity: shown ? 1 : 0,
            transition: `transform var(--dur-4) var(--ease-mech) ${delay + i * stagger}ms, opacity var(--dur-3) var(--ease-out) ${delay + i * stagger}ms`,
          }}>{w}{i < words.length - 1 ? ' ' : ''}</span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Fires once, on a real clock — not pinned to scroll position. A scroll-scrubbed value (state
 * computed as a direct function of scrollY, re-applied every rAF tick) looks fine on a slow,
 * deliberate scroll but is indistinguishable from a hard cut on a normal wheel/trackpad flick:
 * there's no time dimension to the motion, so a fast scroll just fast-forwards through it in one
 * or two frames. Firing once on intersection and letting a CSS `transition` run its own duration
 * guarantees the arrival is visible at any scroll speed — the same trick `Reveal` already uses.
 * No timeout-based fail-open: with every section mounted up front at page load, a mount-timed
 * timer fires well before most sections are ever scrolled to, silently pre-revealing them
 * before the user arrives — the actual bug this file used to have. IntersectionObserver
 * support is already feature-detected above, so the observer path alone is sufficient.
 */
function useEnterOnce(ref, { rootMargin = '0px 0px -10% 0px' } = {}) {
  const [shown, setShown] = React.useState(false);
  const enabled = React.useMemo(() => !prefersReducedMotion(), []);
  React.useEffect(() => {
    const el = ref.current;
    if (!enabled || !el || !('IntersectionObserver' in window)) { setShown(true); return; }
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setShown(true); io.disconnect(); }
    }, { rootMargin, threshold: 0 });
    io.observe(el);
    return () => { io.disconnect(); };
  }, [enabled]);
  return { shown, enabled };
}

/** Wraps a whole section so it eases into place (fade + rise + a touch of scale) the moment it
 *  crosses into view — a fixed-duration settle, so it reads at any scroll speed. */
function ScrollSection({ children, style, ...rest }) {
  const ref = React.useRef(null);
  const { shown, enabled } = useEnterOnce(ref, { rootMargin: '0px 0px -14% 0px' });
  if (!enabled) return children;
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(40px) scale(0.975)',
      transition: `opacity var(--dur-4) var(--ease-mech), transform var(--dur-4) var(--ease-mech)`,
      willChange: 'transform, opacity',
      ...style,
    }} {...rest}>
      {children}
    </div>
  );
}

/**
 * A section headline that pulls into focus the instant it arrives — meant to read as the one
 * clear "this section just started" beat, layered a step behind ScrollSection's whole-block ease
 * (a short built-in delay) so the block settles first and the headline sharpens into it after.
 */
function HeaderRise({ children, as = 'h2', style, ...rest }) {
  const ref = React.useRef(null);
  const { shown, enabled } = useEnterOnce(ref, { rootMargin: '0px 0px -10% 0px' });
  const Tag = as;
  if (!enabled) return <Tag style={style} {...rest}>{children}</Tag>;
  return (
    <Tag ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(26px)',
      filter: shown ? 'blur(0px)' : 'blur(10px)',
      transition: `opacity var(--dur-4) var(--ease-mech) 90ms, transform var(--dur-4) var(--ease-mech) 90ms, filter var(--dur-4) var(--ease-mech) 90ms`,
      willChange: 'transform, opacity, filter',
      ...style,
    }} {...rest}>
      {children}
    </Tag>
  );
}

Object.assign(window, { ScrollProgress, Magnetic, SplitReveal, ScrollSection, HeaderRise });
