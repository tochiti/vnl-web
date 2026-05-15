// pages.jsx — all page views for VITALAID

const { useState, useEffect, useMemo, useRef } = React;
const D = window.VNL_DATA;

/* ── Shared ──────────────────────────────────────────── */

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

/* ── HOME ────────────────────────────────────────────── */

const Home = ({ go }) => (
  <>
    {/* Hero */}
    <section className="hero">
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

    {/* Marquee */}
    <div className="marquee">
      <div className="marquee-track">
        {[
          "Freight Forwarding", "Shipping", "Airfreight", "Customs Bond",
          "Temporary Importation", "Heavy-Lift Haulage", "IDEC Advisory",
          "Form M", "PAAR", "HS Code Analysis", "In-House Training",
          "Free Consultancy",
          "Freight Forwarding", "Shipping", "Airfreight", "Customs Bond",
          "Temporary Importation", "Heavy-Lift Haulage", "IDEC Advisory",
          "Form M", "PAAR", "HS Code Analysis", "In-House Training",
          "Free Consultancy",
        ].map((t, i) => (
          <span key={i} className="marquee-item">{t}</span>
        ))}
      </div>
    </div>

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

    {/* Image section — practice */}
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

    {/* Companies preview */}
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 005 — Trusted by</Eyebrow>
          <div className="section-title">
            Selected partners across <span className="italic">oil, gas, marine, and trade.</span>
          </div>
        </div>
        <div className="company-grid">
          {D.companies.slice(0, 6).map((c, i) => (
            <div className={"company-card" + (c.featured ? " featured" : "")} key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span className="index">{String(i + 1).padStart(2, "0")} / {String(D.companies.length).padStart(2, "0")}</span>
                {c.featured && <span className="tag">Verified</span>}
              </div>
              <div>
                <div className="name">{c.name}</div>
                <div className="meta" style={{ marginTop: 10 }}>{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <button className="btn btn-ghost" onClick={() => go("companies")}>
            View full client roster <span className="btn-arrow"><Icon name="arrow-right" size={12} /></span>
          </button>
        </div>
      </div>
    </section>

    {/* CTA image section */}
    <section className="section with-image">
      <div className="image-section img-port">
        <div className="shell" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <Eyebrow style={{ color: "rgba(240,237,230,.5)" }}>VNL / 006 — Ready to execute</Eyebrow>
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

/* ── ABOUT ───────────────────────────────────────────── */

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

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 011 — Mission</Eyebrow>
          <div className="big-quote">
            <span className="mark">"</span>To be your strategic partner in global supply chain management — with focus in logistics, transportation, and distribution. Our growth is measured by how well we work with you to surpass your customers' expectations.<span className="mark">"</span>
          </div>
        </div>

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

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 012 — Identity</Eyebrow>
          <div className="section-title">
            Capabilities sit on top of <span className="italic">a vast corporate network.</span>
          </div>
        </div>

        <div className="kv">
          <div className="k">Incorporation</div>
          <div className="v">Vitalaid Nigeria Ltd, incorporated 1993. Three decades of unbroken activity in logistics consultancy.</div>
        </div>
        <div className="kv">
          <div className="k">Sectors served</div>
          <div className="v">Oil &amp; gas exploration and processing, power generation, manufacturing, construction, commercial trade, and government.</div>
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

/* ── SERVICES ────────────────────────────────────────── */

const Services = ({ go }) => {
  const [active, setActive] = useState(null);
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

      <section className="section">
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

/* ── COMPANIES ───────────────────────────────────────── */

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

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 031 — Featured</Eyebrow>
          <div className="section-title">Verified brand <span className="italic">partnerships.</span></div>
        </div>
        <div className="company-grid">
          {D.companies.filter(c => c.featured).map((c, i) => (
            <div className="company-card featured" key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 032 — Roster</Eyebrow>
          <div className="section-title">Additional company <span className="italic">records.</span></div>
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

/* ── LEADERSHIP ──────────────────────────────────────── */

const Leadership = ({ go }) => (
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

    <section className="section">
      <div className="shell">
        <div className="lead-grid">
          <div className="portrait-block">
            <div className="corner">VNL · MD</div>
            <div className="placeholder">[ Headshot · Sir Joshua I. Ahuama, KSC ]</div>
          </div>
          <div>
            <Eyebrow>Managing Director</Eyebrow>
            <h2 style={{ fontFamily: "Sora", fontSize: "clamp(32px, 3.8vw, 48px)", fontWeight: 700, letterSpacing: "-0.035em", margin: "18px 0 16px", lineHeight: 1.02, color: "var(--text)" }}>
              Sir Joshua I. <span style={{ fontFamily: "Cormorant Garant", fontStyle: "italic", fontWeight: 400 }}>Ahuama,</span> KSC
            </h2>
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

    <section className="section">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>VNL / 042 — Senior team</Eyebrow>
          <div className="section-title">A roster built for <span className="italic">long-cycle operations.</span></div>
        </div>
        <div>
          {D.team.map((m, i) => (
            <div className="staff-row" key={i}>
              <div className="staff-num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="staff-name">{m.name}</div>
                <div className="mono" style={{ fontSize: 10.5, color: "var(--mute)", textTransform: "uppercase", letterSpacing: ".14em", marginTop: 4 }}>{m.role}</div>
              </div>
              <div className="staff-role">{m.qual}</div>
              <div className="staff-exp">{m.exp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

/* ── CONTACT ─────────────────────────────────────────── */

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
