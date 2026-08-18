/* @ds-bundle: {"format":4,"namespace":"DncnlDevDesignSystem_cd0d7e","components":[{"name":"CopyEmail","sourcePath":"components/content/CopyEmail.jsx"},{"name":"MetricBar","sourcePath":"components/content/MetricBar.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SkillMarquee","sourcePath":"components/content/SkillMarquee.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Orb","sourcePath":"components/core/Orb.jsx"},{"name":"Reveal","sourcePath":"components/core/Reveal.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TechIcon","sourcePath":"components/core/TechIcon.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/content/CopyEmail.jsx":"167b445a68ae","components/content/MetricBar.jsx":"f2f648b62488","components/content/ProjectCard.jsx":"1122c3fcf12a","components/content/Quote.jsx":"007169260f1a","components/content/SkillMarquee.jsx":"71cb862f6454","components/content/Stat.jsx":"2385db1f05e9","components/core/Button.jsx":"7bd581de39f6","components/core/Card.jsx":"e74eaeab99cd","components/core/Eyebrow.jsx":"17f84e5fee35","components/core/Icon.jsx":"6ceba1e3f0f2","components/core/IconButton.jsx":"0b012ae299e6","components/core/Orb.jsx":"58ef5b4fa234","components/core/Reveal.jsx":"ab52a2b6a8b8","components/core/Tag.jsx":"4759cd29c4ec","components/core/TechIcon.jsx":"fd01891ba0bb","components/core/ThemeToggle.jsx":"b2920f7d84a7","components/forms/Checkbox.jsx":"783feaaac48b","components/forms/Field.jsx":"ec2d79b38fdc","components/forms/Input.jsx":"e289fd35aa74","components/forms/Select.jsx":"0362b521c736","components/forms/Switch.jsx":"52bb8bfd0346","components/forms/Textarea.jsx":"a22b30afa4c4","ui_kits/dncnl-dev/about.jsx":"e2673a189b08","ui_kits/dncnl-dev/contact.jsx":"afe26464b716","ui_kits/dncnl-dev/data.js":"1683c0dedcde","ui_kits/dncnl-dev/footer.jsx":"91e140771fc6","ui_kits/dncnl-dev/hero.jsx":"6ac15884cc4c","ui_kits/dncnl-dev/insights.jsx":"f7210e2e32f0","ui_kits/dncnl-dev/nav.jsx":"d116e77492ac","ui_kits/dncnl-dev/skills.jsx":"a910a279d7f1","ui_kits/dncnl-dev/work.jsx":"94b799b31c84"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DncnlDevDesignSystem_cd0d7e = window.DncnlDevDesignSystem_cd0d7e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/MetricBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricBar({
  label,
  value,
  max = 100,
  display,
  tone = 'data-1',
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", null, display != null ? display : value)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: 'var(--surface-sunken)',
      border: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: 'var(--' + tone + ')',
      transition: 'width var(--dur-3) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { MetricBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MetricBar.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  attribution,
  role,
  size = 'md',
  style,
  ...rest
}) {
  const sizes = {
    md: 'var(--fs-xl)',
    lg: 'var(--fs-3xl)'
  };
  return /*#__PURE__*/React.createElement("blockquote", _extends({}, rest, {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 'var(--measure)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--lh-snug)',
      fontSize: sizes[size],
      textWrap: 'pretty'
    }
  }, children), attribution && /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, attribution, role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, " \u2014 ", role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  note,
  size = 'md',
  align = 'left',
  style,
  ...rest
}) {
  const sizes = {
    sm: 'var(--fs-2xl)',
    md: 'var(--fs-3xl)',
    lg: 'var(--fs-5xl)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      textAlign: align,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-hero)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--lh-solid)',
      fontSize: sizes[size]
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-subtle)'
    }
  }, note));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '6px 12px',
    fontSize: 'var(--fs-2xs)',
    gap: 'var(--space-2)'
  },
  md: {
    padding: '10px 18px',
    fontSize: 'var(--fs-xs)',
    gap: 'var(--space-2)'
  },
  lg: {
    padding: '15px 26px',
    fontSize: 'var(--fs-sm)',
    gap: 'var(--space-3)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  disabled = false,
  block = false,
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    borderRadius: 'var(--radius-0)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'var(--transition-ui)',
    ...SIZES[size]
  };
  const skins = {
    primary: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: 'var(--border-1) solid var(--border)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      border: 'var(--border-1) solid var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: 'var(--border-1) solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hovers = {
    primary: {
      background: 'var(--ink-80)'
    },
    secondary: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)'
    },
    ghost: {
      color: 'var(--text)',
      borderColor: 'var(--border-soft)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...skins[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      transform: press && !disabled ? 'translate(1px,1px)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'framed',
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    framed: {
      background: 'var(--surface)',
      border: 'var(--frame)',
      boxShadow: 'none'
    },
    block: {
      background: 'var(--surface)',
      border: 'var(--frame)',
      boxShadow: 'var(--shadow-hard)'
    },
    hairline: {
      background: 'transparent',
      border: 'var(--border-hair) solid var(--border-hairline)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: 'var(--border-2) solid var(--border)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius-0)',
      transition: 'var(--transition-ui)',
      ...skins[variant],
      ...(interactive && hover ? {
        transform: 'translate(-2px,-2px)',
        boxShadow: 'var(--shadow-hard)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  index,
  rule = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      ...style
    }
  }), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, index), /*#__PURE__*/React.createElement("span", null, children), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/';

/** Lucide glyph rendered as a masked box so it inherits currentColor. */
function Icon({
  name,
  size = 20,
  strokeColor,
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: strokeColor || 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/CopyEmail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The primary way to reach someone: a large mailto block with a copy affordance. */
function CopyEmail({
  email,
  size = 'lg',
  style,
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const copy = async e => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {/* clipboard blocked */}
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  const fs = size === 'lg' ? 'clamp(20px,3.2vw,38px)' : 'var(--fs-lg)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      border: 'var(--border-2) solid var(--border)',
      background: hover ? 'var(--surface-inverse)' : 'var(--surface)',
      transition: 'var(--transition-ui)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)',
      textDecoration: 'none',
      color: hover ? 'var(--text-inverse)' : 'var(--text)',
      fontFamily: 'var(--font-title)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      fontSize: fs,
      lineHeight: 1,
      transition: 'var(--transition-ui)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: size === 'lg' ? 26 : 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      wordBreak: 'break-all'
    }
  }, email)), /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    "aria-label": 'copy ' + email,
    style: {
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '0 var(--space-5)',
      cursor: 'pointer',
      background: 'transparent',
      border: 0,
      borderLeft: 'var(--border-2) solid ' + (hover ? 'var(--text-inverse)' : 'var(--border)'),
      color: hover ? 'var(--text-inverse)' : 'var(--text-muted)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      transition: 'var(--transition-ui)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: copied ? 'check' : 'copy',
    size: 14
  }), copied ? 'copied' : 'copy')), /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite",
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-subtle)'
    }
  }, copied ? 'address copied to your clipboard' : 'click the address to open your mail app, or copy it'));
}
Object.assign(__ds_scope, { CopyEmail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CopyEmail.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 30,
  md: 38,
  lg: 46
};
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'secondary',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    primary: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: 'var(--border-1) solid var(--border)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      border: 'var(--border-1) solid var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: 'var(--border-1) solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: BOX[size],
      height: BOX[size],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-0)',
      cursor: 'pointer',
      transition: 'var(--transition-ui)',
      ...skins[variant],
      ...(hover ? variant === 'primary' ? {
        background: 'var(--ink-80)'
      } : {
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)',
        borderColor: 'var(--border)'
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 14 : size === 'lg' ? 20 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Orb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Orb({
  size = 'var(--orb-size)',
  blur = 'var(--orb-blur)',
  color = 'var(--orb)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: color,
      filter: blur,
      pointerEvents: 'none',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Orb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Orb.jsx", error: String((e && e.message) || e) }); }

// components/core/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fade-and-rise on first scroll into view. One IntersectionObserver per element, disconnected after firing. */
function Reveal({
  children,
  delay = 0,
  y = 14,
  as = 'div',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const el = ref.current;
    if (reduce || !('IntersectionObserver' in window) || !el) {
      setShown(true);
      return;
    }
    // already on screen at mount: show without waiting on the observer
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0
    });
    io.observe(el);
    // fail-open: never leave content hidden if the observer never fires
    const t = window.setTimeout(() => setShown(true), 1200);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref
  }, rest, {
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity var(--dur-3) var(--ease-out) ${delay}ms, transform var(--dur-3) var(--ease-mech) ${delay}ms`,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = 'neutral',
  active = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--text-muted)',
      borderColor: 'var(--border-soft)'
    },
    success: {
      color: 'var(--success)',
      borderColor: 'var(--success)'
    },
    danger: {
      color: 'var(--danger)',
      borderColor: 'var(--danger)'
    },
    warning: {
      color: 'var(--warning)',
      borderColor: 'var(--warning)'
    },
    info: {
      color: 'var(--info)',
      borderColor: 'var(--info)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '4px 9px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      lineHeight: 1,
      border: 'var(--border-hair) solid',
      borderRadius: 'var(--radius-0)',
      transition: 'var(--transition-ui)',
      ...tones[tone],
      ...(active ? {
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)',
        borderColor: 'var(--border)'
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  title,
  client,
  year,
  summary,
  tags = [],
  image,
  href = '#',
  metric,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'var(--text)',
      background: 'var(--surface)',
      border: 'var(--frame)',
      transition: 'var(--transition-ui)',
      transform: hover ? 'translate(-3px,-3px)' : 'none',
      boxShadow: hover ? 'var(--shadow-hard-lg)' : 'none',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      background: 'var(--surface-sunken)',
      borderBottom: 'var(--frame)',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(1) contrast(1.05)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "image")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, client), /*#__PURE__*/React.createElement("span", null, year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      fontSize: 'var(--fs-xl)',
      lineHeight: 'var(--lh-tight)',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 18,
    style: {
      transform: hover ? 'translate(2px,-2px)' : 'none',
      transition: 'var(--transition-ui)'
    }
  })), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)'
    }
  }, summary), metric && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-3)',
      borderTop: 'var(--rule)',
      fontFamily: 'var(--font-hero)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-tight)',
      fontSize: 'var(--fs-xl)'
    }
  }, metric), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-1)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/TechIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@13.16.0/icons/';

/**
 * Monochrome brand glyph (Simple Icons) masked to currentColor, so the same
 * bold SVG reads black on cream and cream on night with no second asset.
 */
function TechIcon({
  slug,
  size = 22,
  style,
  ...rest
}) {
  if (!slug) return null;
  const url = `url("${CDN}${slug}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { TechIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TechIcon.jsx", error: String((e && e.message) || e) }); }

// components/content/SkillMarquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One continuous horizontal strip of skills; the track is duplicated for a seamless loop. */
function SkillMarquee({
  items = [],
  speed = 42,
  direction = 'left',
  pauseOnHover = true,
  style,
  ...rest
}) {
  const [paused, setPaused] = React.useState(false);
  const id = React.useMemo(() => 'mq' + Math.random().toString(36).slice(2, 8), []);
  const track = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => pauseOnHover && setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      borderTop: 'var(--border-hair) solid var(--border-hairline)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes ${id}{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media (prefers-reduced-motion:reduce){.${id}{animation:none!important}}`), /*#__PURE__*/React.createElement("div", {
    className: id,
    style: {
      display: 'flex',
      width: 'max-content',
      animation: `${id} ${speed}s linear infinite`,
      animationDirection: direction === 'right' ? 'reverse' : 'normal',
      animationPlayState: paused ? 'paused' : 'running'
    }
  }, track.map((it, i) => {
    const name = typeof it === 'string' ? it : it.name;
    const slug = typeof it === 'string' ? undefined : it.slug;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: '14px var(--space-5)',
        borderRight: 'var(--border-hair) solid var(--border-hairline)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.TechIcon, {
      slug: slug,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--fs-sm)',
        letterSpacing: 'var(--tracking-none)',
        color: 'var(--text)'
      }
    }, name));
  })));
}
Object.assign(__ds_scope, { SkillMarquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SkillMarquee.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ThemeToggle({
  theme,
  onChange,
  target,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(theme || 'light');
  const current = theme || internal;
  const set = next => {
    setInternal(next);
    const root = target || document.documentElement;
    root.setAttribute('data-theme', next);
    if (onChange) onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      border: 'var(--border-1) solid var(--border)',
      ...style
    }
  }), [['light', 'sun'], ['dark', 'moon']].map(([mode, icon]) => /*#__PURE__*/React.createElement("button", {
    key: mode,
    "aria-label": mode + ' mode',
    "aria-pressed": current === mode,
    onClick: () => set(mode),
    style: {
      width: 34,
      height: 30,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      cursor: 'pointer',
      transition: 'var(--transition-ui)',
      background: current === mode ? 'var(--surface-inverse)' : 'transparent',
      color: current === mode ? 'var(--text-inverse)' : 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }))));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked != null ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontSize: 'var(--fs-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'var(--border-1) solid var(--border)',
      background: on ? 'var(--surface-inverse)' : 'transparent',
      color: 'var(--text-inverse)',
      transition: 'var(--transition-ui)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + help/error wrapper shared by every form control. */
function Field({
  label,
  hint,
  error,
  htmlFor,
  required,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--danger)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--text)',
  background: 'var(--surface)',
  border: 'var(--border-1) solid var(--border-soft)',
  borderRadius: 'var(--radius-0)',
  padding: '11px 13px',
  outline: 'none',
  transition: 'var(--transition-ui)'
};
function Input({
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      ...FIELD,
      borderColor: invalid ? 'var(--danger)' : focus ? 'var(--border)' : 'var(--border-soft)',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--text)',
  background: 'var(--surface)',
  border: 'var(--border-1) solid var(--border-soft)',
  borderRadius: 'var(--radius-0)',
  padding: '11px 13px',
  outline: 'none',
  transition: 'var(--transition-ui)'
};
function Select({
  options = [],
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...FIELD,
      appearance: 'none',
      paddingRight: 38,
      cursor: 'pointer',
      borderColor: invalid ? 'var(--danger)' : focus ? 'var(--border)' : 'var(--border-soft)',
      ...style
    }
  }), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked != null ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontSize: 'var(--fs-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 22,
      flex: '0 0 auto',
      padding: 2,
      border: 'var(--border-1) solid var(--border)',
      background: on ? 'var(--surface-inverse)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: on ? 'flex-end' : 'flex-start',
      transition: 'var(--transition-ui)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: on ? 'var(--text-inverse)' : 'var(--border)',
      transition: 'var(--transition-ui)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--text)',
  background: 'var(--surface)',
  border: 'var(--border-1) solid var(--border-soft)',
  borderRadius: 'var(--radius-0)',
  padding: '11px 13px',
  outline: 'none',
  transition: 'var(--transition-ui)'
};
function Textarea({
  invalid = false,
  rows = 5,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...FIELD,
      lineHeight: 'var(--lh-body)',
      resize: 'vertical',
      borderColor: invalid ? 'var(--danger)' : focus ? 'var(--border)' : 'var(--border-soft)',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dncnl-dev/about.jsx
try { (() => {
const {
  Eyebrow,
  Card,
  Tag,
  Reveal,
  Icon,
  Button
} = window.DncnlDevDesignSystem_cd0d7e;
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: 'var(--section-y) var(--page-pad-x)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "04",
    rule: true
  }, "about")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(300px,1.15fr) minmax(280px,0.75fr)',
      gap: 'clamp(32px,5vw,80px)',
      marginTop: 'var(--space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-3xl)',
      maxWidth: '20ch',
      margin: 0
    }
  }, "Hello \u2014 I'm Daniel.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: 'var(--measure)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--tracking-none)'
    }
  }, "I'm a fourth-year computer science student at Angeles University Foundation, in Mabalacat City, Pampanga. I started my degree at Saint Louis University in Baguio and transferred my first year across, which taught me early how to pick up an unfamiliar system and keep moving.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      maxWidth: 'var(--measure)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--tracking-none)'
    }
  }, "I like the whole arc of a build: sitting in the planning phase long enough to define the actual problem, drawing the interface, writing the API behind it, then documenting it so the next person doesn't have to guess. Most recently that meant Kalinga, a multilingual offline-first care app we took to the Presidential Hackathon's international track.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      maxWidth: 'var(--measure)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--tracking-none)'
    }
  }, "I'm open to internships, project work and collaborations \u2014 especially anything where design, data and engineering have to meet in the same room."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "block",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "education"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-slight)',
      fontSize: 'var(--fs-lg)'
    }
  }, "B.S. Computer Science"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, "Angeles University Foundation \xB7 4th year, A.Y. 2025\u20132026 \xB7 expected 2027"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-subtle)'
    }
  }, "Transfer credits: 1st year, Saint Louis University, Baguio City")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-5)',
      borderTop: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "scholarship"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-slight)',
      fontSize: 'var(--fs-lg)'
    }
  }, "DOST-SEI Undergraduate Scholar"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, "RA 7687, merit-based national science scholarship \xB7 2023\u2013present")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-5)',
      borderTop: 'var(--rule)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, ['machine learning', 'intelligent systems', 'software engineering', 'data structures & algorithms'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    as: "a",
    href: "../../assets/resume.docx",
    download: true
  }, "Download r\xE9sum\xE9 ", /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 15
  })))))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dncnl-dev/about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dncnl-dev/contact.jsx
try { (() => {
const {
  Eyebrow,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Card,
  Icon,
  CopyEmail,
  Reveal
} = window.DncnlDevDesignSystem_cd0d7e;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const invalid = touched && !email.includes('@');
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: 'var(--section-y) var(--page-pad-x)',
      background: 'var(--surface)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "05",
    rule: true
  }, "contact")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-3xl)',
      maxWidth: '20ch',
      margin: 'var(--space-5) 0 0'
    }
  }, "Email is the fastest way to reach me.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(CopyEmail, {
    email: "danielcanlapan0402@gmail.com",
    style: {
      marginTop: 'var(--space-6)',
      maxWidth: 760
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(280px,0.85fr) minmax(340px,1fr)',
      gap: 'clamp(32px,5vw,80px)',
      marginTop: 'clamp(40px,5vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-narrow)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--tracking-none)'
    }
  }, "Internships, project work, collaborations, or a question about something I've built \u2014 a paragraph is enough. I reply within two working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      fontSize: 'var(--fs-sm)',
      paddingTop: 'var(--space-4)',
      borderTop: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+639614904854",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), "+63 961 490 4854"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/dncnl",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 16
  }), "github.com/dncnl"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 16
  }), "LinkedIn"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), "San Joaquin, Mabalacat City, Pampanga")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "block"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      fontSize: 'var(--fs-xl)'
    }
  }, "Got it."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-sm)'
    }
  }, "I'll reply to ", email || 'your inbox', " within two working days."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setTouched(true);
      if (email.includes('@')) setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "name",
    htmlFor: "c-name"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    placeholder: "your name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "email",
    htmlFor: "c-email",
    required: true,
    error: invalid ? 'that address looks off' : undefined
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    placeholder: "you@company.com",
    value: email,
    invalid: invalid,
    onChange: e => setEmail(e.target.value),
    onBlur: () => setTouched(true)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "about",
    htmlFor: "c-kind",
    hint: "pick the closest fit"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "c-kind",
    options: ['internship', 'project work', 'collaboration', 'something else']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "message",
    htmlFor: "c-brief"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-brief",
    rows: 4,
    placeholder: "what are you working on?"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "send me a copy of this message"
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    type: "submit"
  }, "Send it")))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dncnl-dev/contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dncnl-dev/data.js
try { (() => {
// Content sourced from Daniel Martin G. Canlapan's resume (assets/resume.docx).
const SKILLS_A = [{
  name: 'Python',
  slug: 'python'
}, {
  name: 'Java',
  slug: 'openjdk'
}, {
  name: 'JavaScript',
  slug: 'javascript'
}, {
  name: 'C#',
  slug: 'csharp'
}, {
  name: 'C++',
  slug: 'cplusplus'
}, {
  name: 'Dart',
  slug: 'dart'
}, {
  name: 'PostgreSQL',
  slug: 'postgresql'
}, {
  name: 'Node.js',
  slug: 'nodedotjs'
}, {
  name: 'Express',
  slug: 'express'
}];
const SKILLS_B = [{
  name: 'scikit-learn',
  slug: 'scikitlearn'
}, {
  name: 'pandas',
  slug: 'pandas'
}, {
  name: 'NumPy',
  slug: 'numpy'
}, {
  name: 'Seaborn'
}, {
  name: 'Flutter',
  slug: 'flutter'
}, {
  name: 'Tkinter'
}, {
  name: 'Figma',
  slug: 'figma'
}, {
  name: 'Git',
  slug: 'git'
}, {
  name: 'GitHub',
  slug: 'github'
}, {
  name: 'VS Code'
}, {
  name: 'Claude Code',
  slug: 'claude'
}];
const COMPETENCIES = [{
  key: 'full-stack web development',
  icon: 'server',
  body: 'Responsive web applications and secure RESTful APIs with Node.js and Express, vanilla JavaScript on the front, PostgreSQL behind.',
  tags: ['node.js', 'express', 'javascript', 'postgresql']
}, {
  key: 'machine learning & data analysis',
  icon: 'line-chart',
  body: 'Developing, training and evaluating predictive models â€” preprocessing, feature engineering and visualisation in Python.',
  tags: ['python', 'scikit-learn', 'pandas', 'numpy', 'seaborn']
}, {
  key: 'software & UI development',
  icon: 'layout',
  body: 'Standalone desktop applications and graphical interfaces with Tkinter and CustomTkinter; UI design, prototyping and mockups in Figma.',
  tags: ['tkinter', 'customtkinter', 'figma']
}, {
  key: 'technical documentation',
  icon: 'file-text',
  body: 'Structured system documentation, architectural overviews and literature reviews for complex software projects.',
  tags: ['architecture docs', 'literature review']
}];
const PROJECTS = [{
  client: 'Presidential Hackathon Â· International Track',
  year: '2025',
  title: 'Kalinga â€” AI care companion for migrant caregivers',
  metric: 'Frontend developer & planning contributor',
  summary: 'Scoped the problem and MVP, then designed and built the multi-screen Flutter app: onboarding, patient profiles, daily check-ins, medication tracking and emergency help â€” multilingual and offline-first.',
  tags: ['flutter', 'dart', 'ui/ux', 'figma'],
  href: 'https://github.com/dncnl/kalinga'
}];
Object.assign(window, {
  SKILLS_A,
  SKILLS_B,
  COMPETENCIES,
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dncnl-dev/data.js", error: String((e && e.message) || e) }); }

// ui_kits/dncnl-dev/footer.jsx
try { (() => {
const {
  IconButton,
  Icon
} = window.DncnlDevDesignSystem_cd0d7e;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'var(--space-8) var(--page-pad-x) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-5)',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      fontSize: 'var(--fs-2xl)'
    }
  }, "dncnl.dev"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Daniel Martin G. Canlapan \xB7 Pampanga, Philippines"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:danielcanlapan0402@gmail.com",
    style: {
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      marginTop: 12,
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), "danielcanlapan0402@gmail.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "github",
    label: "GitHub",
    size: "sm",
    variant: "ghost",
    onClick: () => window.open('https://github.com/dncnl', '_blank')
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "linkedin",
    label: "LinkedIn",
    size: "sm",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    label: "Email",
    size: "sm",
    variant: "ghost",
    onClick: () => {
      window.location.href = 'mailto:danielcanlapan0402@gmail.com';
    }
  }))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dncnl-dev/footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dncnl-dev/hero.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Orb,
  Reveal,
  Icon,
  SkillMarquee
} = window.DncnlDevDesignSystem_cd0d7e;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(56px,7vw,104px) var(--page-pad-x) clamp(40px,5vw,72px)'
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    style: {
      position: 'absolute',
      right: '-22%',
      top: '-46%',
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--max-w)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "01",
    style: {
      marginBottom: 'var(--space-7)'
    }
  }, "daniel martin canlapan \xB7 b.s. computer science")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-hero)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-hero)',
      lineHeight: 'var(--lh-solid)',
      fontSize: 'var(--fs-hero)',
      margin: 0,
      paddingTop: '0.14em',
      maxWidth: '15ch',
      textWrap: 'balance'
    }
  }, "I build software end to end.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      maxWidth: '58ch',
      fontSize: 'var(--fs-md)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--tracking-none)',
      color: 'var(--text-muted)'
    }
  }, "Fourth-year computer science student and DOST-SEI scholar. I work across web apps and APIs, machine learning and data analysis, desktop interfaces, and the documentation that keeps a system legible \u2014 from the problem statement to the shipped screen.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNav('work')
  }, "See the work"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNav('contact')
  }, "Get in touch"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    as: "a",
    href: "https://github.com/dncnl",
    target: "_blank",
    rel: "noreferrer"
  }, "github.com/dncnl ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 15
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      display: 'flex',
      gap: 'clamp(24px,5vw,72px)',
      flexWrap: 'wrap',
      margin: 'clamp(44px,6vw,88px) 0 0',
      paddingTop: 'var(--space-6)',
      borderTop: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, [['B.S. Computer Science', '4th year Â· expected 2027'], ['DOST-SEI Scholar', 'RA 7687 Â· 2023â€“present'], ['4 core competencies', 'web Â· ML Â· UI Â· docs'], ['Based in Pampanga, PH', 'GMT+8']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-slight)',
      fontSize: 'var(--fs-lg)'
    }
  }, t), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--tracking-none)',
      color: 'var(--text-muted)'
    }
  }, d))))))), /*#__PURE__*/React.createElement(SkillMarquee, {
    items: window.SKILLS_A,
    speed: 46
  }), /*#__PURE__*/React.createElement(SkillMarquee, {
    items: window.SKILLS_B,
    speed: 62,
    direction: "right",
    style: {
      borderTop: 0
    }
  }));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dncnl-dev/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dncnl-dev/insights.jsx
try { (() => {
const {
  Eyebrow,
  Card,
  MetricBar,
  Stat,
  Quote,
  Button,
  Icon
} = window.DncnlDevDesignSystem_cd0d7e;
const STEPS = [['collect', 'Events, orders and forms into one warehouse â€” no vanity dashboards.'], ['question', 'One business question per report. "Which pages make money?" beats "traffic overview".'], ['decide', 'A weekly readout with the change to make, ranked by expected revenue.']];
function Insights() {
  const [range, setRange] = React.useState('90d');
  const data = {
    '30d': [['organic sessions', 42, '+42%'], ['add to cart', 28, '+28%'], ['checkout drop-off', 31, '31%'], ['repeat orders', 18, '+18%']],
    '90d': [['organic sessions', 68, '+68%'], ['add to cart', 41, '+41%'], ['checkout drop-off', 22, '22%'], ['repeat orders', 34, '+34%']]
  }[range];
  return /*#__PURE__*/React.createElement("section", {
    id: "insights",
    style: {
      padding: 'var(--section-y) var(--page-pad-x)',
      background: 'var(--surface)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "03",
    rule: true
  }, "business insight from data"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(320px,1fr) minmax(340px,0.9fr)',
      gap: 'clamp(32px,5vw,80px)',
      marginTop: 'var(--space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-3xl)',
      maxWidth: '24ch',
      margin: 0
    }
  }, "A site is a hypothesis. Analytics is how you settle it."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: 'var(--measure)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)'
    }
  }, "Every build ships with tracking that answers one question the owner already asks out loud. Then I stay long enough to see the answer change."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, STEPS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '46px 1fr',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) 0',
      borderTop: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--text-subtle)'
    }
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      fontSize: 'var(--fs-lg)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-body)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Quote, {
    attribution: "Mara Ellis",
    role: "Founder, Ridge Coffee",
    style: {
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-6)',
      borderTop: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, "We finally know which pages make money.")), /*#__PURE__*/React.createElement(Card, {
    variant: "block"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-3)',
      paddingBottom: 'var(--space-4)',
      borderBottom: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "weekly readout \xB7 ridge coffee"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: 'var(--border-1) solid var(--border)'
    }
  }, ['30d', '90d'].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setRange(r),
    style: {
      border: 0,
      cursor: 'pointer',
      padding: '5px 10px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      background: range === r ? 'var(--surface-inverse)' : 'transparent',
      color: range === r ? 'var(--text-inverse)' : 'var(--text-subtle)'
    }
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      padding: 'var(--space-5) 0',
      borderBottom: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: range === '90d' ? '+38%' : '+12%',
    label: "online orders"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: range === '90d' ? '2.4Ã—' : '1.3Ã—',
    label: "conversion"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      paddingTop: 'var(--space-5)'
    }
  }, data.map(([l, v, d], i) => /*#__PURE__*/React.createElement(MetricBar, {
    key: l,
    label: l,
    value: v,
    display: d,
    tone: i === 2 ? 'data-accent' : 'data-' + (i + 1)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      paddingTop: 'var(--space-4)',
      borderTop: 'var(--rule)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flag",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, "Next: shorten checkout to one step."))))));
}
Object.assign(window, {
  Insights
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dncnl-dev/insights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dncnl-dev/nav.jsx
try { (() => {
const {
  Button,
  ThemeToggle,
  IconButton
} = window.DncnlDevDesignSystem_cd0d7e;
function Nav({
  theme,
  setTheme,
  active,
  onNav
}) {
  const links = [['work', '02'], ['skills', '03'], ['about', '04'], ['contact', '05']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--bg)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)',
      padding: '0 var(--page-pad-x)',
      transition: 'var(--transition-theme)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    },
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      fontSize: 26,
      textDecoration: 'none'
    }
  }, "dncnl.dev"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginLeft: 'auto'
    }
  }, links.map(([id, n]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active === id ? 'var(--text)' : 'var(--text-muted)',
      borderBottom: active === id ? '2px solid var(--border)' : '2px solid transparent',
      paddingBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      marginRight: 8
    }
  }, n), id))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(ThemeToggle, {
    theme: theme,
    onChange: setTheme
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "github",
    label: "GitHub \u2014 dncnl",
    size: "sm",
    onClick: () => window.open('https://github.com/dncnl', '_blank')
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav('contact')
  }, "Get in touch"))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dncnl-dev/nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dncnl-dev/skills.jsx
try { (() => {
const {
  Eyebrow,
  Card,
  Tag,
  Reveal,
  Icon,
  TechIcon,
  SkillMarquee
} = window.DncnlDevDesignSystem_cd0d7e;
function Skills() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    style: {
      padding: 'var(--section-y) 0',
      background: 'var(--surface)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--page-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "03",
    rule: true
  }, "what I do")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-3xl)',
      maxWidth: '26ch',
      margin: 'var(--space-5) 0 0'
    }
  }, "Four competencies, one person to brief.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      borderTop: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, window.COMPETENCIES.map((c, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement(Reveal, {
      key: c.key,
      delay: 40 * i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: 'var(--border-hair) solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: 'var(--space-5) 0',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        color: 'var(--text)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--fs-2xs)',
        letterSpacing: 'var(--tracking-wide)',
        color: 'var(--text-subtle)',
        width: 28
      }
    }, '0' + (i + 1)), /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-title)',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-slight)',
        fontSize: 'var(--fs-xl)',
        flex: 1
      }
    }, c.key), /*#__PURE__*/React.createElement(Icon, {
      name: isOpen ? 'minus' : 'plus',
      size: 18,
      style: {
        color: 'var(--text-muted)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 260 : 0,
        overflow: 'hidden',
        transition: 'max-height var(--dur-3) var(--ease-out), opacity var(--dur-2) var(--ease-out)',
        opacity: isOpen ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-5)',
        alignItems: 'flex-start',
        padding: '0 0 var(--space-6) 60px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 'var(--measure)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--lh-body)',
        letterSpacing: 'var(--tracking-none)'
      }
    }, c.body), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-2)'
      }
    }, c.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t)))))));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--page-pad-x) var(--space-4)',
      maxWidth: 'var(--max-w)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "languages, libraries & tools")), /*#__PURE__*/React.createElement(SkillMarquee, {
    items: [...window.SKILLS_A, ...window.SKILLS_B],
    speed: 72
  })));
}
Object.assign(window, {
  Skills
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dncnl-dev/skills.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dncnl-dev/work.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Eyebrow,
  ProjectCard,
  Card,
  Tag,
  Reveal,
  Icon,
  Button
} = window.DncnlDevDesignSystem_cd0d7e;
function Work() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: 'var(--section-y) var(--page-pad-x)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "02",
    rule: true
  }, "projects")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-3xl)',
      maxWidth: '24ch',
      margin: 'var(--space-5) 0 0'
    }
  }, "Built with a team, shipped under a deadline.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, window.PROJECTS.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.title,
    delay: 60 * i
  }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p, {
    target: "_blank",
    rel: "noreferrer",
    style: {
      height: '100%'
    }
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "hairline",
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "coursework & self-directed"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)',
      fontSize: 'var(--fs-sm)'
    }
  }, "Machine learning, intelligent systems, software engineering and data structures & algorithms \u2014 plus predictive-model exercises, desktop tools and API work that live in the repos rather than in a case study."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)'
    }
  }, ['machine learning', 'intelligent systems', 'software engineering', 'dsa'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    as: "a",
    href: "https://github.com/dncnl",
    target: "_blank",
    rel: "noreferrer"
  }, "Browse the repos ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 15
  })))))));
}
Object.assign(window, {
  Work
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dncnl-dev/work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CopyEmail = __ds_scope.CopyEmail;

__ds_ns.MetricBar = __ds_scope.MetricBar;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SkillMarquee = __ds_scope.SkillMarquee;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Orb = __ds_scope.Orb;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TechIcon = __ds_scope.TechIcon;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
