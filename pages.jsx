// pages.jsx — all page views for VITALAID

const { useState, useEffect, useMemo, useRef } = React;
const D = window.VNL_DATA;

/* ── Client badge data ─────────────────────────────────── */
const CLIENTS = [
  { mono: "TE", name: "TotalEnergies EP Nigeria",   sub: "Trans-Amadi · Port Harcourt", color: "#C41533" },
  { mono: "TG", name: "Tenaris Global Services",    sub: "Onne Oil & Gas Free Zone",    color: "#1B3FD8" },
  { mono: "DM", name: "DMS Nigeria Ltd",            sub: "OGFZA Consultant · Onne",     color: "#0D9488" },
  { mono: "AI", name: "Alphameric International",   sub: "Oil & Gas Free Zone, Onne",   color: "#7C3AED" },
  { mono: "AV", name: "AVSCO Houston Int'l",        sub: "Operations · Port Harcourt",  color: "#EA580C" },
  { mono: "BO", name: "Biddy Ossa Enterprises",     sub: "Lekki Phase 1, Lagos",        color: "#CA8A04" },
  { mono: "OL", name: "Opticom Leasing Nigeria",    sub: "Logistics · Port Harcourt",   color: "#0891B2" },
  { mono: "WL", name: "William Lloyds Technical",   sub: "Port Harcourt",               color: "#C41533" },
  { mono: "WA", name: "West Atlantic Shipyard",     sub: "OGFZ · Onne",                 color: "#1B3FD8" },
];

/* ── ClientMarquee ─────────────────────────────────────── */
const ClientMarquee = () => {
  const row1 = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  const row2 = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <div className="client-marquee-wrap">
      <div className="client-row">
        <div className="client-track fwd">
          {row1.map((c, i) => (
            <div className="client-badge" key={i}>
              <div className="client-badge-mono" style={{ background: c.color + "22", color: c.color, borderColor: c.color + "44" }}>
                {c.mono}
              </div>
              <div>
                <div className="client-badge-name">{c.name}</div>
                <div className="client-badge-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="client-row">
        <div className="client-track rev">
          {row2.map((c, i) => (
            <div className="client-badge" key={i}>
              <div className="client-badge-mono" style={{ background: c.color + "22", color: c.color, borderColor: c.color + "44" }}>
                {c.mono}
              </div>
              <div>
                <div className="client-badge-name">{c.name}</div>
                <div className="client-badge-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Shared ──────────────────────────────────────────────── */

const Eyebrow = ({ children, style }) => <span className="eyebrow" style={style}>{children}</span>;

const SubHero = ({ idx, label, title, lead, meta }) => (
  <section className="sub-hero" style={{ position: "relative", overflow: "hidden" }}>
    <div className="sub-hero-orb" />
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
    <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />
      <div className="shell" style={{ position: "relative", zIndex: 1 }}>
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
              strategic partner behind freight, customs, and supply chain
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
          <div className="hero-visual-grid" />
          <div className="hero-visual-content">
            <div className="hv-cell">
              <div className="num">01 / SHIP</div>
              <div>
                <div className="big" style={{ color: "var(--accent-red)" }}>FTL</div>
                <div className="lbl">Full-truck and heavy-lift haulage with escorted security routing.</div>
              </div>
            </div>
            <div className="hv-cell">
              <div className="num">02 / CLEAR</div>
              <div>
                <div className="big" style={{ color: "var(--accent-blue)" }}>PAAR</div>
                <div className="lbl">Form M opening and Pre-Arrival Assessment Report on time.</div>
              </div>
            </div>
            <div className="hv-cell">
              <div className="num">03 / DEFER</div>
              <div>
                <div className="big" style={{ color: "var(--accent-red)" }}>BOND</div>
                <div className="lbl">Customs bonds that defer duty and unlock temporary importation.</div>
              </div>
            </div>
            <div className="hv-cell">
              <div className="num">04 / ADVISE</div>
              <div>
                <div className="big" style={{ color: "var(--accent-blue)" }}>HS·CODE</div>
                <div className="lbl">Tariff data bank that predetermines duty before arrival.</div>
              </div>
            </div>
          </div>
          <div className="hero-mark">
            <VLogoMark size={26} />
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-soft)" }}>Vitalaid · since 1993</div>
          </div>
        </div>
      </div>
    </section>

    {/* Client roster marquee */}
    <section style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "20px 0" }}>
      <div className="shell" style={{ marginBottom: 16 }}>
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
              <p style={{ color: "rgba(240,237,230,.68)" }}>Pre-clearance techniques, husbanding, port-of-destination handling, and inland haulage as one coordinated motion.</p>
            </div>
            <div className="feature-card" style={{ background: "rgba(6,11,24,.72)", backdropFilter: "blur(20px)", border: "1px solid rgba(240,237,230,.1)" }}>
              <div className="icon-box" style={{ background: "rgba(240,237,230,.08)", borderColor: "rgba(240,237,230,.15)", color: "var(--accent-blue)" }}><Icon name="file" size={22} /></div>
              <h3 style={{ color: "var(--text)" }}>Documentation discipline</h3>
              <p style={{ color: "rgba(240,237,230,.68)" }}>Form M opening, PAAR issuance, IDEC qualification, and HS-code review handled before they become bottlenecks.</p>
            </div>
            <div className="feature-card" style={{ background: "rgba(6,11,24,.72)", backdropFilter: "blur(20px)", border: "1px solid rgba(240,237,230,.1)" }}>
              <div className="icon-box" style={{ background: "rgba(240,237,230,.08)", borderColor: "rgba(240,237,230,.15)", color: "var(--accent-red)" }}><Icon name="badge" size={22} /></div>
              <h3 style={{ color: "var(--text)" }}>Working capital backing</h3>
              <p style={{ color: "rgba(240,237,230,.68)" }}>A capital base above $500K that allows us to settle third-party bills on your behalf when delays threaten delivery.</p>
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
          {D.process.map((p, i) => (
            <div className="process-step" key={p.n}>
              <div className="step-num">{p.n}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
              {i < D.process.length - 1 && <div className="process-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service preview */}
    <section className="section">
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

    {/* CTA image section */}
    <section className="section with-image">
      <div className="image-section img-port">
        <div className="shell" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <Eyebrow style={{ color: "rgba(240,237,230,.5)" }}>VNL / 005 — Ready to execute</Eyebrow>
          <div className="slogan" style={{ marginTop: 24, maxWidth: 720 }}>
            Your <span className="italic">strategic partner</span> in{" "}
            <span style={{ color: "var(--accent-red)" }}>global supply chain</span>{" "}
            &mdash; logistics, transportation, and{" "}
            <span style={{ color: "var(--accent-blue)" }}>distribution.</span>
          </div>
          <div style={{ marginTop: 48, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={() => go("contact")}>
              Start a conversation <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
            </button>
            <button className="btn btn-ghost" onClick={() => go("about")} style={{ borderColor: "rgba(240,237,230,.28)", color: "var(--text)" }}>
              About Vitalaid
            </button>
          </div>
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
      lead="Vitalaid Nigeria Ltd was incorporated in 1993 and has spent three decades inside the consultancy, materials management, supply chain management, and logistics space — serving oil & gas, manufacturing, construction, commercial, and government clients."
      meta={[
        { k: "Founded",        v: "1993" },
        { k: "Headquarters",   v: "Port Harcourt, NG" },
        { k: "Working Capital",v: "$500K+" },
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
          To be your strategic partner in global supply chain management — with focus in logistics, transportation, and distribution. Our growth is measured by how well we work with you to surpass your customers' expectations.
        </div>
        <div className="quote-attr">— Vitalaid Mission Statement, 1993</div>
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
              We exist to surpass your customers' expectations through careful planning for inbound and outbound materials &mdash; not just to perform a specific task.
            </p>
          </div>
          <div className="accent-card blue">
            <Eyebrow>The objective</Eyebrow>
            <h3 style={{ fontFamily: "Sora", fontSize: 26, fontWeight: 700, letterSpacing: "-0.03em", margin: "16px 0 14px", lineHeight: 1.1, color: "var(--text)" }}>
              Solve logistics problems in minimum time and cost.
            </h3>
            <p style={{ color: "var(--text-soft)", lineHeight: 1.65, margin: 0 }}>
              Every engagement starts with a partnership strategy &mdash; designed for your inbound and outbound flow before a single container is booked.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Identity & credentials */}
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 012 — Identity</Eyebrow>
          <div className="section-title">
            Capabilities sit on top of <span className="italic">a vast corporate network.</span>
          </div>
        </div>

        <div className="kv">
          <div className="k">Incorporation</div>
          <div className="v">
            Vitalaid Nigeria Ltd, incorporated 1993. Three decades of unbroken activity in logistics consultancy.
            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="chip red">Est. 1993</span>
              <span className="chip blue">30+ Years Active</span>
            </div>
          </div>
        </div>
        <div className="kv">
          <div className="k">Sectors served</div>
          <div className="v">
            Oil &amp; gas exploration and processing, power generation, manufacturing, construction, commercial trade, and government.
            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="chip red">Oil &amp; Gas</span>
              <span className="chip blue">Manufacturing</span>
              <span className="chip blue">Government</span>
              <span className="chip red">Power</span>
            </div>
          </div>
        </div>
        <div className="kv">
          <div className="k">Working capital</div>
          <div className="v">A capital base exceeding $500,000 USD &mdash; used to clear third-party bills when timing matters more than terms.</div>
        </div>
        <div className="kv">
          <div className="k">Network</div>
          <div className="v">Alliance of professional firms (large and specialist) covering global supply chain management across logistics, transportation, and distribution.</div>
        </div>
        <div className="kv">
          <div className="k">Method</div>
          <div className="v">Free consultancy on call, pre-clearance technique to expedite customs release, and a flexible tariff that saves time in tracking and bill reconciliation.</div>
        </div>
      </div>
    </section>

    {/* Credentials grid */}
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
            <p>Founded 1993 and continuously active — no gaps in operation. That continuity means a seasoned team that has seen every customs regime change in Nigeria.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box" style={{ color: "var(--accent-blue)" }}><Icon name="star" size={22} /></div>
            <h3>$500K+ working capital</h3>
            <p>When third-party invoices threaten delivery timelines, we settle them on your behalf. A financial position that turns bottlenecks into non-events.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box" style={{ color: "var(--accent-red)" }}><Icon name="zap" size={22} /></div>
            <h3>Free consultancy — always</h3>
            <p>Access to 30 years of supply chain field experience at no charge. Call or visit. We resolve your logistics challenges before they cost money.</p>
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
        lead="A virtually unlimited list of capabilities, drawn from our vast corporate global network across logistics, transportation, and distribution. Below is the catalogue."
        meta={[
          { k: "Disciplines",  v: "10" },
          { k: "Coverage",     v: "Local + International" },
          { k: "Charge",       v: "Free consultancy" },
        ]}
      />

      {/* Featured service card */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="shell">
          <div className="service-hero">
            <div className="service-hero-num">01</div>
            {/* Left column */}
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
            {/* Right column */}
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
                <div className="k">Consultancy</div>
                <div className="v">Free on request</div>
              </div>
              <button className="btn btn-primary" onClick={() => go("contact")} style={{ marginTop: 8 }}>
                Request scope <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full service list */}
      <section className="section">
        <div className="shell">
          <div className="services-list">
            {D.services.map((s, i) => (
              <div
                className="service-row"
                key={s.n}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="service-num">— {s.n}</div>
                <div className="service-name">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="arrow"><Icon name={s.icon} size={16} /></div>
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
            <div className="section-title">What makes the <span className="italic">tariff different.</span></div>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon-box"><Icon name="scale" size={22} /></div>
              <h3>Flexible &amp; simplified tariff</h3>
              <p>Saves time tracking and reconciling bills. Third-party bills paid by us on request when delays would otherwise occur.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box" style={{ color: "var(--accent-blue)" }}><Icon name="waves" size={22} /></div>
              <h3>Tailor-made services</h3>
              <p>Special demand handling — specialised equipment, extra-urgent delivery, emergency lifts. We move at the speed your customer demands.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Icon name="grad" size={22} /></div>
              <h3>Free consultancy</h3>
              <p>Open access to our 30 years of field experience to facilitate your supply chain and logistics decisions — by call or visit.</p>
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
      lead="Over three decades, Vitalaid has acted as logistics, freight, and documentation partner to a roster of operators across the Nigerian oil & gas free zones, marine services, and industrial trade."
      meta={[
        { k: "Active relationships", v: D.companies.length.toString() },
        { k: "Verified brands",      v: "2" },
      ]}
    />

    {/* Client marquee */}
    <section style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "32px 0 24px" }}>
      <div className="shell" style={{ marginBottom: 20 }}>
        <Eyebrow>VNL / 031 — Full Client Roster</Eyebrow>
        <div className="section-title" style={{ marginTop: 12, marginBottom: 0 }}>
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
                <div className="name" style={{ fontSize: 22 }}>{c.name}</div>
                <div className="meta" style={{ marginTop: 12 }}>{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* All companies grid */}
    <section className="section" style={{ background: "var(--surface)", paddingTop: 0 }}>
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 033 — Additional records</Eyebrow>
        </div>
        <div className="company-grid">
          {D.companies.filter(c => !c.featured).map((c, i) => (
            <div className="company-card" key={i}>
              <span className="index">{String(i + 1).padStart(2, "0")} / {String(D.companies.filter(c => !c.featured).length).padStart(2, "0")}</span>
              <div>
                <div className="name">{c.name}</div>
                <div className="meta" style={{ marginTop: 10 }}>{c.meta}</div>
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

const Leadership = ({ go }) => {
  const getChips = (qual, exp) => {
    const chips = [];
    if (exp && exp.includes("25+")) chips.push({ label: "Senior · 25+ yrs", color: "red" });
    else if (exp) chips.push({ label: exp, color: "blue" });
    if (qual.includes("M.Sc") || qual.includes("MBA")) chips.push({ label: "Postgrad", color: "blue" });
    if (qual.includes("FNIS") || qual.includes("CMCILT") || qual.includes("CITLS") || qual.includes("RFF")) chips.push({ label: "Certified", color: "red" });
    if (qual.includes("Dip.")) chips.push({ label: "Diploma", color: "blue" });
    if (qual.includes("PGD")) chips.push({ label: "PGD", color: "blue" });
    return chips.slice(0, 3);
  };

  return (
    <>
      <SubHero
        idx="VNL / 040"
        label="Leadership"
        title={`Operators who have spent <span class="italic accent-red">a career</span> at the dockside.`}
        lead="The key staff positions of Vitalaid are occupied by dedicated, result-oriented, experienced professionals with deep tenure across oil & gas logistics and supply chain consultancy."
        meta={[
          { k: "Senior team", v: "6" },
          { k: "Avg. tenure", v: "20+ yrs" },
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
                <span className="chip red">MD · 25+ yrs</span>
                <span className="chip blue">M.Sc · MBA</span>
                <span className="chip red">FNIS · CMCILT</span>
                <span className="chip blue">CITLS · RFF</span>
              </div>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--text-soft)", maxWidth: 540 }}>
                Over 25 years of management experience across freight forwarding,
                customs brokerage, global supply chain management, and free-trade-zone
                consultancy — backed by academic depth in maritime management
                technology and project management.
              </p>
              <div style={{ marginTop: 28, borderTop: "1px solid var(--line)" }}>
                {[
                  ["Education",    "M.Sc Transport Mgt. Technology · MBA Project Mgt., FUTO · B.Sc Accounting, UNIPORT"],
                  ["Memberships",  "FNIS · CMCILT · RFF · CITLS"],
                  ["Service",      "Former ANLCA Oil &amp; Gas Free Zone Chapter Chairman; active industry trainer"],
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

      {/* Senior team */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="shell">
          <div className="section-head">
            <Eyebrow>VNL / 042 — Senior team</Eyebrow>
            <div className="section-title">A roster built for <span className="italic">long-cycle operations.</span></div>
          </div>
          <div>
            {D.team.map((m, i) => {
              const chips = getChips(m.qual, m.exp);
              return (
                <div className="staff-row" key={i}>
                  <div className="staff-num">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="staff-name">{m.name}</div>
                    <div className="mono" style={{ fontSize: 10.5, color: "var(--mute)", textTransform: "uppercase", letterSpacing: ".14em", marginTop: 4 }}>{m.role}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                      {chips.map((chip, ci) => (
                        <span key={ci} className={"chip " + chip.color}>{chip.label}</span>
                      ))}
                    </div>
                  </div>
                  <div className="staff-role">{m.qual}</div>
                  <div className="staff-exp">{m.exp}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="slogan">
            Experience measured in <span className="italic">decades,</span><br />
            not <span style={{ color: "var(--accent-red)" }}>job titles.</span>
          </div>
          <div style={{ marginTop: 40 }}>
            <button className="btn btn-primary" onClick={() => go("contact")}>
              Talk to the team <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0 }}>
            {[
              { icon: "phone", label: "Telephone", values: D.contact.phones },
              { icon: "mail",  label: "Email",     values: D.contact.emails },
              { icon: "pin",   label: "Office",    values: [D.contact.address] },
              { icon: "globe", label: "Web",       values: [D.contact.website] },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 24px", borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ color: "var(--accent-red)", flexShrink: 0 }}><Icon name={item.icon} size={16} /></div>
                  <div className="mono" style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--mute)" }}>{item.label}</div>
                </div>
                {item.values.map((v, vi) => (
                  <div key={vi} style={{ fontSize: 14.5, color: "var(--text)", lineHeight: 1.6, whiteSpace: "pre-line" }}>{v}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + location */}
      <section className="section">
        <div className="shell">
          <div className="contact-grid">
            <div>
              <Eyebrow>Direct lines</Eyebrow>
              <h3 style={{ fontFamily: "Sora", fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", margin: "16px 0 28px", lineHeight: 1.05, color: "var(--text)" }}>
                Reach the team that ships <span style={{ fontFamily: "Cormorant Garant", fontStyle: "italic", fontWeight: 400 }}>the cargo.</span>
              </h3>

              {/* Location card */}
              <div className="contact-card" style={{ marginBottom: 24 }}>
                <div className="contact-row">
                  <div className="icn"><Icon name="pin" size={18} /></div>
                  <div>
                    <div className="label">Port Harcourt Headquarters</div>
                    <div className="val" style={{ whiteSpace: "pre-line" }}>{D.contact.address}</div>
                    <div className="val" style={{ marginTop: 6 }}>{D.contact.website}</div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div style={{
                background: "var(--surface-2)",
                border: "1px solid var(--line)",
                borderRadius: 12,
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 180,
                gap: 12,
                color: "var(--text-soft)",
                textAlign: "center",
              }}>
                <div style={{ color: "var(--accent-red)", opacity: .6 }}><Icon name="pin" size={32} /></div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase" }}>Port Harcourt, Rivers State, NG</div>
                <div style={{ fontSize: 13, color: "var(--mute)" }}>No. 4 Erabor Close, Off Ilom Street</div>
              </div>

              <div className="contact-card" style={{ marginTop: 24 }}>
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
