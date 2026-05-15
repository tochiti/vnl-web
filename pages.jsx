// pages.jsx — all page views for VITALAID

const { useState, useEffect, useMemo, useRef } = React;
const D = window.VNL_DATA;

/* ── Service background images (Unsplash CDN) ─────────── */
const SVC_IMAGES = [
  "photo-1494412574643-ff11b0a5c1c3", // 01 Freight Fwd — containers
  "photo-1436491865332-7a61a109cc05", // 02 Shipping/Air — airplane
  "photo-1554224155-6726b3ff858f",    // 03 Documentation
  "photo-1486325212027-8081e485255e", // 04 IDEC — building
  "photo-1578575437130-527eed3abbec", // 05 Bond — cargo ship
  "photo-1504307651254-35680f356dfd", // 06 TI — industrial
  "photo-1519003722824-194d4455a60c", // 07 Transport — truck
  "photo-1553413077-190dd305871c",    // 08 HS Code — warehouse
  "photo-1542744173-8e7e53415bb0",    // 09 Consultation — meeting
  "photo-1524178232363-1fb2b075b655", // 10 Training — classroom
];

/* ── Client data with real logos where available ──────── */
const CLIENTS = [
  { mono: "TE", name: "TotalEnergies EP Nigeria",  sub: "Trans-Amadi · PH",   color: "#C41533", logo: "https://corporate.totalenergies.ng/themes/custom/butterfly_theme/logo.svg" },
  { mono: "TG", name: "Tenaris Global Services",   sub: "OGFZ · Onne",        color: "#1B3FD8", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Tenaris_Logo.svg" },
  { mono: "DM", name: "DMS Nigeria Ltd",           sub: "OGFZA · Onne",       color: "#0D9488", logo: null },
  { mono: "AI", name: "Alphameric International",  sub: "OGFZ · Onne",        color: "#7C3AED", logo: null },
  { mono: "AV", name: "AVSCO Houston Int'l",       sub: "Port Harcourt",      color: "#EA580C", logo: "https://images.squarespace-cdn.com/content/v1/5ffc79a192e37d47576b1de2/1614025239854-1OQNRWNZS0U2YZ379L4R/LOGO.png?format=1500w" },
  { mono: "BO", name: "Biddy Ossa Enterprises",    sub: "Lekki · Lagos",      color: "#CA8A04", logo: "https://biddyosa.com/assets/images/logo.png" },
  { mono: "OL", name: "Opticom Leasing Nigeria",   sub: "Port Harcourt",      color: "#0891B2", logo: null },
  { mono: "WL", name: "William Lloyds Technical",  sub: "Port Harcourt",      color: "#C41533", logo: null },
  { mono: "FP", name: "Felpet Nigeria Ltd",        sub: "Port Harcourt",      color: "#16A34A", logo: null },
  { mono: "WA", name: "West Atlantic Shipyard",    sub: "OGFZ · Onne",        color: "#1B3FD8", logo: "https://was-shipyard.com/wp-content/uploads/2022/11/was-logo-80h-1.png" },
];

/* ── ClientMarquee (single row, real logos where found) ── */
const ClientBadge = ({ c }) => {
  const [imgFailed, setImgFailed] = useState(false);
  if (c.logo && !imgFailed) {
    return (
      <div className="client-badge">
        <img
          src={c.logo}
          className="client-logo-img"
          alt={c.name}
          onError={() => setImgFailed(true)}
        />
        <div>
          <div className="client-badge-name">{c.name}</div>
          <div className="client-badge-sub">{c.sub}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="client-badge">
      <div className="client-badge-mono" style={{ background: c.color + "22", color: c.color, border: `1px solid ${c.color}44` }}>
        {c.mono}
      </div>
      <div>
        <div className="client-badge-name">{c.name}</div>
        <div className="client-badge-sub">{c.sub}</div>
      </div>
    </div>
  );
};

const ClientMarquee = () => {
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <div className="client-marquee-wrap">
      <div className="client-track">
        {items.map((c, i) => <ClientBadge key={i} c={c} />)}
      </div>
    </div>
  );
};

/* ── Shared ──────────────────────────────────────────────── */

const Eyebrow = ({ children, style }) => <span className="eyebrow" style={style}>{children}</span>;

const SubHero = ({ idx, label, title, lead, meta }) => (
  <section className="sub-hero">
    <div className="shell">
      <div className="bread fade-in">
        <span>{idx}</span>
        <span className="dot" />
        <span>{label}</span>
      </div>
      <div className="sub-hero-grid">
        <h1 className="fade-in d1" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="fade-in d2">
          <p className="lead">{lead}</p>
          {meta && (
            <div style={{ marginTop: 28, display: "flex", gap: 36, flexWrap: "wrap" }}>
              {meta.map((m, i) => (
                <div key={i}>
                  <div className="mono" style={{ fontSize: 10.5, color: "var(--mute)", textTransform: "uppercase", letterSpacing: ".14em" }}>{m.k}</div>
                  <div style={{ fontFamily: "Sora", fontSize: 22, fontWeight: 700, letterSpacing: "-0.03em", marginTop: 4, color: "var(--text)" }}>{m.v}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

/* ── HOME ────────────────────────────────────────────────── */

const Home = ({ go }) => (
  <>
    {/* Hero */}
    <section className="hero">
      <div className="hero-orb-1" />
      <div className="shell">
        <div className="hero-kicker-row fade-in">
          <span className="meta">Est. 1993 — Port Harcourt · NG</span>
          <span className="meta">VNL/01 — Supply Chain · Logistics · Distribution</span>
        </div>

        <div className="hero-grid">
          <h1 className="hero-title fade-in d1">
            Move cargo<br />
            with <span className="italic accent-blue">discipline.</span><br />
            Clear customs<br />
            with <span className="italic accent-red">certainty.</span>
          </h1>
          <div className="hero-side fade-in d2">
            <p className="hero-body">
              For more than three decades, Vitalaid Nigeria has been the
              strategic partner in freight, customs, and supply chain
              execution for oil &amp; gas operators, manufacturers, contractors,
              and government teams.
            </p>
            <div className="cta-row">
              <button className="btn btn-primary" onClick={() => go("services")}>
                Explore services <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
              </button>
              <button className="btn btn-ghost" onClick={() => go("contact")}>
                Talk to Vitalaid
              </button>
            </div>
          </div>
        </div>

        {/* Hero visual mosaic */}
        <div className="hero-visual fade-in d3">
          <div className="hero-visual-content">
            <div className="hv-cell has-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=75&auto=format&fit=crop')" }}>
              <div className="num">01 / SHIP</div>
              <div>
                <div className="big" style={{ color: "var(--accent-red)" }}>FTL</div>
                <div className="lbl">Full-truck and heavy-lift haulage with escorted security routing.</div>
              </div>
            </div>
            <div className="hv-cell has-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566676838420-0f8e7ce70dcc?w=600&q=75&auto=format&fit=crop')" }}>
              <div className="num">02 / CLEAR</div>
              <div>
                <div className="big" style={{ color: "var(--accent-blue)" }}>PAAR</div>
                <div className="lbl">Pre-Arrival Assessment Report filed and cleared on time.</div>
              </div>
            </div>
            <div className="hv-cell has-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=75&auto=format&fit=crop')" }}>
              <div className="num">03 / DEFER</div>
              <div>
                <div className="big" style={{ color: "var(--accent-red)" }}>BOND</div>
                <div className="lbl">Customs bonds that defer duty and unlock temporary importation.</div>
              </div>
            </div>
            <div className="hv-cell has-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75&auto=format&fit=crop')" }}>
              <div className="num">04 / ADVISE</div>
              <div>
                <div className="big" style={{ color: "var(--accent-blue)" }}>HS·CODE</div>
                <div className="lbl">Tariff data bank that predetermines duty before arrival.</div>
              </div>
            </div>
          </div>
          <div className="hero-mark">
            <img className="hero-mark-logo" src="assets/vnl_logo.png" alt="Vitalaid" />
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-soft)" }}>Vitalaid · since 1993</div>
          </div>
        </div>
      </div>
    </section>

    {/* Client roster marquee */}
    <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="shell" style={{ paddingTop: 20, paddingBottom: 8 }}>
        <Eyebrow>Trusted by</Eyebrow>
      </div>
      <ClientMarquee />
    </section>

    {/* Stats */}
    <div className="metric-strip">
      {D.facts.map((f, i) => (
        <div className="metric" key={i}>
          <div className="val">
            {f.value.includes("+")
              ? <><span>{f.value.replace("+", "")}</span><span className="accent">+</span></>
              : f.value}
          </div>
          <div className="lbl">{f.label}</div>
        </div>
      ))}
    </div>

    {/* Practice section */}
    <section className="section with-image">
      <div className="image-section img-ship">
        <div className="shell" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <Eyebrow style={{ color: "rgba(240,237,230,.5)" }}>VNL / 002 — Practice</Eyebrow>
          <div className="section-title" style={{ color: "var(--text)", marginTop: 24, marginBottom: 48, maxWidth: 640 }}>
            We don't just <span className="italic">process transactions.</span><br />
            We execute the <span style={{ color: "var(--accent-red)" }}>supply chain.</span>
          </div>

          <div className="feature-grid" style={{ maxWidth: 1000 }}>
            <div className="feature-card" style={{ background: "rgba(6,11,24,.72)", backdropFilter: "blur(20px)", border: "1px solid rgba(240,237,230,.1)" }}>
              <div className="icon-box" style={{ background: "rgba(240,237,230,.08)", borderColor: "rgba(240,237,230,.15)", color: "var(--accent-red)" }}><Icon name="ship" size={22} /></div>
              <h3 style={{ color: "var(--text)" }}>Origin-to-site visibility</h3>
              <p style={{ color: "rgba(240,237,230,.68)" }}>Pre-clearance, husbanding, port-of-destination handling, and inland haulage as one coordinated motion — from factory gate to project site.</p>
            </div>
            <div className="feature-card" style={{ background: "rgba(6,11,24,.72)", backdropFilter: "blur(20px)", border: "1px solid rgba(240,237,230,.1)" }}>
              <div className="icon-box" style={{ background: "rgba(240,237,230,.08)", borderColor: "rgba(240,237,230,.15)", color: "var(--accent-blue)" }}><Icon name="file" size={22} /></div>
              <h3 style={{ color: "var(--text)" }}>Documentation discipline</h3>
              <p style={{ color: "rgba(240,237,230,.68)" }}>Form M, PAAR, IDEC, and HS-code review handled before they become clearance bottlenecks. Zero surprises at the port.</p>
            </div>
            <div className="feature-card" style={{ background: "rgba(6,11,24,.72)", backdropFilter: "blur(20px)", border: "1px solid rgba(240,237,230,.1)" }}>
              <div className="icon-box" style={{ background: "rgba(240,237,230,.08)", borderColor: "rgba(240,237,230,.15)", color: "var(--accent-red)" }}><Icon name="globe" size={22} /></div>
              <h3 style={{ color: "var(--text)" }}>Global network reach</h3>
              <p style={{ color: "rgba(240,237,230,.68)" }}>An alliance of specialist logistics firms across air, sea, and land — covering every origin and destination your supply chain demands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 003 — Process</Eyebrow>
          <div className="section-title">
            A four-step partnership <span className="italic">from purchase order to site delivery.</span>
          </div>
        </div>
        <div className="process-grid">
          {D.process.map((p) => (
            <div className="process-step" key={p.n}>
              <div className="step-num">{p.n}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service preview */}
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 004 — Capabilities</Eyebrow>
          <div className="section-title">Ten capabilities, one execution partner.</div>
        </div>
        <div className="services-list">
          {D.services.slice(0, 5).map((s) => (
            <div className="service-row" key={s.n} onClick={() => go("services")}>
              <div className="service-num">— {s.n}</div>
              <div className="service-name">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="arrow"><Icon name="arrow-up-right" size={15} /></div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <button className="btn btn-ghost" onClick={() => go("services")}>
            See all ten services <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
          </button>
        </div>
      </div>
    </section>
  </>
);

/* ── ABOUT ───────────────────────────────────────────────── */

const About = ({ go }) => (
  <>
    <SubHero
      idx="VNL / 010"
      label="About Vitalaid"
      title={`A logistics partner, <span class="italic accent-blue">not a transaction processor.</span>`}
      lead="Vitalaid Nigeria Ltd was incorporated in 1993 and has spent three decades in consultancy, materials management, supply chain management, and logistics — serving oil & gas, manufacturing, construction, commercial, and government clients."
      meta={[
        { k: "Founded",      v: "1993" },
        { k: "HQ",           v: "Port Harcourt, NG" },
        { k: "Active years", v: "30+" },
      ]}
    />

    {/* Mission eyebrow */}
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="shell">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <Eyebrow>VNL / 011 — Mission</Eyebrow>
        </div>
      </div>
    </section>

    {/* Full-width pull-quote */}
    <div className="big-quote-section">
      <div className="big-quote-mark">"</div>
      <div className="shell" style={{ position: "relative", zIndex: 1 }}>
        <div className="big-quote">
          To be your strategic partner in global supply chain management — with focus in logistics, transportation, and distribution. Our measure of success is your customers' experience, not the number of containers moved.
        </div>
        <div className="quote-attr">— Vitalaid Mission Statement</div>
      </div>
    </div>

    {/* Mission + objective cards */}
    <section className="section">
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div className="accent-card">
            <Eyebrow>The mission</Eyebrow>
            <h3 style={{ fontFamily: "Sora", fontSize: 26, fontWeight: 700, letterSpacing: "-0.03em", margin: "16px 0 14px", lineHeight: 1.1, color: "var(--text)" }}>
              Strategic partnership over transactional handling.
            </h3>
            <p style={{ color: "var(--text-soft)", lineHeight: 1.65, margin: 0 }}>
              Every engagement starts with a logistics strategy designed for your inbound and outbound flow — not just a task to be completed.
            </p>
          </div>
          <div className="accent-card blue">
            <Eyebrow>The objective</Eyebrow>
            <h3 style={{ fontFamily: "Sora", fontSize: 26, fontWeight: 700, letterSpacing: "-0.03em", margin: "16px 0 14px", lineHeight: 1.1, color: "var(--text)" }}>
              Engineered to move fast, land on time, and cost exactly what was quoted.
            </h3>
            <p style={{ color: "var(--text-soft)", lineHeight: 1.65, margin: 0 }}>
              Careful pre-shipment planning, accurate documentation, and disciplined execution — every time, for every client.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Identity */}
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 012 — Identity</Eyebrow>
          <div className="section-title">
            Capabilities powered by <span className="italic">a global logistics network.</span>
          </div>
        </div>

        <div className="kv">
          <div className="k">Incorporation</div>
          <div className="v">Vitalaid Nigeria Ltd, incorporated 1993. Three decades of continuous activity in logistics consultancy and supply chain management.</div>
        </div>
        <div className="kv">
          <div className="k">Sectors served</div>
          <div className="v">Oil &amp; gas exploration and processing, power generation, manufacturing, construction, commercial trade, and government procurement.</div>
        </div>
        <div className="kv">
          <div className="k">Network</div>
          <div className="v">An alliance of large and specialist firms covering global supply chain management — logistics, transportation, and distribution across every major origin.</div>
        </div>
        <div className="kv">
          <div className="k">Method</div>
          <div className="v">Pre-clearance technique to expedite customs release, HS-code pre-determination before arrival, and a transparent pricing structure that simplifies cost tracking.</div>
        </div>
      </div>
    </section>

    {/* Credentials */}
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 013 — Credentials</Eyebrow>
          <div className="section-title">What sets our <span className="italic">execution standard apart.</span></div>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon-box" style={{ color: "var(--accent-red)" }}><Icon name="shield" size={22} /></div>
            <h3>30 years of unbroken practice</h3>
            <p>Founded 1993, continuously active through every customs regime change in Nigeria. That continuity means a team with no learning curve on your cargo.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box" style={{ color: "var(--accent-blue)" }}><Icon name="globe" size={22} /></div>
            <h3>Global network, local execution</h3>
            <p>Professional alliance partners across sea, air, and land freight — giving your cargo an expert hand at every waypoint from origin to site.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box" style={{ color: "var(--accent-red)" }}><Icon name="zap" size={22} /></div>
            <h3>Pre-clearance expertise</h3>
            <p>Our pre-clearance techniques mean cargo is assessed and documented before it arrives. Less dwell time at port, more time on-site where it matters.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="slogan">
          Thirty years in the field &mdash;<br />
          and we still treat <span style={{ color: "var(--accent-red)" }}>every shipment</span> like the <span className="italic">first one.</span>
        </div>
        <div style={{ marginTop: 40 }}>
          <button className="btn btn-primary" onClick={() => go("services")}>
            Browse capabilities <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
          </button>
        </div>
      </div>
    </section>
  </>
);

/* ── SERVICES ──────────────────────────────────────────────── */

const Services = ({ go }) => {
  const [active, setActive] = useState(null);
  const featured = D.services[0];

  return (
    <>
      <SubHero
        idx="VNL / 020"
        label="Services"
        title={`Ten capabilities &mdash;<br/>delivered as one <span class="italic accent-red">integrated motion.</span>`}
        lead="A complete catalogue of logistics capabilities, drawn from our global network across freight, customs, documentation, and transport. Every engagement is coordinated as a single execution."
        meta={[
          { k: "Disciplines",  v: "10" },
          { k: "Coverage",     v: "Local + International" },
          { k: "Consultation", v: "Included" },
        ]}
      />

      {/* Featured service card */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="shell">
          <div className="service-hero">
            <div className="service-hero-num">01</div>
            <div>
              <Eyebrow style={{ marginBottom: 20, display: "inline-flex" }}>Featured Capability</Eyebrow>
              <h2 className="service-hero-title">{featured.title}</h2>
              <p className="service-hero-desc">{featured.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
                <span className="chip red">Pre-clearance</span>
                <span className="chip blue">Time-definite</span>
                <span className="chip blue">Import &amp; Export</span>
              </div>
            </div>
            <div className="service-hero-meta">
              <div className="service-hero-kv">
                <div className="k">Short form</div>
                <div className="v">{featured.short}</div>
              </div>
              <div className="service-hero-kv">
                <div className="k">Coverage</div>
                <div className="v">Local + International</div>
              </div>
              <div className="service-hero-kv">
                <div className="k">Consultation</div>
                <div className="v">Included</div>
              </div>
              <button className="btn btn-primary" onClick={() => go("contact")} style={{ marginTop: 8 }}>
                Request scope <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service image card grid */}
      <section className="section">
        <div className="shell">
          <div className="service-img-grid">
            {D.services.map((s, i) => (
              <div
                key={s.n}
                className="service-img-card"
                style={{ backgroundImage: `url('https://images.unsplash.com/${SVC_IMAGES[i]}?w=700&q=75&auto=format&fit=crop')` }}
              >
                <div className="sic-num">{s.n}</div>
                <div className="sic-icon"><Icon name={s.icon} size={20} /></div>
                <div className="sic-title">{s.title}</div>
                <div className="sic-short">{s.short}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="shell">
          <div className="section-head">
            <Eyebrow>VNL / 022 — Differentiators</Eyebrow>
            <div className="section-title">What makes our <span className="italic">approach different.</span></div>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon-box"><Icon name="scale" size={22} /></div>
              <h3>Transparent, predictable pricing</h3>
              <p>A clear, simplified cost structure that makes tracking and reconciling logistics spend straightforward — no surprise line items.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box" style={{ color: "var(--accent-blue)" }}><Icon name="waves" size={22} /></div>
              <h3>Tailor-made for your operation</h3>
              <p>Specialised equipment, urgent lifts, and emergency movement capability — structured to meet the pace your customers demand.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Icon name="grad" size={22} /></div>
              <h3>Expert consultation, always</h3>
              <p>30 years of supply chain experience available for every client decision — by call or site visit, at every stage of an engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="slogan">
            One call. One <span className="italic">partner.</span><br />
            <span style={{ color: "var(--accent-red)" }}>Ten</span> ways to <span style={{ color: "var(--accent-blue)" }}>move forward.</span>
          </div>
          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={() => go("contact")}>
              Request a scope <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
            </button>
            <button className="btn btn-ghost" onClick={() => go("companies")}>See who trusts us</button>
          </div>
        </div>
      </section>
    </>
  );
};

/* ── COMPANIES ─────────────────────────────────────────────── */

const Companies = ({ go }) => (
  <>
    <SubHero
      idx="VNL / 030"
      label="Companies worked with"
      title={`Selected by names that <span class="italic accent-blue">move oil, gas, and trade.</span>`}
      lead="Over three decades, Vitalaid has acted as logistics, freight, and documentation partner to operators across the Nigerian oil & gas free zones, marine services, and industrial trade."
      meta={[
        { k: "Client organisations", v: D.companies.length.toString() },
        { k: "Verified brands",      v: "2" },
      ]}
    />

    {/* Client marquee */}
    <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="shell" style={{ paddingTop: 24, paddingBottom: 8 }}>
        <Eyebrow>VNL / 031 — Full Client Roster</Eyebrow>
        <div className="section-title" style={{ marginTop: 10, marginBottom: 0, fontSize: "clamp(22px, 2.6vw, 34px)" }}>
          Nine partners across <span className="italic">oil, gas, marine, and trade.</span>
        </div>
      </div>
      <ClientMarquee />
    </section>

    {/* Featured companies */}
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 032 — Verified</Eyebrow>
          <div className="section-title">Verified brand <span className="italic">partnerships.</span></div>
        </div>
        <div className="company-grid">
          {D.companies.filter(c => c.featured).map((c, i) => (
            <div className="company-card featured" key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span className="index">{String(i + 1).padStart(2, "0")}</span>
                <span className="tag">Verified</span>
              </div>
              <div>
                <div className="name" style={{ fontSize: 20 }}>{c.name}</div>
                <div className="meta" style={{ marginTop: 10 }}>{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* All companies */}
    <section className="section" style={{ background: "var(--surface)", paddingTop: 0 }}>
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 033 — All records</Eyebrow>
        </div>
        <div className="company-grid">
          {D.companies.filter(c => !c.featured).map((c, i) => (
            <div className="company-card" key={i}>
              <span className="index">{String(i + 1).padStart(2, "0")} / {String(D.companies.filter(c => !c.featured).length).padStart(2, "0")}</span>
              <div>
                <div className="name">{c.name}</div>
                <div className="meta" style={{ marginTop: 8 }}>{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="slogan">
          A reputation built <span className="italic">one shipment</span> at a time.
        </div>
        <div style={{ marginTop: 40 }}>
          <button className="btn btn-primary" onClick={() => go("contact")}>
            Join the roster <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
          </button>
        </div>
      </div>
    </section>
  </>
);

/* ── LEADERSHIP ────────────────────────────────────────────── */

const Leadership = ({ go }) => (
  <>
    <SubHero
      idx="VNL / 040"
      label="Leadership"
      title={`Expertise built across <span class="italic accent-red">four decades</span> in the field.`}
      lead="Sir Joshua I. Ahuama, KSC has led Vitalaid Nigeria Limited since 2005, building on a career in freight forwarding, customs brokerage, and supply chain management that began in 1982."
      meta={[
        { k: "Experience", v: "40+ yrs" },
        { k: "Credentials", v: "FNIS · FIEOM · CITLS" },
      ]}
    />

    {/* MD spotlight */}
    <section className="section">
      <div className="shell">
        <div className="lead-grid">
          <div className="portrait-block">
            <div className="corner">VNL · MD</div>
            <div className="placeholder">[ Headshot · Sir Joshua I. Ahuama, KSC ]</div>
          </div>
          <div>
            <Eyebrow>Managing Director</Eyebrow>
            <h2 style={{ fontFamily: "Sora", fontSize: "clamp(32px, 3.8vw, 48px)", fontWeight: 700, letterSpacing: "-0.035em", margin: "18px 0 12px", lineHeight: 1.02, color: "var(--text)" }}>
              Sir Joshua I. <span style={{ fontFamily: "Cormorant Garant", fontStyle: "italic", fontWeight: 400 }}>Ahuama,</span> KSC
            </h2>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              <span className="chip red">40+ yrs</span>
              <span className="chip blue">M.Sc · MBA</span>
              <span className="chip red">FNIS · FIEOM</span>
              <span className="chip blue">CITLS · RFF</span>
            </div>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--text-soft)", maxWidth: 540 }}>
              Over 40 years of continuous practice in freight forwarding, customs brokerage,
              global supply chain management, and free-trade-zone consultancy — backed by
              graduate degrees in transport management technology, project management, and
              ongoing doctoral research in maritime management technology. Currently serving
              as South Eastern Zone Coordinator of the Association of Nigerian Licensed
              Customs Agents (ANLCA).
            </p>
            <div style={{ marginTop: 28, borderTop: "1px solid var(--line)" }}>
              {[
                ["Education",    "M.Sc Transport Mgt. Technology · MBA Project Mgt. Technology, FUTO · B.Sc Accounting, UNIPORT · PhD Maritime Mgt. Technology (in progress, FUTO)"],
                ["Memberships",  "FNIS · FIEOM · CMLT · Associate Member ITA · Member PMI USA · CITLS · RFF (CRFFN)"],
                ["ANLCA",        "South Eastern Zone Coordinator (Sept 2023–present) · Oil &amp; Gas Free Zone Chapter Chairman (2008–2014)"],
                ["Publications", "2 peer-reviewed papers — Journal of Science &amp; Technology Research · Journal of Business Administration and Management (2010)"],
                ["Teaching",     "12+ years — OAU/Multimix, NITT Zaria/Multimix, NOUN/Multimix (CITLS, Freight Forwarding, Supply Chain Management)"],
              ].map(([k, v]) => (
                <div className="kv" key={k}>
                  <div className="k">{k}</div>
                  <div className="v" dangerouslySetInnerHTML={{ __html: v }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <div className="slogan">
          Four decades of field experience —<br />
          in every port, <span style={{ color: "var(--accent-red)" }}>at every border.</span>
        </div>
        <div style={{ marginTop: 40 }}>
          <button className="btn btn-primary" onClick={() => go("contact")}>
            Talk to the MD <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
          </button>
        </div>
      </div>
    </section>
  </>
);

/* ── CONTACT ───────────────────────────────────────────────── */

const Contact = ({ go }) => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "Freight Forwarding", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim())  err.name = "Required";
    if (!form.email.trim()) err.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Invalid email";
    if (!form.message.trim()) err.message = "Required";
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };

  return (
    <>
      <SubHero
        idx="VNL / 050"
        label="Contact"
        title={`Pick up the phone. <br/>We <span class="italic accent-red">answer.</span>`}
        lead="For freight movement, documentation, temporary importation, or transport coordination — reach Vitalaid directly. The lines below are operated by the senior team."
        meta={[{ k: "Base", v: "Port Harcourt" }, { k: "Response", v: "Within 24h" }]}
      />

      {/* Contact info strip */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="shell">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {[
              { icon: "phone", label: "Telephone", values: D.contact.phones },
              { icon: "mail",  label: "Email",     values: D.contact.emails },
              { icon: "pin",   label: "Office",    values: [D.contact.address] },
              { icon: "globe", label: "Web",       values: [D.contact.website] },
            ].map((item, i) => (
              <div key={i} style={{ padding: "24px 20px", borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <div style={{ color: "var(--accent-red)", flexShrink: 0 }}><Icon name={item.icon} size={15} /></div>
                  <div className="mono" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--mute)" }}>{item.label}</div>
                </div>
                {item.values.map((v, vi) => (
                  <div key={vi} style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, whiteSpace: "pre-line" }}>{v}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + direct contact */}
      <section className="section">
        <div className="shell">
          <div className="contact-grid">
            <div>
              <Eyebrow>Direct lines</Eyebrow>
              <h3 style={{ fontFamily: "Sora", fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", margin: "16px 0 28px", lineHeight: 1.05, color: "var(--text)" }}>
                Reach the team that ships <span style={{ fontFamily: "Cormorant Garant", fontStyle: "italic", fontWeight: 400 }}>the cargo.</span>
              </h3>
              <div className="contact-card">
                <div className="contact-row">
                  <div className="icn"><Icon name="phone" size={18} /></div>
                  <div>
                    <div className="label">Telephone</div>
                    {D.contact.phones.map((p, i) => <div className="val" key={i}>{p}</div>)}
                  </div>
                </div>
                <div className="contact-row">
                  <div className="icn"><Icon name="mail" size={18} /></div>
                  <div>
                    <div className="label">Email</div>
                    {D.contact.emails.map((e, i) => <div className="val" key={i}>{e}</div>)}
                  </div>
                </div>
                <div className="contact-row">
                  <div className="icn"><Icon name="pin" size={18} /></div>
                  <div>
                    <div className="label">Office</div>
                    <div className="val" style={{ whiteSpace: "pre-line" }}>{D.contact.address}</div>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="icn"><Icon name="globe" size={18} /></div>
                  <div>
                    <div className="label">Web</div>
                    <div className="val">{D.contact.website}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Eyebrow>Brief us</Eyebrow>
              <h3 style={{ fontFamily: "Sora", fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", margin: "16px 0 28px", lineHeight: 1.05, color: "var(--text)" }}>
                Tell us about the <span style={{ fontFamily: "Cormorant Garant", fontStyle: "italic", fontWeight: 400 }}>shipment.</span>
              </h3>
              {sent ? (
                <div className="accent-card" style={{ padding: "48px 40px" }}>
                  <Eyebrow>Received</Eyebrow>
                  <h4 style={{ fontFamily: "Sora", fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em", margin: "16px 0 12px", lineHeight: 1.05, color: "var(--text)" }}>
                    Thanks, {form.name.split(" ")[0]}.
                  </h4>
                  <p style={{ color: "var(--text-soft)", lineHeight: 1.65 }}>
                    The Vitalaid team has the brief. You'll hear from us within 24 hours on <strong>{form.email}</strong>.
                  </p>
                  <button className="btn btn-ghost" style={{ marginTop: 20 }} onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", service: "Freight Forwarding", message: "" }); }}>
                    Send another brief
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="contact-card">
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div className={"form-field" + (errors.name ? " error" : "")}>
                      <label>Your name *</label>
                      <input value={form.name} onChange={change("name")} placeholder="Full name" />
                      {errors.name && <div className="form-error">{errors.name}</div>}
                    </div>
                    <div className="form-field">
                      <label>Company</label>
                      <input value={form.company} onChange={change("company")} placeholder="Organisation" />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div className={"form-field" + (errors.email ? " error" : "")}>
                      <label>Email *</label>
                      <input value={form.email} onChange={change("email")} placeholder="you@company.com" />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>
                    <div className="form-field">
                      <label>Phone</label>
                      <input value={form.phone} onChange={change("phone")} placeholder="+234 …" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label>Service of interest</label>
                    <select value={form.service} onChange={change("service")}>
                      {D.services.map((s) => <option key={s.n}>{s.title}</option>)}
                      <option>Multiple / Not sure</option>
                    </select>
                  </div>
                  <div className={"form-field" + (errors.message ? " error" : "")}>
                    <label>The brief *</label>
                    <textarea value={form.message} onChange={change("message")} rows="4" placeholder="What are you moving, when, and from where?" />
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>
                  <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
                    Send brief to Vitalaid <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

window.VNL_PAGES = { Home, About, Services, Companies, Leadership, Contact };
