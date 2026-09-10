/**
 * IP-SAKTI Sahayak - Knowledge Base & Multilingual Translations
 * Realistic domain datasets for Ayurveda IPR, Regulatory, TKDL, and ABS Compliance
 */

const IPR_DATA = {
  sources: {
    "ip-india": {
      id: "ip-india",
      name: "IP India (CGPDTM)",
      authority: "Office of the Controller General of Patents, Designs & Trade Marks",
      jurisdiction: "India",
      domain: "Patents, Trademarks, Designs, GI",
      summary: "Statutory authority administering the Patents Act 1970, Trade Marks Act 1999, and Designs Act 2000 in India.",
      legalBasis: "Patents Act 1970 (notably Section 3(p) for Traditional Knowledge and Section 3(e) for Admixtures)",
      url: "https://ipindia.gov.in",
      badge: "Official Registry"
    },
    "ayush-ministry": {
      id: "ayush-ministry",
      name: "Ministry of Ayush",
      authority: "Government of India",
      jurisdiction: "India",
      domain: "Ayurveda, Yoga, Unani, Siddha, Homoeopathy Regulations",
      summary: "Governs regulatory frameworks, ASU&H drug licensing, Pharmacopoeia Commission for Indian Medicine, and AYUSH standard marks.",
      legalBasis: "Drugs and Cosmetics Act 1940 & Rules 1945 (Chapter IV-A: ASU Drugs)",
      url: "https://ayush.gov.in",
      badge: "Regulatory Body"
    },
    "tkdl": {
      id: "tkdl",
      name: "Traditional Knowledge Digital Library (TKDL)",
      authority: "Joint initiative of CSIR and Ministry of Ayush",
      jurisdiction: "India & International Patent Offices",
      domain: "Prior Art Database / Defensive Publication",
      summary: "Pioneering Indian database documenting over 4.3 lakh formulations from classical Ayurveda, Unani, and Siddha texts into 5 international languages.",
      legalBasis: "International IPC Classification & Prior Art Verification for Patent Examiners",
      url: "https://www.tkdl.res.in",
      badge: "Prior Art Archive"
    },
    "nba": {
      id: "nba",
      name: "National Biodiversity Authority (NBA)",
      authority: "Statutory Autonomous Body, Ministry of Environment, Forest & Climate Change",
      jurisdiction: "India",
      domain: "Access & Benefit Sharing (ABS) & Bio-resource IP clearance",
      summary: "Enforces the Biological Diversity Act, requiring mandatory prior approval before applying for any IPR based on biological resources from India.",
      legalBasis: "Biological Diversity Act, 2002 (Section 6: Approval for IPR)",
      url: "http://nbaindia.org",
      badge: "Statutory ABS Body"
    },
    "wipo": {
      id: "wipo",
      name: "WIPO - Traditional Knowledge Division",
      authority: "World Intellectual Property Organization (Geneva)",
      jurisdiction: "International",
      domain: "Global IP Standards, Genetic Resources & Folklore",
      summary: "Directs intergovernmental discussions on IP protection for Genetic Resources and Traditional Knowledge (IGC Treaty).",
      legalBasis: "WIPO Treaty on Intellectual Property, Genetic Resources and Associated Traditional Knowledge (2024)",
      url: "https://www.wipo.int/tk/en/",
      badge: "Global Standard"
    },
    "fssai-aahar": {
      id: "fssai-aahar",
      name: "FSSAI (Ayurveda Aahar)",
      authority: "Food Safety and Standards Authority of India",
      jurisdiction: "India",
      domain: "Ayurvedic Food & Dietary Supplements",
      summary: "Regulates food prepared in accordance with recipes or processes detailed in authoritative books of Ayurveda under Schedule A.",
      legalBasis: "Food Safety and Standards (Ayurveda Aahar) Regulations, 2022",
      url: "https://fssai.gov.in",
      badge: "Food Authority"
    }
  },

  iprGuides: [
    {
      id: "patents",
      title: "Patents in Ayurveda",
      tag: "Technological Inventions",
      icon: "📜",
      summary: "Protect novel formulations, extraction processes, drug delivery devices, and synergistic herbal compositions with proven non-obvious therapeutic activity.",
      keyCriteria: "Novelty (world-wide), Inventive Step, Industrial Applicability.",
      ayurvedaSpecifics: "Under Section 3(p) of the Indian Patents Act, an invention which is traditional knowledge or an aggregation of known properties of traditionally known components is NOT patentable. Synergism must be demonstrated with empirical comparative data over individual constituents.",
      commonPitfall: "Filing patent for mere mixing of classical Ayurvedic herbs without comparative synergy data or novel extraction process.",
      sourceIds: ["ip-india", "tkdl", "nba"]
    },
    {
      id: "trademarks",
      title: "Trademarks & Brand Identity",
      tag: "Commercial Protection",
      icon: "™️",
      summary: "Safeguard unique brand names, logos, packaging trade dress, and product line names across AYUSH goods (Class 5 for medicines, Class 3 for cosmetics, Class 30/32 for herbal teas).",
      keyCriteria: "Distinctiveness, non-descriptiveness, non-deceptive.",
      ayurvedaSpecifics: "Generic classical Sanskrit names (e.g., 'Chyawanprash', 'Triphala', 'Brahmi Vati') cannot be registered as exclusive trademarks by any single entity. Brand owners must use coined/distinctive prefixes (e.g., 'Sakti-Triphala').",
      commonPitfall: "Attempting to trademark an ancient classical formulation name listed in the First Schedule of the Drugs & Cosmetics Act.",
      sourceIds: ["ip-india"]
    },
    {
      id: "traditional-knowledge",
      title: "Traditional Knowledge & TKDL",
      tag: "Heritage Preservation",
      icon: "🏛️",
      summary: "Understand public-domain traditional Ayurvedic remedies documented in ancient treatises (Charaka Samhita, Sushruta Samhita, Ashtanga Hridaya) and how TKDL prevents biopiracy.",
      keyCriteria: "Defensive protection, public prior art, non-exclusive community heritage.",
      ayurvedaSpecifics: "TKDL translates Sanskrit shlokas into structured patent metadata. Over 250+ foreign patent applications claiming turmeric, neem, ashwagandha compositions have been successfully cancelled or withdrawn due to TKDL prior art citations.",
      commonPitfall: "Assuming classical recipes can be claimed as private patents in foreign patent offices without being flagged by TKDL monitoring.",
      sourceIds: ["tkdl", "wipo", "ayush-ministry"]
    },
    {
      id: "biodiversity-abs",
      title: "Biodiversity & ABS Compliance",
      tag: "Mandatory Statutory Clearance",
      icon: "🌱",
      summary: "Comply with the Biological Diversity Act 2002 before commercializing or filing patents on Indian biological resources (plants, seeds, extracts, bio-molecules).",
      keyCriteria: "Section 6 approval from National Biodiversity Authority (NBA) prior to patent grant; Section 3/7 approvals for bio-resource access.",
      ayurvedaSpecifics: "Any person applying for an intellectual property right inside or outside India for an invention based on Indian biological resources must obtain prior NBA approval (Form III). Failure to do so can lead to criminal penalties or patent revocation.",
      commonPitfall: "Applying for a patent in India or overseas without applying for NBA Form III concurrence beforehand.",
      sourceIds: ["nba", "ip-india"]
    },
    {
      id: "geographical-indication",
      title: "Geographical Indications (GI)",
      tag: "Territorial Heritage",
      icon: "🗺️",
      summary: "Protect herbs and traditional Ayurvedic preparations whose quality and characteristics are attributable exclusively to their specific geographic origin.",
      keyCriteria: "Geographical link, collective/community ownership, reputation.",
      ayurvedaSpecifics: "Prominent Indian GIs include Navara Rice (used in Panchakarma), Alleppey Green Cardamom, Malabar Pepper, Ganjam Kewda, and Nilgiri Tea. GIs are held by associations of producers rather than individual private corporations.",
      commonPitfall: "Attempting to register a GI as a private single-person trademark.",
      sourceIds: ["ip-india", "wipo"]
    },
    {
      id: "designs",
      title: "Industrial Designs",
      tag: "Aesthetic Innovation",
      icon: "✨",
      summary: "Protect novel 3D shapes, bottle ergonomics, Ayurvedic nasal dropper devices, Dhara pot designs, or herbal applicator instruments.",
      keyCriteria: "Novelty in visual appearance, shape, configuration, pattern.",
      ayurvedaSpecifics: "Protects only the visual appearance, not the medicinal fluid inside or functional mechanism. Ideal for premium Ayurvedic D2C packaging and novel dispensaries.",
      commonPitfall: "Conflating patent protection for the herbal liquid with design protection for the container bottle.",
      sourceIds: ["ip-india"]
    },
    {
      id: "copyright",
      title: "Copyright & Clinical Compilations",
      tag: "Original Literary & Media Works",
      icon: "©️",
      summary: "Protects proprietary Ayurvedic treatment manuals, modern English translations with interpretive commentary, mobile app software code, and marketing literature.",
      keyCriteria: "Originality of expression, fixation in a tangible medium.",
      ayurvedaSpecifics: "Ancient verses themselves are public domain, but an author's original translation, analytical commentary, visual anatomy charts, or formulation software algorithms are fully copyrightable.",
      commonPitfall: "Copying contemporary published translations or clinical charts without permission.",
      sourceIds: ["ip-india"]
    }
  ],

  sampleQueries: [
    {
      title: "Herbal Formulation for Diabetes",
      query: "I have developed a new herbal formulation for diabetes using Gymnema, Fenugreek, and Cinnamon. Can I patent it?",
      jurisdiction: "india",
      domain: "patent"
    },
    {
      title: "Turmeric Anti-Aging Serum (Cosmetic)",
      query: "We have formulated a face serum using nano-emulsified turmeric and saffron. Is it an Ayurvedic cosmetic or proprietary drug?",
      jurisdiction: "india",
      domain: "product-regulation"
    },
    {
      title: "Classical Chyawanprash Export to USA",
      query: "Can our company trademark our version of classical Chyawanprash and export it to the US as an FDA dietary supplement?",
      jurisdiction: "international",
      domain: "trademark"
    },
    {
      title: "Ashwagandha Stress Relief Synergistic Tablet",
      query: "We created a proprietary tablet combining Ashwagandha extract with Piperine. Do we need National Biodiversity Authority (NBA) approval before filing a patent?",
      jurisdiction: "india",
      domain: "biodiversity"
    }
  ],

  demoResponses: {
    diabetes: {
      matchKeywords: ["diabetes", "sugar", "insulin", "glycemic", "gymnema", "fenugreek", "herbal formulation for diabetes"],
      analysis: "Your formulation for blood sugar management involves plant extracts with established traditional medicinal use. Under Indian intellectual property law and AYUSH regulatory frameworks, this requires a dual evaluation for patentability exclusions and drug licensing.",
      confidence: "Medium",
      confidenceReason: "Requires empirical synergy data and prior-art search against classical texts (TKDL) to confirm patentability.",
      ipRoute: [
        "Patent Eligibility Evaluation: Under Section 3(p) of the Indian Patents Act, inventions that are mere traditional knowledge or aggregations of known properties of herbs (e.g., Gymnema / Meshashringi for Madhumeha) are excluded.",
        "Requirement of Proven Synergism: To overcome Section 3(e) (mere admixture), you must provide empirical laboratory/clinical comparative data proving that the combined extracts exhibit synergistic efficacy superior to the mathematical sum of individual herbs.",
        "Process vs. Composition Claim: Novel extraction processes, standardized solvent fractions, or novel bio-availability enhancement delivery forms (e.g., liposomal or phyto-vesicular) have a significantly higher probability of patent grant than raw herbal powder mixtures.",
        "Brand Protection: File a distinctive coined Trademark (Class 5 - Pharmaceuticals/Ayurvedic Medicines) to protect your commercial brand identity."
      ],
      regulatory: [
        "Regulatory Categorization: You must classify whether this is an Ayurvedic Proprietary Medicine (Section 3(a) of Drugs and Cosmetics Act 1940) or an Ayurveda Aahar (under FSSAI 2022 Regulations for daily nutritional balance).",
        "License Application: For an Ayurvedic Proprietary Medicine, obtain a manufacturing license (Form 25-D) from the State AYUSH Licensing Authority (SLA) with proof of safety and effectiveness as per Rule 158-B.",
        "Standardization & Pharmacopoeia: Ingredients must comply with the Ayurvedic Pharmacopoeia of India (API) limits for heavy metals, aflatoxins, pesticide residues, and microbial load."
      ],
      tkConsideration: "High relevance. The hypoglycemic actions of Meshashringi (Gymnema sylvestre), Methi (Trigonella foenum-graecum), and Twak (Cinnamomum) are extensively documented in Charaka Samhita and Bhavaprakasha Nighantu. TKDL examiners will cite these texts against broad composition claims.",
      absConsideration: "Mandatory. Under Section 6 of the Biological Diversity Act, 2002, if your formulation uses biological resources harvested from India, you must obtain prior approval from the National Biodiversity Authority (NBA) via Form III before commercial patent grant.",
      nextSteps: [
        "Conduct a comprehensive prior-art search using the TKDL database, IP India patent database, and Google Patents.",
        "Perform comparative in-vitro / in-vivo synergy testing documenting statistical synergism over individual herbal constituents.",
        "Determine the regulatory route: Apply for SLA AYUSH Form 24-D/25-D manufacturing license or FSSAI Ayurveda Aahar approval.",
        "File Form III with the National Biodiversity Authority (NBA) for bio-resource patent clearance.",
        "Consult a registered Indian Patent & Trademark Attorney specializing in AYUSH & Life Sciences."
      ],
      sourceKeys: ["ip-india", "ayush-ministry", "tkdl", "nba", "fssai-aahar"]
    },

    cosmetic: {
      matchKeywords: ["cosmetic", "face serum", "skin", "turmeric", "saffron", "anti-aging", "cream", "lotion"],
      analysis: "Your topical turmeric and saffron preparation involves dual considerations of Ayurvedic cosmetic licensing under State AYUSH authorities versus medicinal claims under the Drugs and Cosmetics Act.",
      confidence: "High",
      confidenceReason: "Clear regulatory pathway under AYUSH Rule 158-B and Bureau of Indian Standards (BIS) / AYUSH cosmetic schedules.",
      ipRoute: [
        "Formulation Patent: If you have created a novel nano-emulsion or specific liposomal carrier for Curcumin penetration, the carrier system and delivery kinetics can be patented under IP India guidelines.",
        "Section 3(p) Caution: Haridra (Turmeric) and Kumkuma (Saffron) for Varnya (complexion) are classical traditional knowledge. Broad cosmetic composition claims will face TKDL objections unless tied to a novel extraction or stability mechanism.",
        "Industrial Design Registration: If your product uses an innovative dispenser bottle, dropper, or aesthetic container, protect it under the Designs Act 2000 (Class 09-01).",
        "Trademarking: Register your brand name and distinctive trade dress in Class 3 (Cosmetics and Toilet Preparations)."
      ],
      regulatory: [
        "Cosmetic vs. Drug Threshold: If you claim therapeutic treatment of dermatological diseases (eczema, psoriasis), it will be classified as an Ayurvedic Proprietary Medicine. If claimed strictly for beautification, cleansing, or anti-aging appearance, it qualifies as an Ayurvedic Cosmetic.",
        "Licensing: Apply for an Ayurvedic Cosmetic Manufacturing License (Form 32-A) from the State Licensing Authority under Drugs & Cosmetics Rules.",
        "Labeling Compliance: Comply with AYUSH labeling rules (full ingredient disclosure with botanical Latin names, manufacturing batch, expiry date) and avoid allopathic/therapeutic disease-cure claims."
      ],
      tkConsideration: "Turmeric's wound-healing and skin-brightening properties are recorded in Charaka Samhita and Sushruta Samhita. WIPO and TKDL monitor all topical Curcumin patents globally.",
      absConsideration: "Procurement of cultivated saffron and turmeric within India by Indian entities generally requires State Biodiversity Board (SBB) intimation; commercial IPR filing requires NBA clearance.",
      nextSteps: [
        "Differentiate product claims: Align marketing labels strictly with cosmetic (Rule 158-B) vs. therapeutic definitions.",
        "Conduct dermatological patch testing, stability tests, and heavy metal testing per AYUSH Pharmacopoeial standards.",
        "Register your brand trademark in Class 3 and bottle design under the Designs Act.",
        "Prepare State AYUSH Licensing Authority dossier with proof of classical textual reference or safety data."
      ],
      sourceKeys: ["ayush-ministry", "ip-india", "tkdl", "nba"]
    },

    export: {
      matchKeywords: ["export", "international", "usa", "fda", "chyawanprash", "triphala", "europe", "eu"],
      analysis: "Exporting classical Ayurveda products like Chyawanprash or single-herb extracts to international markets (USA, EU, UK) involves distinct jurisdictional IP constraints and foreign regulatory classifications.",
      confidence: "High",
      confidenceReason: "Established cross-border trade guidelines between Ministry of Ayush, Pharmexcil, US FDA (DSHEA), and EFSA.",
      ipRoute: [
        "Classical Name Non-Exclusivity: The term 'Chyawanprash' is a generic classical Sanskrit drug name listed in the Ayurvedic Formulary of India. You CANNOT register 'Chyawanprash' alone as a trademark anywhere in the world.",
        "Trademark Strategy: Protect a distinctive brand moniker (e.g., 'VedSakti Chyawanprash') through the WIPO Madrid System or national trademark registries (USPTO, EUIPO).",
        "Patent Limitations: Classical formulas are in the public domain globally due to TKDL defensive publications. You cannot patent the formulation itself, but you may patent novel shelf-life stabilization packaging or sugar-free micro-encapsulation."
      ],
      regulatory: [
        "Target Market Categorization: In the USA, Ayurveda products cannot be sold as OTC drugs without an FDA New Drug Application; they are typically marketed as Dietary Supplements under DSHEA (1994).",
        "Permissible Claims: Structure/function claims are allowed in the US (e.g., 'supports natural respiratory immunity'), but NO disease prevention or cure claims (e.g., 'prevents tuberculosis/cancer') are permissible without FDA warning letters.",
        "Heavy Metal & Purity Standards: International buyers enforce strict limits on Lead, Mercury, Arsenic, and Cadmium (California Prop 65 / US Pharmacopeia). Ayush CoPP (Certificate of Pharmaceutical Product) or Ayush Premium Mark certification is strongly recommended."
      ],
      tkConsideration: "Chyawanprash formulation originates directly from the Charaka Samhita (Chikitsa Sthana, Chapter 1). TKDL has registered the formulation in 5 languages to prevent biopiracy by multinational entities.",
      absConsideration: "Export of Indian biological resources or products derived from them requires intimation/approval from the National Biodiversity Authority (NBA) under Section 3/4 if foreign entities or commercial transfers are involved.",
      nextSteps: [
        "Obtain Ayush Premium Mark certification and Certificate of Pharmaceutical Product (CoPP) from Ministry of Ayush.",
        "Audit product chemistry for California Proposition 65 heavy metal thresholds and pesticide limits.",
        "Review US FDA 21 CFR Part 111 (Current Good Manufacturing Practice in Manufacturing, Packaging, Labeling, or Holding Operations for Dietary Supplements).",
        "File trademark application for your unique coined brand name via WIPO Madrid Protocol."
      ],
      sourceKeys: ["wipo", "ayush-ministry", "ip-india", "tkdl", "nba"]
    },

    ashwagandha: {
      matchKeywords: ["ashwagandha", "withania", "somnifera", "piperine", "bioavailability", "stress", "tablet"],
      analysis: "Combining standardized Withania somnifera (Ashwagandha) extract with bio-enhancers such as Piperine represents a popular phytopharmaceutical/nutraceutical formulation requiring strict Biological Diversity Act compliance and patent validation.",
      confidence: "Medium",
      confidenceReason: "Bioavailability enhancement via Piperine has prior art citations; inventive step requires specific non-obvious dosage ratio and kinetic proof.",
      ipRoute: [
        "Patent Eligibility Check: Piperine as a bio-enhancer has multiple existing patents worldwide. Your specific combination must show unexpected, non-linear pharmacokinetics or a novel targeted release mechanism to satisfy Section 3(d) and 3(e) of the Indian Patents Act.",
        "Biological Diversity Act (Section 6): Before you are granted a patent in India or abroad using Indian Ashwagandha root extract, you MUST secure prior approval from the National Biodiversity Authority (NBA). Failure to file Form III can lead to patent revocation.",
        "Trade Secret vs. Patent: If your specific extraction ratio or hydro-ethanolic solvent parameters yield unique withanolide profiles that cannot be easily reverse-engineered, consider holding the extraction method as a trade secret while branding aggressively."
      ],
      regulatory: [
        "Ayurvedic Proprietary Medicine: Under Rule 158-B of Drugs and Cosmetics Rules, published literature on safety of both Withania somnifera and Piper nigrum will be required by State Licensing Authorities.",
        "Ayurveda Aahar Route: If marketed as a dietary supplement, verify withanolide limits prescribed under FSSAI's Ayurveda Aahar Regulations 2022 and ensure no synthetic withanolides are added.",
        "Heavy Metal & Microbial Clearance: Standardized testing according to the Ayurvedic Pharmacopoeia of India (API) is mandatory before batch release."
      ],
      tkConsideration: "Medhya Rasayana and Balya properties of Ashwagandha are well established in ancient Ayurveda. TKDL includes 500+ formulations containing Ashwagandha.",
      absConsideration: "Commercial utilization of Ashwagandha harvested from farmers requires ABS fee sharing with State Biodiversity Boards (SBB), while IPR requires NBA Form III.",
      nextSteps: [
        "Perform TKDL and patent database clearance search on Ashwagandha + Piperine synergistic ratios.",
        "Submit Form III to the National Biodiversity Authority (NBA) prior to commercial patent grant.",
        "Decide between State AYUSH Proprietary Drug License (Form 25-D) or FSSAI Ayurveda Aahar registration.",
        "Register brand name trademark in Class 5."
      ],
      sourceKeys: ["nba", "ip-india", "tkdl", "ayush-ministry", "fssai-aahar"]
    }
  },

  // Fallback dynamic generator for any user query
  generateDynamicResponse: function(userQuery, jurisdiction, domain) {
    const q = (userQuery || "").toLowerCase();
    
    // Check specific match
    if (q.includes("diabet") || q.includes("sugar") || q.includes("fenugreek") || q.includes("gymnema")) {
      return this.demoResponses.diabetes;
    }
    if (q.includes("cosmetic") || q.includes("serum") || q.includes("skin") || q.includes("turmeric") || q.includes("cream")) {
      return this.demoResponses.cosmetic;
    }
    if (q.includes("export") || q.includes("usa") || q.includes("chyawanprash") || q.includes("international") || q.includes("fda")) {
      return this.demoResponses.export;
    }
    if (q.includes("ashwagandha") || q.includes("stress") || q.includes("tablet") || q.includes("capsule") || q.includes("extract")) {
      return this.demoResponses.ashwagandha;
    }

    // Dynamic tailored synthesis
    const isIntl = jurisdiction === "international";
    const domainTitle = domain.charAt(0).toUpperCase() + domain.slice(1).replace("-", " ");

    return {
      analysis: `Your query regarding "${userQuery}" concerns ${domainTitle} within ${isIntl ? "international and cross-border" : "Indian domestic"} Ayurveda frameworks. Successful commercialization requires navigating both IP non-obviousness criteria and AYUSH regulatory authorizations.`,
      confidence: "Medium",
      confidenceReason: "Preliminary AI analysis based on statutory provisions of IP India, AYUSH, and TKDL prior art frameworks.",
      ipRoute: [
        `Patentability Evaluation: Verify whether the formulation relies on known Ayurvedic ingredients. Under Section 3(p) of the Patents Act, traditional knowledge is unpatentable unless novel synergy, standardized isolation, or novel delivery systems are experimentally demonstrated.`,
        `Brand Protection (${domainTitle}): Register a distinctive coined trademark in Class 5 (Medicines), Class 3 (Cosmetics), or Class 30 (Herbal Foods) to secure your commercial goodwill.`,
        `Prior Art Diligence: Check TKDL (Traditional Knowledge Digital Library) to ensure your composition does not overlap with public domain classical formulations.`
      ],
      regulatory: [
        `Regulatory Categorization: Determine if the product qualifies as Classical Ayurvedic Medicine, Ayurvedic Proprietary Medicine (Drugs & Cosmetics Act Rule 158-B), Phytopharmaceutical, or FSSAI Ayurveda Aahar.`,
        `Licensing: Secure the appropriate State AYUSH Licensing Authority (SLA) manufacturing license (Form 25-D or 32-A) or FSSAI central license.`,
        `Quality Compliance: Validate heavy metals (Lead, Cadmium, Mercury, Arsenic), pesticide residues, and microbial count against Ayurvedic Pharmacopoeia of India (API) standards.`
      ],
      tkConsideration: `Herbal ingredients mentioned in classical texts (Charaka, Sushruta, Astanga Hridaya) are tracked by TKDL. Defensive publication rules prevent private monopoly over ancient wisdom.`,
      absConsideration: `If utilizing Indian biological resources, mandatory approval from the National Biodiversity Authority (NBA) under Section 6 of the Biological Diversity Act 2002 must be secured before patent grant.`,
      nextSteps: [
        "Formulate precise technical claims emphasizing non-obvious synergistic efficacy.",
        "Conduct thorough prior-art search across TKDL and international patent registers.",
        "Obtain AYUSH SLA manufacturing license or FSSAI Ayurveda Aahar approval.",
        "Submit Form III with National Biodiversity Authority (NBA) if biological resources of India are utilized.",
        "Consult a certified AYUSH regulatory and IPR consultant."
      ],
      sourceKeys: isIntl ? ["wipo", "ayush-ministry", "ip-india", "tkdl"] : ["ip-india", "ayush-ministry", "tkdl", "nba", "fssai-aahar"]
    };
  },

  // Multilingual translations
  translations: {
    en: {
      siteTitle: "IP-SAKTI Sahayak",
      tagline: "Your AI Guide for Ayurveda, Intellectual Property & Regulatory Compliance",
      navHome: "Home",
      navAsk: "Ask Sahayak",
      navGuide: "IPR Guide",
      navClassify: "Classification",
      navDashboard: "Dashboard",
      navAbout: "About",
      heroTitle: "Protect Your Ayurveda Innovation.",
      heroHighlight: "Navigate IPR & Regulations with Confidence.",
      heroDesc: "An AI-powered assistant that helps Ayurveda innovators, researchers, and entrepreneurs understand intellectual property, traditional knowledge safeguards, and regulatory requirements using verified, source-cited intelligence.",
      btnAskSahayak: "Ask Sahayak",
      btnExploreIPR: "Explore IPR Guide",
      disclaimerNotice: "Information provided for guidance only. This is not legal advice.",
      selectJurisdiction: "Select Jurisdiction",
      jurisdictionIndia: "🇮🇳 India",
      jurisdictionIntl: "🌎 International",
      helpCategoryTitle: "What do you need help with?",
      inputPlaceholder: "Describe your Ayurveda product or question (e.g., 'I have developed a new herbal formulation for diabetes. Can I patent it?')...",
      btnSubmitAsk: "Ask Sahayak",
      analysisTitle: "Sahayak Analysis",
      ipRouteTitle: "Possible IP Route",
      regulatoryTitle: "Regulatory Consideration",
      tkTitle: "Traditional Knowledge & Prior Art",
      absTitle: "Biodiversity & ABS Compliance",
      nextStepsTitle: "Recommended Next Steps",
      sourcesTitle: "Authoritative Reference Sources",
      confidenceLabel: "Confidence Level",
      classifyTitle: "Ayurveda Product Classification Wizard",
      classifySubtitle: "Step-by-step regulatory category screening under Ministry of Ayush and FSSAI frameworks.",
      statusVerified: "VERIFIED",
      statusReview: "REQUIRES REVIEW",
      statusAction: "ACTION NEEDED"
    },
    hi: {
      siteTitle: "आईपी-शक्ति सहायक",
      tagline: "आयुर्वेद, बौद्धिक संपदा और नियामक अनुपालन के लिए आपका एआई मार्गदर्शक",
      navHome: "मुख्य पृष्ठ",
      navAsk: "सहायक से पूछें",
      navGuide: "आईपीआर गाइड",
      navClassify: "उत्पाद वर्गीकरण",
      navDashboard: "डैशबोर्ड",
      navAbout: "परिचय",
      heroTitle: "अपने आयुर्वेद नवाचार को सुरक्षित करें।",
      heroHighlight: "आईपीआर और नियमों को आत्मविश्वास से समझें।",
      heroDesc: "एक एआई-संचालित सहायक जो आयुर्वेद उद्यमियों, शोधकर्ताओं और चिकित्सकों को बौद्धिक संपदा और नियामक आवश्यकताओं को आधिकारिक स्रोतों के आधार पर समझने में मदद करता है।",
      btnAskSahayak: "सहायक से पूछें",
      btnExploreIPR: "आईपीआर गाइड देखें",
      disclaimerNotice: "यह जानकारी केवल मार्गदर्शन के लिए है। यह कानूनी सलाह नहीं है।",
      selectJurisdiction: "अधिकार क्षेत्र चुनें",
      jurisdictionIndia: "🇮🇳 भारत (India)",
      jurisdictionIntl: "🌎 अंतर्राष्ट्रीय (International)",
      helpCategoryTitle: "आपको किस विषय में सहायता चाहिए?",
      inputPlaceholder: "अपने आयुर्वेदिक उत्पाद या प्रश्न का विवरण दें (उदा. 'मैंने मधुमेह के लिए एक नया हर्बल फॉर्मूलेशन बनाया है। क्या मैं इसका पेटेंट करा सकता हूँ?')...",
      btnSubmitAsk: "सहायक से पूछें",
      analysisTitle: "सहायक विश्लेषण",
      ipRouteTitle: "संभावित बौद्धिक संपदा (IP) मार्ग",
      regulatoryTitle: "नियामक विचार",
      tkTitle: "पारंपरिक ज्ञान और पूर्व ज्ञान (TKDL)",
      absTitle: "जैव विविधता एवं एबीएस अनुपालन",
      nextStepsTitle: "अनुशंसित अगले कदम",
      sourcesTitle: "प्रामाणिक संदर्भ स्रोत",
      confidenceLabel: "विश्वास स्तर",
      classifyTitle: "आयुर्वेद उत्पाद वर्गीकरण विज़ार्ड",
      classifySubtitle: "आयुष मंत्रालय एवं एफएसएसएआई के तहत चरण-दर-चरण उत्पाद श्रेणी निर्धारण।",
      statusVerified: "सत्यापित (VERIFIED)",
      statusReview: "समीक्षा आवश्यक (REQUIRES REVIEW)",
      statusAction: "कार्रवाई आवश्यक (ACTION NEEDED)"
    },
    kn: {
      siteTitle: "ಐಪಿ-ಶಕ್ತಿ ಸಹಾಯಕ",
      tagline: "ಆಯುರ್ವೇದ, ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಮತ್ತು ನಿಯಂತ್ರಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ನಿಮ್ಮ ಎಐ ಮಾರ್ಗದರ್ಶಿ",
      navHome: "ಮುಖಪುಟ",
      navAsk: "ಸಹಾಯಕನನ್ನು ಕೇಳಿ",
      navGuide: "ಐಪಿಆರ್ ಮಾರ್ಗದರ್ಶಿ",
      navClassify: "ವರ್ಗೀಕರಣ",
      navDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      navAbout: "ಕುರಿತು",
      heroTitle: "ನಿಮ್ಮ ಆಯುರ್ವೇದ ನಾವೀನ್ಯತೆಯನ್ನು ರಕ್ಷಿಸಿ.",
      heroHighlight: "ಐಪಿಆರ್ ಮತ್ತು ನಿಯಮಗಳನ್ನು ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ತಿಳಿಯಿರಿ.",
      heroDesc: "ಆಯುರ್ವೇದ ಉದ್ಯಮಿಗಳು ಮತ್ತು ಸಂಶೋಧಕರಿಗೆ ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಮತ್ತು ನಿಯಂತ್ರಕ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಅಧಿಕೃತ ಮೂಲಗಳ ಮೂಲಕ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನೆರವಾಗುವ ಎಐ ಸಹಾಯಕ.",
      btnAskSahayak: "ಸಹಾಯಕನನ್ನು ಕೇಳಿ",
      btnExploreIPR: "ಐಪಿಆರ್ ಮಾಹಿತಿ ನೋಡಿ",
      disclaimerNotice: "ಮಾಹಿತಿ ಕೇವಲ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ಇದು ಕಾನೂನು ಸಲಹೆಯಲ್ಲ.",
      selectJurisdiction: "ನ್ಯಾಯವ್ಯಾಪ್ತಿ ಆಯ್ಕೆಮಾಡಿ",
      jurisdictionIndia: "🇮🇳 ಭಾರತ (India)",
      jurisdictionIntl: "🌎 ಅಂತಾರಾಷ್ಟ್ರೀಯ (International)",
      helpCategoryTitle: "ನಿಮಗೆ ಯಾವ ವಿಷಯದಲ್ಲಿ ಸಹಾಯ ಬೇಕು?",
      inputPlaceholder: "ನಿಮ್ಮ ಆಯುರ್ವೇದ ಉತ್ಪನ್ನ ಅಥವಾ ಪ್ರಶ್ನೆಯನ್ನು ವಿವರಿಸಿ...",
      btnSubmitAsk: "ಪ್ರಶ್ನೆ ಕೇಳಿ",
      analysisTitle: "ಸಹಾಯಕ ವಿಶ್ಲೇಷಣೆ",
      ipRouteTitle: "ಸಂಭಾವ್ಯ ಐಪಿ ರಕ್ಷಣೆ ಮಾರ್ಗ",
      regulatoryTitle: "ನಿಯಂತ್ರಕ ಪರಿಗಣನೆಗಳು",
      tkTitle: "ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನ (TKDL)",
      absTitle: "ಜೀವವೈವಿಧ್ಯ ಮತ್ತು ಎಬಿಎಸ್ ಅನುಸರಣೆ",
      nextStepsTitle: "ಮುಂದಿನ ಕ್ರಮಗಳು",
      sourcesTitle: "ಅಧಿಕೃತ ಆಧಾರ ಮೂಲಗಳು",
      confidenceLabel: "ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಮಟ್ಟ",
      classifyTitle: "ಉತ್ಪನ್ನ ವರ್ಗೀಕರಣ ವ್ಯವಸ್ಥೆ",
      classifySubtitle: "ಆಯುಷ್ ಸಚಿವಾಲಯದ ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶಿ.",
      statusVerified: "ದೃಢೀಕರಿಸಲಾಗಿದೆ",
      statusReview: "ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿದೆ",
      statusAction: "ಕ್ರಮ ಕೈಗೊಳ್ಳಿ"
    },
    te: {
      siteTitle: "ఐపీ-శక్తి సహాయక్",
      tagline: "ఆయుర్వేదం, మేధో సంపత్తి మరియు నియంత్రణ చట్టాలకు మీ ఏఐ గైడ్",
      navHome: "హోమ్",
      navAsk: "సహాయక్‌ని అడగండి",
      navGuide: "ఐపీఆర్ గైడ్",
      navClassify: "వర్గీకరణ",
      navDashboard: "డాష్‌బోర్డ్",
      navAbout: "గురించి",
      heroTitle: "మీ ఆయుర్వేద ఆవిష్కరణను రక్షించండి.",
      heroHighlight: "ఐపీఆర్ & నియంత్రణ నిబంధనలను నమ్మకంగా ఎదుర్కోండి.",
      heroDesc: "ఆయుర్వేద పరిశోధకులు, వ్యవస్థాపకులకు పేటెంట్లు మరియు నిబంధనలను ప్రామాణిక సమాచారంతో అర్థం చేసుకోవడానికి సహాయపడే ఏఐ అసిస్టెంట్.",
      btnAskSahayak: "సహాయక్‌ని అడగండి",
      btnExploreIPR: "ఐపీఆర్ గైడ్ చూడండి",
      disclaimerNotice: "ఈ సమాచారం కేవలం మార్గదర్శకత్వానికి మాత్రమే. ఇది చట్టపరమైన సలహా కాదు.",
      selectJurisdiction: "న్యాయ పరిధి ఎంచుకోండి",
      jurisdictionIndia: "🇮🇳 భారతదేశం (India)",
      jurisdictionIntl: "🌎 అంతర్జాతీయ (International)",
      helpCategoryTitle: "మీకు దేనిలో సహాయం కావాలి?",
      inputPlaceholder: "మీ ఆయుర్వేద ఉత్పత్తి లేదా ప్రశ్నను వివరించండి...",
      btnSubmitAsk: "సహాయక్‌ని అడగండి",
      analysisTitle: "సహాయక్ విశ్లేషణ",
      ipRouteTitle: "మేధో సంపత్తి (IP) మార్గం",
      regulatoryTitle: "నియంత్రణ పరిగణన",
      tkTitle: "సాంప్రదాయ జ్ఞానం (TKDL)",
      absTitle: "జీవవైవిధ్యం & ABS నిబంధనలు",
      nextStepsTitle: "సిఫార్సు చేసిన తదుపరి చర్యలు",
      sourcesTitle: "ప్రామాణిక మూలాలు",
      confidenceLabel: "విశ్వసనీయత స్థాయి",
      classifyTitle: "ఉత్పత్తి వర్గీకరణ విజార్డ్",
      classifySubtitle: "ఆయుష్ మంత్రిత్వ శాఖ నిబంధనల ప్రకారం దశల వారీ వర్గీకరణ.",
      statusVerified: "ధృవీకరించబడింది",
      statusReview: "సమీక్ష అవసరం",
      statusAction: "చర్య అవసరం"
    },
    ta: {
      siteTitle: "ஐபி-சக்தி சஹாயக்",
      tagline: "ஆயுர்வேதம், அறிவுசார் சொத்துரிமை & ஒழுங்குமுறை விதிகளுக்கான உங்கள் AI வழிகாட்டி",
      navHome: "முகப்பு",
      navAsk: "சஹாயக்கிடம் கேளுங்கள்",
      navGuide: "IPR வழிகாட்டி",
      navClassify: "வகைப்பாடு",
      navDashboard: "டாஷ்போர்டு",
      navAbout: "பற்றி",
      heroTitle: "உங்கள் ஆயுர்வேத கண்டுபிடிப்பைப் பாதுகாக்கவும்.",
      heroHighlight: "அறிவுசார் சொத்துரிமை மற்றும் விதிகளை நம்பிக்கையுடன் அணுகுங்கள்.",
      heroDesc: "ஆயுர்வேத கண்டுபிடிப்பாளர்கள் மற்றும் ஆராய்ச்சியாளர்கள் அறிவுசார் சொத்துரிமை மற்றும் ஒழுங்குமுறை விதிகளை எளிதில் அறிய உதவும் AI உதவியாளர்.",
      btnAskSahayak: "சஹாயக்கிடம் கேளுங்கள்",
      btnExploreIPR: "IPR வழிகாட்டியைப் பார்க்க",
      disclaimerNotice: "வழங்கப்பட்ட தகவல் வழிகாட்டுதலுக்கு மட்டுமே. இது சட்ட ஆலோசனை அல்ல.",
      selectJurisdiction: "அதிகார வரம்பைத் தேர்ந்தெடுக்கவும்",
      jurisdictionIndia: "🇮🇳 இந்தியா (India)",
      jurisdictionIntl: "🌎 சர்வதேச (International)",
      helpCategoryTitle: "உங்களுக்கு என்ன உதவி தேவை?",
      inputPlaceholder: "உங்கள் ஆயுர்வேத தயாரிப்பு அல்லது கேள்வியை விவரிக்கவும்...",
      btnSubmitAsk: "சஹாயக்கிடம் கேளுங்கள்",
      analysisTitle: "சஹாயக் பகுப்பாய்வு",
      ipRouteTitle: "சாத்தியமான அறிவுசார் சொத்து வழி",
      regulatoryTitle: "ஒழுங்குமுறை பரிசீலனை",
      tkTitle: "பாரம்பரிய அறிவு (TKDL)",
      absTitle: "பல்லுயிர் மற்றும் ABS இணக்கம்",
      nextStepsTitle: "பரிந்துரைக்கப்பட்ட அடுத்த படிகள்",
      sourcesTitle: "அங்கீகரிக்கப்பட்ட ஆதாரங்கள்",
      confidenceLabel: "நம்பகத்தன்மை நிலை",
      classifyTitle: "தயாரிப்பு வகைப்பாடு வழிகாட்டி",
      classifySubtitle: "ஆயுஷ் அமைச்சக வழிகாட்டுதலின் கீழ் தயாரிப்பு வகை சரிபார்ப்பு.",
      statusVerified: "சரிபார்க்கப்பட்டது",
      statusReview: "மறுஆய்வு தேவை",
      statusAction: "நடவடிக்கை தேவை"
    }
  }
};
