// app.jsx — root, nav, footer, dark mode, chatbot, router

const { useState, useEffect, useRef } = React;
const D = window.VNL_DATA;
const PAGES = window.VNL_PAGES;

const NAV = [
  { key: "home",       label: "Home" },
  { key: "about",      label: "About" },
  { key: "services",   label: "Services" },
  { key: "companies",  label: "Companies" },
  { key: "leadership", label: "Leadership" },
  { key: "contact",    label: "Contact" },
];

/* ── Dark/light mode hook ─────────────────────────────── */
function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("vnl-theme") || "dark"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("vnl-theme", theme);
  }, [theme]);
  const toggle = () => setTheme(t => t === "dark" ? "light" : "dark");
  return [theme, toggle];
}

/* ── Nav ──────────────────────────────────────────────── */
function Nav({ page, go, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-bar">
      <div className="shell nav-inner">
        <div onClick={() => { go("home"); setOpen(false); }} style={{ cursor: "pointer" }}>
          <VLogoWord />
        </div>

        <nav className="nav-links">
          {NAV.map((n) => (
            <button
              key={n.key}
              className={"nav-link" + (page === n.key ? " active" : "")}
              onClick={() => { go(n.key); setOpen(false); }}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={16} stroke={1.8} />
          </button>
          <button className="nav-cta" onClick={() => { go("contact"); setOpen(false); }}>
            Get in touch <Icon name="arrow-up-right" size={13} />
          </button>
          <button className="mobile-toggle nav-link" onClick={() => setOpen(!open)}>
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-drawer">
          <div className="shell">
            {NAV.map((n) => (
              <button
                key={n.key}
                className={"nav-link" + (page === n.key ? " active" : "")}
                onClick={() => { go(n.key); setOpen(false); }}
                style={{ display: "block", width: "100%", textAlign: "left" }}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ── Scroll progress bar ──────────────────────────────── */
function ScrollBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="scroll-bar">
      <div className="fill" style={{ width: pct + "%" }} />
    </div>
  );
}

/* ── Footer ───────────────────────────────────────────── */
function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-tag">
          V<span className="o">i</span>talaid<span className="t">.</span>
        </div>
        <div className="footer-grid">
          <div>
            <h4>Vitalaid Nigeria Ltd</h4>
            <p style={{ color: "rgba(240,237,230,.6)", fontSize: 14, lineHeight: 1.7, maxWidth: 320, margin: 0 }}>
              Strategic partner in global supply chain management —
              logistics, transportation, and distribution since 1993.
              Headquartered in Port Harcourt, Rivers State.
            </p>
          </div>
          <div>
            <h4>Navigate</h4>
            {NAV.map((n) => (
              <a key={n.key} className="footer-link" onClick={() => go(n.key)} style={{ cursor: "pointer" }}>
                {n.label}
              </a>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            {D.contact.phones.map((p, i) => <div className="footer-link" key={i}>{p}</div>)}
            {D.contact.emails.map((e, i) => <div className="footer-link" key={"e" + i}>{e}</div>)}
          </div>
          <div>
            <h4>Address</h4>
            <div className="footer-link" style={{ whiteSpace: "pre-line" }}>{D.contact.address}</div>
            <div className="footer-link" style={{ marginTop: 6 }}>{D.contact.website}</div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vitalaid Nigeria Limited. All rights reserved.</span>
          <span>Port Harcourt · Rivers State · NG</span>
        </div>
      </div>
    </footer>
  );
}

/* ── ChatBot ─────────────────────────────────────────── */
function ChatBot({ go }) {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [options, setOptions] = useState(null);
  const bodyRef = useRef(null);

  const GREETING = {
    text: "Hi — I'm the Vitalaid guide. How can I help you today?",
    opts: D.faq.map(item => ({ label: item.label, id: item.id })),
  };

  useEffect(() => {
    if (open && history.length === 0) {
      setHistory([{ role: "bot", text: GREETING.text }]);
      setOptions(GREETING.opts);
    }
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const pick = (optId) => {
    const topItem = D.faq.find(f => f.id === optId);
    const deepItem = D.faq.flatMap(f => f.children || []).find(c => c.id === optId);
    const item = topItem || deepItem;
    if (!item) return;

    setHistory(h => [
      ...h,
      { role: "user", text: item.label },
      { role: "bot",  text: item.answer },
    ]);

    if (item.action?.type === "navigate") {
      setTimeout(() => {
        go(item.action.page);
        setOpen(false);
        reset();
      }, 900);
      return;
    }

    if (item.children && item.children.length) {
      setOptions(item.children.map(c => ({ label: c.label, id: c.id })));
    } else {
      setOptions([
        { label: "Back to main menu", id: "__reset" },
        { label: "Contact us →", id: "__contact" },
      ]);
    }
  };

  const handleOpt = (id) => {
    if (id === "__reset") { reset(); return; }
    if (id === "__contact") { go("contact"); setOpen(false); reset(); return; }
    pick(id);
  };

  const reset = () => {
    setHistory([{ role: "bot", text: GREETING.text }]);
    setOptions(GREETING.opts);
  };

  return (
    <>
      <button
        className={"chat-bubble" + (open ? " is-open" : "")}
        onClick={() => setOpen(o => !o)}
        title="Chat with Vitalaid guide"
      >
        <Icon name={open ? "close" : "chat"} size={22} stroke={1.8} />
      </button>

      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-header-mark">
              <VLogoMark size={18} />
            </div>
            <div>
              <div className="chat-header-title">Vitalaid Guide</div>
              <div className="chat-header-sub">Ask about our services</div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>
              <Icon name="close" size={14} stroke={2} />
            </button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {history.map((msg, i) => (
              <div
                key={i}
                className={"chat-bubble-msg " + (msg.role === "bot" ? "chat-bubble-bot" : "chat-bubble-user")}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {options && options.length > 0 && (
            <div className="chat-options">
              {options.map((opt) => (
                <button key={opt.id} className="chat-option" onClick={() => handleOpt(opt.id)}>
                  {opt.label}
                  <span className="chat-option-arrow">
                    <Icon name="arrow-right" size={14} stroke={2} />
                  </span>
                </button>
              ))}
            </div>
          )}

          <button className="chat-reset" onClick={reset}>Start over</button>
        </div>
      )}
    </>
  );
}

/* ── App ──────────────────────────────────────────────── */
function App() {
  const [page, setPage] = useState(() => {
    const h = (window.location.hash || "").replace("#", "");
    return NAV.find(n => n.key === h)?.key || "home";
  });

  const [theme, toggleTheme] = useTheme();

  const go = (key) => {
    setPage(key);
    window.location.hash = key;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    const onHash = () => {
      const h = (window.location.hash || "").replace("#", "");
      if (NAV.find(n => n.key === h)) setPage(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Page = PAGES[page.charAt(0).toUpperCase() + page.slice(1)] || PAGES.Home;

  return (
    <>
      <Nav page={page} go={go} theme={theme} toggleTheme={toggleTheme} />
      <ScrollBar />
      <main key={page}>
        <Page go={go} />
      </main>
      <Footer go={go} />
      <ChatBot go={go} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
