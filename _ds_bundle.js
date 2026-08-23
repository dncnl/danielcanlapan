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
  interactive = false,
  hoverColors = ['var(--ochre)', 'var(--rust)', 'var(--slate)', 'var(--moss)'],
  style,
  ...rest
}) {
  const [hoverIndex, setHoverIndex] = React.useState(-1);
  const active = interactive && hoverIndex >= 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true"
  }, interactive ? {
    onMouseEnter: () => setHoverIndex(i => (i + 1) % hoverColors.length),
    onMouseLeave: () => setHoverIndex(-1)
  } : null, rest, {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: active ? hoverColors[hoverIndex] : color,
      filter: blur,
      pointerEvents: interactive ? 'auto' : 'none',
      transition: interactive ? 'background-color var(--dur-4) var(--ease-in-out)' : undefined,
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
      objectFit: 'cover'
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
const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@16.28.0/icons/';

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
/** One continuous horizontal strip of skills. The number of copies of the set is measured
 * with a ResizeObserver so the track always covers at least 2x the visible width — a short
 * item list on a wide viewport would otherwise show a blank gap right before it loops. */
function SkillMarquee({
  items = [],
  speed = 42,
  direction = 'left',
  pauseOnHover = true,
  style,
  ...rest
}) {
  const [paused, setPaused] = React.useState(false);
  const [copies, setCopies] = React.useState(2);
  const id = React.useMemo(() => 'mq' + Math.random().toString(36).slice(2, 8), []);
  const outerRef = React.useRef(null);
  const setRef = React.useRef(null);
  React.useLayoutEffect(() => {
    const outer = outerRef.current;
    const set = setRef.current;
    if (!outer || !set) return;
    const measure = () => {
      const setWidth = set.getBoundingClientRect().width;
      const outerWidth = outer.getBoundingClientRect().width;
      if (setWidth <= 0) return;
      const needed = Math.max(2, Math.ceil(outerWidth * 2 / setWidth) + 1);
      setCopies(c => c === needed ? c : needed);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(outer);
    return () => ro.disconnect();
  }, [items]);
  const renderItem = (it, key) => {
    const name = typeof it === 'string' ? it : it.name;
    const slug = typeof it === 'string' ? undefined : it.slug;
    return /*#__PURE__*/React.createElement("span", {
      key,
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
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: outerRef,
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
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes ${id}{from{transform:translateX(0)}to{transform:translateX(-${(100 / copies).toFixed(4)}%)}}
@media (prefers-reduced-motion:reduce){.${id}{animation:none!important}}`), /*#__PURE__*/React.createElement("div", {
    className: id,
    style: {
      display: 'flex',
      width: 'max-content',
      animation: `${id} ${speed}s linear infinite`,
      animationDirection: direction === 'right' ? 'reverse' : 'normal',
      animationPlayState: paused ? 'paused' : 'running'
    }
  }, Array.from({ length: copies }).map((_, s) => /*#__PURE__*/React.createElement("div", {
    key: s,
    ref: s === 0 ? setRef : undefined,
    style: { display: 'flex' }
  }, items.map((it, i) => renderItem(it, s + '-' + i))))));
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
