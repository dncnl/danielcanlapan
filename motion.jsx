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
    const t = window.setTimeout(() => setShown(true), 1200);
    return () => { io.disconnect(); window.clearTimeout(t); };
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
 * Shared scroll-scrub engine: as `ref`'s element rises from `startPct` to `endPct` of the
 * viewport height, live-applies opacity (`opacityFrom` → 1) and a translateY (`rise` → 0px)
 * directly to the DOM node — a continuous function of scroll position (GSAP ScrollTrigger
 * `scrub` concept), not Reveal's fire-once-on-threshold trigger. Latches once fully settled so
 * scrolling back over already-shown content doesn't re-dim it. Returns false (do nothing) under
 * prefers-reduced-motion.
 */
function useScrollScrub(ref, { startPct = 1.05, endPct = 0.3, opacityFrom = 0.45, rise = 28 } = {}) {
  const enabled = React.useMemo(() => !prefersReducedMotion(), []);
  React.useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;
    let raf = null;
    let settled = false;
    const apply = () => {
      raf = null;
      if (settled) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * startPct;
      const end = vh * endPct;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      el.style.opacity = (opacityFrom + progress * (1 - opacityFrom)).toFixed(3);
      el.style.transform = `translateY(${((1 - progress) * rise).toFixed(1)}px)`;
      if (progress >= 1) settled = true;
    };
    const onScroll = () => { if (raf == null) raf = window.requestAnimationFrame(apply); };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf != null) window.cancelAnimationFrame(raf);
    };
  }, [enabled]);
  return enabled;
}

/** Wraps a whole section so it eases into place (fade + rise) as it's scrolled up into view. */
function ScrollSection({ children, style, ...rest }) {
  const ref = React.useRef(null);
  const enabled = useScrollScrub(ref, { startPct: 1.05, endPct: 0.3, opacityFrom: 0.45, rise: 28 });
  if (!enabled) return children;
  return (
    <div ref={ref} style={{ willChange: 'transform, opacity', ...style }} {...rest}>
      {children}
    </div>
  );
}

/**
 * A section headline that rises into place on its own scroll-scrub — meant to read as the one
 * clear "this section just arrived" moment, distinct from ScrollSection's subtler whole-block
 * ease (which stays, as ambient backdrop motion). Full opacity range (not ScrollSection's
 * dimmed floor). Starts just below the viewport (startPct > 1) so it's already animating the
 * instant it crosses the fold, and doesn't resolve until past the middle of the screen — the
 * zone has to span a real chunk of scroll distance or it finishes before anyone notices it
 * started (the bug behind "why are the headers still static").
 */
function HeaderRise({ children, as = 'h2', style, ...rest }) {
  const ref = React.useRef(null);
  const enabled = useScrollScrub(ref, { startPct: 1.08, endPct: 0.55, opacityFrom: 0, rise: 24 });
  const Tag = as;
  if (!enabled) return <Tag style={style} {...rest}>{children}</Tag>;
  return (
    <Tag ref={ref} style={{ willChange: 'transform, opacity', ...style }} {...rest}>
      {children}
    </Tag>
  );
}

Object.assign(window, { ScrollProgress, Magnetic, SplitReveal, ScrollSection, HeaderRise });
