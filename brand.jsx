/* Real logo image + icon set */

/* Note: for a fully transparent background in dark mode, replace assets/vnl_logo.png
   with a version that has a transparent background (assets/vnl_logo_transparent.png) */
const VLogoMark = ({ size = 34 }) => (
  <img
    src="assets/vnl_logo.png"
    alt="Vitalaid Nigeria Limited"
    className="nav-logo-img"
    style={{ height: size, width: "auto" }}
  />
);

const VLogoWord = () => (
  <div className="nav-logo">
    <VLogoMark size={34} />
  </div>
);

/* Icon set — minimal stroke icons */
const Icon = ({ name, size = 20, stroke = 1.6 }) => {
  const c = {
    width: size, height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "arrow-right":     return (<svg {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "arrow-up-right":  return (<svg {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>);
    case "phone":           return (<svg {...c}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
    case "mail":            return (<svg {...c}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>);
    case "pin":             return (<svg {...c}><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);
    case "globe":           return (<svg {...c}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>);
    case "menu":            return (<svg {...c}><path d="M3 6h18M3 12h18M3 18h18"/></svg>);
    case "close":           return (<svg {...c}><path d="M18 6 6 18M6 6l12 12"/></svg>);
    case "ship":            return (<svg {...c}><path d="M2 20a4 4 0 0 0 4-2 4 4 0 0 0 4 2 4 4 0 0 0 4-2 4 4 0 0 0 4 2 4 4 0 0 0 4-2"/><path d="M4 18 2 12h20l-2 6"/><path d="M12 4v8M8 8h8"/></svg>);
    case "plane":           return (<svg {...c}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>);
    case "file":            return (<svg {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13l2 2 4-4"/></svg>);
    case "badge":           return (<svg {...c}><path d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m9 12 2 2 4-4"/></svg>);
    case "receipt":         return (<svg {...c}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>);
    case "anchor":          return (<svg {...c}><circle cx="12" cy="5" r="3"/><path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"/></svg>);
    case "truck":           return (<svg {...c}><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>);
    case "scale":           return (<svg {...c}><path d="M12 3v18M3 7l4-4 4 4M13 7l4-4 4 4"/><path d="M3 7c0 3 3 5 4 5s4-2 4-5M13 7c0 3 3 5 4 5s4-2 4-5"/></svg>);
    case "waves":           return (<svg {...c}><path d="M2 6c2 0 2 2 5 2s3-2 5-2 3 2 5 2 3-2 5-2M2 12c2 0 2 2 5 2s3-2 5-2 3 2 5 2 3-2 5-2M2 18c2 0 2 2 5 2s3-2 5-2 3 2 5 2 3-2 5-2"/></svg>);
    case "grad":            return (<svg {...c}><path d="m22 10-10-5L2 10l10 5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 10v6"/></svg>);
    case "sun":             return (<svg {...c}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>);
    case "moon":            return (<svg {...c}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>);
    case "chat":            return (<svg {...c}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
    case "check":           return (<svg {...c}><path d="M20 6 9 17l-5-5"/></svg>);
    case "star":            return (<svg {...c}><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>);
    case "zap":             return (<svg {...c}><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>);
    case "shield":          return (<svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
    default: return null;
  }
};

window.VLogoMark = VLogoMark;
window.VLogoWord = VLogoWord;
window.Icon = Icon;
