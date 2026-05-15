// data.js — content for the VITALAID redesign

window.VNL_DATA = {
  brand: {
    name: "Vitalaid",
    full: "Vitalaid Nigeria Limited",
    tagline: "Strategic partner in global supply chain management.",
    founded: 1993,
    location: "Port Harcourt, Rivers State",
  },

  facts: [
    { value: "30+", label: "Years in operation", suffix: "yrs", num: 30 },
    { value: "$500K+", label: "Working capital base" },
    { value: "10", label: "Service capabilities" },
    { value: "25+", label: "Yrs avg. leadership tenure" },
  ],

  services: [
    {
      n: "01",
      title: "Freight Forwarding",
      short: "Time-definite import & export coordination.",
      desc: "Pre-clearance planning, customs management, and disciplined schedule control across import and export transactions.",
      icon: "ship",
    },
    {
      n: "02",
      title: "Shipping & Airfreight",
      short: "Ex-factory to final destination handling.",
      desc: "Chartering, husbanding, and port-of-destination handling backed by a global network coverage.",
      icon: "plane",
    },
    {
      n: "03",
      title: "Documentation",
      short: "Form M, PAAR, and clearance review.",
      desc: "Order, invoice, and declaration audit to prevent costly clearance delays and ensure compliant import processing.",
      icon: "file",
    },
    {
      n: "04",
      title: "IDEC Advisory",
      short: "Import Duty Exemption Certificate.",
      desc: "Approval support for qualifying gas, power, exploration, and processing projects per Ministry of Finance requirements.",
      icon: "badge",
    },
    {
      n: "05",
      title: "Customs Bond",
      short: "Deferred-duty bond structuring.",
      desc: "Bond preparation that lets clients take delivery while deferring duty payment, including temporary importation cases.",
      icon: "receipt",
    },
    {
      n: "06",
      title: "Temporary Importation",
      short: "TI approval, tracking & extensions.",
      desc: "End-to-end handling of TI approvals, duration tracking, and conversion or re-export at the end of useful term.",
      icon: "anchor",
    },
    {
      n: "07",
      title: "Transportation",
      short: "LTL, FTL & heavy-lift haulage.",
      desc: "Less-than-truck-load, full-load, articulated heavy-lift, and police-escorted security movement across Nigeria.",
      icon: "truck",
    },
    {
      n: "08",
      title: "HS Code & Tariff Analysis",
      short: "Material & tariff data bank.",
      desc: "HS code and alternate-code analysis with applicable duty rates to support budgeting and Form M preparation.",
      icon: "scale",
    },
    {
      n: "09",
      title: "Free Consultancy",
      short: "On-call advisory at no charge.",
      desc: "Open access to our experience for resolving practical supply chain bottlenecks — by call or site visit.",
      icon: "waves",
    },
    {
      n: "10",
      title: "In-House Training",
      short: "Strategic, tactical & operational.",
      desc: "Logistics and supply chain training delivered on-site to save travel cost while keeping the team agile.",
      icon: "grad",
    },
  ],

  companies: [
    { name: "TotalEnergies EP Nigeria Limited", meta: "Trans-Amadi Industrial Layout, Port Harcourt", featured: true },
    { name: "Tenaris Global Services Nigeria Ltd", meta: "Onne Oil & Gas Free Zone", featured: true },
    { name: "DMS Nigeria Ltd", meta: "Managing consultants — OGFZA, Onne" },
    { name: "Alphameric International Co. Ltd", meta: "Oil & Gas Free Zone, Onne" },
    { name: "AVSCO Houston Int'l Operations Nigeria Ltd", meta: "Port Harcourt operations" },
    { name: "Biddy Ossa Enterprises Ltd", meta: "Lekki Phase 1, Lagos" },
    { name: "Opticom Leasing Nigeria Ltd", meta: "Port Harcourt logistics support" },
    { name: "William Lloyds Technical Company Ltd", meta: "Port Harcourt" },
    { name: "West Atlantic Shipyard Ltd", meta: "Oil & Gas Free Zone, Onne" },
  ],

  team: [
    { name: "Chidi D. Nzerem", role: "Chairman", qual: "B.Sc Sociology/Anthropology, UNN", exp: "25+ yrs" },
    { name: "Sir Joshua I. Ahuama, KSC", role: "Managing Director", qual: "M.Sc Transport Mgt. Tech., MBA Project Mgt., FNIS, CMCILT", exp: "25+ yrs" },
    { name: "Thankgod K. Ihebereme", role: "Operations Manager", qual: "B.Sc Sociology, Dip. Transport & Shipping, UNIPORT", exp: "25+ yrs" },
    { name: "Raphael O. E. Ogbuji", role: "Finance / Admin Manager", qual: "MBA Project Mgt. FUTO, B.Sc Accounting, UNIPORT", exp: "25+ yrs" },
    { name: "Bonny Nzerem", role: "Procurement & Admin", qual: "HND Business Admin, PGD Logistics, OAU", exp: "10 yrs" },
    { name: "Rose N. Oji", role: "Secretary", qual: "B.Sc Psychology, EBSU", exp: "10 yrs" },
  ],

  contact: {
    phones: ["+234 803 342 0474", "+234 902 291 2739"],
    emails: ["joshua@vitalaid.com.ng", "vitalaidnigltd@yahoo.com"],
    address: "No. 4 Erabor Close, Off Ilom Street\nPort Harcourt, Rivers State",
    website: "www.vitalaid.com.ng",
  },

  process: [
    { n: "01", title: "Scope", body: "We review your order, pro-forma invoice, and destination requirements to map the cleanest path." },
    { n: "02", title: "Document", body: "Form M, PAAR, IDEC and bond paperwork prepared correctly before cargo lifts off." },
    { n: "03", title: "Move", body: "Shipping, airfreight, chartering, and inland haulage executed against a time-definite schedule." },
    { n: "04", title: "Deliver", body: "Customs cleared, escorted where needed, and signed-off at site with full visibility." },
  ],

  faq: [
    {
      id: "services",
      label: "Our Services",
      answer: "We offer 10 core capabilities covering the full supply chain — from freight and airfreight to customs clearance, IDEC advisory, temporary importation, and in-house training.",
      children: [
        { id: "freight",    label: "Freight Forwarding",      answer: "Time-definite import and export coordination using pre-clearance techniques to secure expedited customs release.", action: { type: "navigate", page: "services" } },
        { id: "shipping",   label: "Shipping & Airfreight",   answer: "Ex-factory to final destination handling — chartering, husbanding, and port-of-destination support via our global network.", action: { type: "navigate", page: "services" } },
        { id: "docs",       label: "Documentation & Customs", answer: "Form M, PAAR, IDEC, and bond preparation. We catch errors before they cause costly clearance delays.", action: { type: "navigate", page: "services" } },
        { id: "transport",  label: "Transportation",          answer: "LTL, FTL, and heavy-lift haulage with police escort capability across Nigeria.", action: { type: "navigate", page: "services" } },
      ],
    },
    {
      id: "about",
      label: "About Vitalaid",
      answer: "Vitalaid Nigeria Limited was founded in 1993 in Port Harcourt, Rivers State. For 30+ years we have been the strategic partner behind freight, customs, and supply chain execution for oil & gas operators, manufacturers, contractors, and government agencies.",
      children: [
        { id: "clients",  label: "Our Clients",    answer: "We serve TotalEnergies, Tenaris Global Services, DMS Nigeria, and others across the oil & gas free zones and commercial sectors.", action: { type: "navigate", page: "companies" } },
        { id: "team",     label: "Our Team",       answer: "Led by Sir Joshua I. Ahuama (MD, 25+ yrs) and a senior team averaging 25 years of industry experience.", action: { type: "navigate", page: "leadership" } },
        { id: "capital",  label: "Working Capital", answer: "We maintain a working capital base in excess of $500,000, enabling us to settle third-party bills on your behalf to prevent delivery delays.", action: { type: "navigate", page: "about" } },
      ],
    },
    {
      id: "quote",
      label: "Get a Quote",
      answer: "We'll scope your requirements and put together a tailored logistics plan. Reach us directly — we respond at short notice.",
      action: { type: "navigate", page: "contact" },
    },
    {
      id: "contact",
      label: "Contact Us",
      answer: "Call us at +234 803 342 0474 or email joshua@vitalaid.com.ng. We're based at No. 4 Erabor Close, Off Ilom Street, Port Harcourt.",
      action: { type: "navigate", page: "contact" },
    },
  ],
};
