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
    { value: "10", label: "Service capabilities" },
    { value: "10+", label: "Major client organisations" },
    { value: "40+", label: "Yrs MD field experience" },
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
      title: "Expert Consultation",
      short: "On-call advisory for supply chain decisions.",
      desc: "Direct access to 30 years of field experience for resolving logistics bottlenecks, procurement decisions, and route planning — by call or site visit.",
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
    { name: "Felpet Nigeria Limited", meta: "Port Harcourt operations" },
    { name: "West Atlantic Shipyard Ltd", meta: "Oil & Gas Free Zone, Onne" },
  ],

  team: [
    {
      name: "Sir Joshua I. Ahuama, KSC",
      role: "Managing Director",
      qual: "M.Sc Transport Mgt. Technology · MBA Project Mgt. Technology, FUTO · B.Sc Accounting, UNIPORT · PhD Maritime Mgt. Technology (in progress, FUTO)",
      exp: "40+ yrs",
    },
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
      answer: "We offer 10 core capabilities covering the full supply chain — from freight forwarding and airfreight to customs clearance, IDEC advisory, temporary importation, and in-house training. Which service would you like to know more about?",
      children: [
        {
          id: "svc-freight",
          label: "Freight Forwarding",
          answer: "We coordinate time-definite import and export transactions using pre-clearance techniques. Our process: review your order and pro-forma invoice, prepare Form M and PAAR before cargo lifts, manage customs release at the port, and deliver against a fixed schedule. We operate across Apapa, Tin Can Island, Onne, PHIA, and MMIA.",
        },
        {
          id: "svc-shipping",
          label: "Shipping & Airfreight",
          answer: "From ex-factory pickup to final destination — we handle chartering, vessel husbanding, and port-of-destination support for sea freight (FCL/LCL) and airfreight. Our WCA Family of Logistics Networks membership gives us active agents in every major origin country for end-to-end visibility.",
        },
        {
          id: "svc-docs",
          label: "Documentation & Customs",
          answer: "We prepare and audit Form M, PAAR, import invoices, and declaration packages before cargo moves. Errors in HS codes, valuations, and consignee details are the three most common causes of port holds in Nigeria — our review catches them early. We also handle NAFDAC, SONCAP, and other regulatory documentation.",
        },
        {
          id: "svc-idec",
          label: "IDEC Advisory",
          answer: "Import Duty Exemption Certificate qualifies equipment imports for gas, power, exploration, and processing projects under Ministry of Finance directives. We assemble the full application — pro-forma invoices, project scope, HS code analysis — and liaise with the Ministry through to approval. Typical lead time is 4–8 weeks. We handle follow-up and extensions.",
        },
        {
          id: "svc-bond",
          label: "Customs Bond",
          answer: "A customs bond lets you take physical delivery of cargo while deferring duty payment. We structure the bond paperwork, coordinate with licensed sureties, and manage the bond lifecycle including renewals and discharge. Essential for high-value or time-sensitive shipments where delivery cannot wait for duty settlement.",
        },
        {
          id: "svc-ti",
          label: "Temporary Importation",
          answer: "TI permits equipment to enter Nigeria temporarily without full duty payment, provided it is re-exported or converted within the approved term. We handle TI approval applications, track expiry dates, and manage conversion to permanent import or re-export. Critical for oilfield equipment, drilling rigs, and project-specific machinery.",
        },
        {
          id: "svc-transport",
          label: "Transportation",
          answer: "We move cargo across Nigeria by road — LTL, FTL, articulated heavy-lift, and police-escorted security convoys for high-value cargo. We cover Port Harcourt, Lagos, Abuja, and all upstream oil and gas locations including Warri, Onne, and Bonny.",
        },
        {
          id: "svc-hs",
          label: "HS Code & Tariff Analysis",
          answer: "Correct HS code classification determines duty rates, import prohibitions, and Form M accuracy. We maintain a material and tariff data bank with applicable HS codes across the Nigerian Harmonized Tariff Schedule. We provide pre-import analysis to support accurate budgeting and prevent costly reclassification at the port.",
        },
        {
          id: "svc-consult",
          label: "Expert Consultation",
          answer: "Direct access to 40 years of field experience — by phone, email, or site visit. We advise on logistics route planning, procurement decisions, customs bottlenecks, and supply chain optimisation. Used by clients for pre-project planning and emergency troubleshooting during live operations.",
        },
        {
          id: "svc-training",
          label: "In-House Training",
          answer: "We design and deliver logistics and supply chain training on-site at your facility, eliminating travel costs. Topics include freight forwarding operations, customs procedures, IDEC and TI compliance, and import documentation. Delivered by a certified trainer with over 12 years of logistics education experience.",
        },
      ],
    },
    {
      id: "company",
      label: "About Vitalaid",
      answer: "Vitalaid Nigeria Limited was founded in 1993 in Port Harcourt, Rivers State. For over 30 years we have served oil & gas operators, contractors, manufacturers, and government agencies across Nigeria. What would you like to know?",
      children: [
        {
          id: "co-history",
          label: "Company History",
          answer: "Founded in 1993, Vitalaid has spent over 30 years as a strategic partner in global supply chain management, headquartered in Port Harcourt. We have cleared cargo at every major Nigerian port and airport, served the oil & gas free zones in Onne, and built direct relationships with ministry officials and customs authorities across the country.",
        },
        {
          id: "co-network",
          label: "Our Network",
          answer: "Vitalaid is a member of the WCA Family of Logistics Networks — one of the world's largest logistics alliances with members in over 190 countries. This gives us active agent partnerships in every major cargo origin country, enabling us to manage shipments from factory to final delivery without depending on a single carrier or forwarder.",
        },
        {
          id: "co-clients",
          label: "Our Clients",
          answer: "Our client roster includes TotalEnergies EP Nigeria (Trans-Amadi), Tenaris Global Services (OGFZ Onne), DMS Nigeria Ltd, Alphameric International, AVSCO Houston Int'l Operations, Biddy Ossa Enterprises (Lagos), Opticom Leasing Nigeria, William Lloyds Technical, Felpet Nigeria Limited, and West Atlantic Shipyard (OGFZ Onne).",
        },
        {
          id: "co-location",
          label: "Location & Contact",
          answer: "We are based at No. 4 Erabor Close, Off Ilom Street, Port Harcourt, Rivers State. Our operations span all major Nigerian ports — Apapa, Tin Can, Onne — and airports — MMIA Lagos, PHIA Port Harcourt. Call us at +234 803 342 0474 or email joshua@vitalaid.com.ng.",
        },
      ],
    },
    {
      id: "leadership",
      label: "Meet the MD",
      answer: "Sir Joshua I. Ahuama, KSC has led Vitalaid Nigeria Limited as Managing Director since 2005, building on a career in freight forwarding that began in 1982. What would you like to know about him?",
      children: [
        {
          id: "md-bio",
          label: "Career Overview",
          answer: "Sir Joshua I. Ahuama (KSC) has been in freight forwarding and logistics since 1982 — over 40 years of continuous practice. He has held senior roles at Faco International, Revic International, Dochex Services, Distinction Merchants, and Integrated Materials Management before becoming Managing Director of Vitalaid Nigeria Limited in 2005. His expertise spans freight forwarding, customs brokerage, free-trade-zone operations, and supply chain consultancy primarily for oil and gas clients.",
        },
        {
          id: "md-education",
          label: "Education & Qualifications",
          answer: "Sir Joshua holds: M.Sc in Transport Management Technology (FUTO, 2009); MBA in Project Management Technology (FUTO, 2006); B.Sc in Accounting (UNIPORT, 1996); Diploma in Transport and Shipping (UNIPORT, 1990); Executive Diploma in Freight Forwarding (NITT Zaria, 2012); FIATA Diploma in Freight Forwarding & Supply Chain Management (2015). Currently pursuing a PhD in Maritime Management Technology at FUTO.",
        },
        {
          id: "md-memberships",
          label: "Professional Memberships",
          answer: "Sir Joshua is a Fellow of the Nigerian Institute of Shipping (FNIS), Fellow of the Institute of Export Operations and Management (FIEOM), Chartered Member of the Chartered Institute of Logistics and Transport (CMLT), Associate Member of the Institute of Transport Administration, Member of the Project Management Institute (USA), Certified International Trade Logistics Specialist (CITLS), and Registered Freight Forwarder (RFF) by CRFFN.",
        },
        {
          id: "md-publications",
          label: "Research & Publications",
          answer: "Ahuama, J.I. & Omoke, V. (2010): 'Significant Supply Chain Cost Saving is a Derivative of Efficient Freight Forwarding Practice.' Journal of Science and Technology Research, 9(2), 103–111. Omoke, V. & Ahuama, J.I. (2010): 'The Dependency of Supply Chain Time Management on Efficient Freight Forwarding Practice.' Journal of Business Administration and Management, 3(5), 083–090.",
        },
        {
          id: "md-teaching",
          label: "Training & Lecturing",
          answer: "Sir Joshua has over 12 years as a trainer and part-time lecturer. He served as Port Harcourt Centre Coordinator for the PGD in Logistics and Supply Chain Management at OAU Ile-Ife/Multimix Academy and NITT Zaria/Multimix Academy. He lectures at NOUN/Multimix Academy specialising in CITLS and Freight Forwarding certification. Subject areas include International Logistics, Customs Procedures, Warehousing, and Supply Chain Management.",
        },
      ],
    },
    {
      id: "experience",
      label: "Industry Experience",
      answer: "Vitalaid's 30+ year track record spans oil & gas free zones, major port terminals, customs brokerage, and haulage across Nigeria. Our expertise is concentrated in sectors where supply chain errors carry the highest cost.",
      children: [
        {
          id: "exp-oilgas",
          label: "Oil & Gas Sector",
          answer: "The core of Vitalaid's work has been for oil and gas operators and contractors — clearing drilling equipment, process plant components, tubular goods, chemicals, and project cargo. We have worked with TotalEnergies, Tenaris, AVSCO, and West Atlantic Shipyard across Nigeria's Oil & Gas Free Zones and upstream corridors since the early 1990s.",
        },
        {
          id: "exp-freezone",
          label: "Free Zone Operations",
          answer: "Sir Joshua served as Chairman of the ANLCA Oil & Gas Free Zone Chapter (2008–2014) and currently serves as South Eastern Zone Coordinator of ANLCA (September 2023–present). Vitalaid has deep familiarity with all OGFZ and OGFZA procedures, free zone bond management, and multi-modal logistics within the Onne corridor.",
        },
        {
          id: "exp-customs",
          label: "Customs Clearance",
          answer: "We have cleared cargo at every major Nigerian entry point — Apapa, Tin Can Island, Onne, PHIA Port Harcourt, and MMIA Lagos. Our pre-clearance methodology — submitting all documentation before cargo arrival — consistently reduces port dwell time and avoids demurrage charges. We maintain direct working relationships with NCS officers at each location.",
        },
      ],
    },
    {
      id: "quote",
      label: "Get a Quote",
      answer: "We will scope your requirements and put together a tailored logistics plan. Reach us directly — we respond at short notice.",
      action: { type: "navigate", page: "contact" },
    },
    {
      id: "contact",
      label: "Contact Us",
      answer: "Call us at +234 803 342 0474 or +234 902 291 2739. Email: joshua@vitalaid.com.ng or vitalaidnigltd@yahoo.com. We are at No. 4 Erabor Close, Off Ilom Street, Port Harcourt, Rivers State.",
      action: { type: "navigate", page: "contact" },
    },
  ],
};
