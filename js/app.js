/**
 * IP-SAKTI Sahayak - Main Application Logic
 * Prototype Controller: Interactive Chat, Classification Wizard, Multilingual Engine & Knowledge Hub
 */

document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentLanguage = "en";
  let currentJurisdiction = "india";
  let currentCategory = "patent";
  let wizardStep = 1;
  let wizardAnswers = {
    nature: "formulation",
    use: "therapeutic",
    classical: "yes",
    market: "india"
  };

  // DOM Elements
  const langSelect = document.getElementById("langSelect");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  
  const jurisdictionBtns = document.querySelectorAll(".jurisdiction-btn");
  const categoryPills = document.querySelectorAll(".pill-btn");
  const presetChips = document.querySelectorAll(".chip-btn");
  const queryInput = document.getElementById("queryInput");
  const askSubmitBtn = document.getElementById("askSubmitBtn");
  const aiLoader = document.getElementById("aiLoader");
  const responseContainer = document.getElementById("responseContainer");
  
  // Response Elements
  const responseJurisdiction = document.getElementById("responseJurisdiction");
  const confidenceBadge = document.getElementById("confidenceBadge");
  const analysisIntro = document.getElementById("analysisIntro");
  const ipRouteList = document.getElementById("ipRouteList");
  const regulatoryList = document.getElementById("regulatoryList");
  const tkContent = document.getElementById("tkContent");
  const absContent = document.getElementById("absContent");
  const nextStepsList = document.getElementById("nextStepsList");
  const sourcesGrid = document.getElementById("sourcesGrid");
  const copyBtn = document.getElementById("copyBtn");
  const resetQueryBtn = document.getElementById("resetQueryBtn");

  // IPR Guide Elements
  const iprCardsGrid = document.getElementById("iprCardsGrid");
  const guideSearchInput = document.getElementById("guideSearchInput");

  // Modal Elements
  const sourceModal = document.getElementById("sourceModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalTitle = document.getElementById("modalTitle");
  const modalAuthority = document.getElementById("modalAuthority");
  const modalJurisdiction = document.getElementById("modalJurisdiction");
  const modalDomain = document.getElementById("modalDomain");
  const modalSummary = document.getElementById("modalSummary");
  const modalLegalBasis = document.getElementById("modalLegalBasis");
  const modalExternalLink = document.getElementById("modalExternalLink");

  // Classification Wizard Elements
  const progressSteps = document.querySelectorAll(".progress-step");
  const stepContents = document.querySelectorAll(".wizard-step-content");
  const wizardPrevBtn = document.getElementById("wizardPrevBtn");
  const wizardNextBtn = document.getElementById("wizardNextBtn");
  const wizardResult = document.getElementById("wizardResult");
  const resetWizardBtn = document.getElementById("resetWizardBtn");

  // Dashboard Elements
  const caseBtns = document.querySelectorAll(".case-btn");

  // -------------------------------------------------------------
  // 1. Multilingual Support
  // -------------------------------------------------------------
  function setLanguage(lang) {
    if (!IPR_DATA.translations[lang]) return;
    currentLanguage = lang;
    const t = IPR_DATA.translations[lang];

    // Apply translations across data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update placeholders
    if (queryInput && t.inputPlaceholder) {
      queryInput.placeholder = t.inputPlaceholder;
    }
  }

  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  // -------------------------------------------------------------
  // 2. Navigation & Mobile Menu
  // -------------------------------------------------------------
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  // Smooth scroll for nav items
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      if (navLinks.classList.contains("mobile-open")) {
        navLinks.classList.remove("mobile-open");
      }
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // -------------------------------------------------------------
  // 3. Ask Sahayak Controls
  // -------------------------------------------------------------
  // Jurisdiction Toggle
  jurisdictionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      jurisdictionBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentJurisdiction = btn.getAttribute("data-jurisdiction");
    });
  });

  // Category Pills
  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-category");
    });
  });

  // Preset Chips
  presetChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.getAttribute("data-query");
      const jur = chip.getAttribute("data-jur") || "india";
      const cat = chip.getAttribute("data-cat") || "patent";

      if (queryInput) {
        queryInput.value = query;
        queryInput.focus();
      }

      // Update jurisdiction
      jurisdictionBtns.forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-jurisdiction") === jur);
      });
      currentJurisdiction = jur;

      // Update category
      categoryPills.forEach(p => {
        p.classList.toggle("active", p.getAttribute("data-category") === cat);
      });
      currentCategory = cat;
    });
  });

  // Submit Query
  function handleAskSubmit() {
    const queryText = queryInput.value.trim();
    if (!queryText) {
      queryInput.focus();
      return;
    }

    // Show loading state
    aiLoader.classList.add("active");
    responseContainer.classList.remove("visible");
    askSubmitBtn.disabled = true;
    askSubmitBtn.innerHTML = `<span>Analyzing with Sahayak AI...</span>`;

    // Simulate AI synthesis
    setTimeout(() => {
      aiLoader.classList.remove("active");
      askSubmitBtn.disabled = false;
      askSubmitBtn.innerHTML = `<span>${IPR_DATA.translations[currentLanguage]?.btnSubmitAsk || "Ask Sahayak"}</span> <span>✨</span>`;
      
      const responseData = IPR_DATA.generateDynamicResponse(queryText, currentJurisdiction, currentCategory);
      renderResponse(responseData);
      
      responseContainer.classList.add("visible");
      responseContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 700);
  }

  if (askSubmitBtn) {
    askSubmitBtn.addEventListener("click", handleAskSubmit);
  }

  // Ctrl+Enter or Cmd+Enter trigger
  if (queryInput) {
    queryInput.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleAskSubmit();
      }
    });
  }

  // Render Response Function
  function renderResponse(data) {
    // Jurisdiction badge
    responseJurisdiction.textContent = currentJurisdiction === "international" ? "🌎 International Focus" : "🇮🇳 India Jurisdiction";
    
    // Confidence badge
    confidenceBadge.className = `confidence-badge ${data.confidence.toLowerCase()}`;
    confidenceBadge.innerHTML = `<span>●</span> Confidence: ${data.confidence}`;
    confidenceBadge.title = data.confidenceReason || "";

    // Analysis intro
    analysisIntro.textContent = data.analysis;

    // IP Route
    ipRouteList.innerHTML = "";
    data.ipRoute.forEach(point => {
      const li = document.createElement("li");
      li.textContent = point;
      ipRouteList.appendChild(li);
    });

    // Regulatory
    regulatoryList.innerHTML = "";
    data.regulatory.forEach(point => {
      const li = document.createElement("li");
      li.textContent = point;
      regulatoryList.appendChild(li);
    });

    // TK & ABS
    tkContent.textContent = data.tkConsideration;
    absContent.textContent = data.absConsideration;

    // Next steps
    nextStepsList.innerHTML = "";
    data.nextSteps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      nextStepsList.appendChild(li);
    });

    // Sources Grid
    sourcesGrid.innerHTML = "";
    data.sourceKeys.forEach(srcKey => {
      const src = IPR_DATA.sources[srcKey];
      if (src) {
        const card = document.createElement("div");
        card.className = "source-card";
        card.innerHTML = `
          <div>
            <div class="source-card-top">
              <span class="source-name">${src.name}</span>
              <span class="source-badge">${src.badge}</span>
            </div>
            <div class="source-domain">${src.domain}</div>
          </div>
          <div class="source-click-hint">
            <span>View Authority Details</span>
            <span>→</span>
          </div>
        `;
        card.addEventListener("click", () => openSourceModal(src));
        sourcesGrid.appendChild(card);
      }
    });
  }

  // Copy Analysis Handler
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const query = queryInput.value;
      const textToCopy = `IP-SAKTI Sahayak AI Analysis Report\nQuery: ${query}\nJurisdiction: ${currentJurisdiction}\n\nAnalysis:\n${analysisIntro.textContent}\n\nKey IP Route:\n${Array.from(ipRouteList.children).map(li => "• " + li.textContent).join("\n")}\n\nRegulatory Consideration:\n${Array.from(regulatoryList.children).map(li => "• " + li.textContent).join("\n")}\n\nRecommended Next Steps:\n${Array.from(nextStepsList.children).map((li, i) => `${i+1}. ` + li.textContent).join("\n")}\n\nDisclaimer: Information provided for guidance only. This is not legal advice.`;
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<span>✓ Copied to Clipboard</span>`;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }

  // Reset Query
  if (resetQueryBtn) {
    resetQueryBtn.addEventListener("click", () => {
      queryInput.value = "";
      responseContainer.classList.remove("visible");
      queryInput.focus();
    });
  }

  // -------------------------------------------------------------
  // 4. Sources Modal Logic
  // -------------------------------------------------------------
  function openSourceModal(source) {
    if (!sourceModal) return;
    modalTitle.innerHTML = `<span>🏛️</span> ${source.name}`;
    modalAuthority.textContent = source.authority;
    modalJurisdiction.textContent = source.jurisdiction;
    modalDomain.textContent = source.domain;
    modalSummary.textContent = source.summary;
    modalLegalBasis.textContent = source.legalBasis;
    modalExternalLink.href = source.url;
    modalExternalLink.textContent = `Visit ${source.name} Official Portal ↗`;

    sourceModal.classList.add("active");
  }

  function closeModal() {
    if (sourceModal) sourceModal.classList.remove("active");
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (sourceModal) {
    sourceModal.addEventListener("click", (e) => {
      if (e.target === sourceModal) closeModal();
    });
  }

  // -------------------------------------------------------------
  // 5. IPR Guide Knowledge Cards
  // -------------------------------------------------------------
  function renderIPRGuides(filterText = "") {
    if (!iprCardsGrid) return;
    iprCardsGrid.innerHTML = "";
    const f = filterText.toLowerCase().trim();

    const filtered = IPR_DATA.iprGuides.filter(item => {
      return item.title.toLowerCase().includes(f) ||
             item.summary.toLowerCase().includes(f) ||
             item.tag.toLowerCase().includes(f) ||
             item.ayurvedaSpecifics.toLowerCase().includes(f);
    });

    if (filtered.length === 0) {
      iprCardsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-subtle);">No IPR topic matching "${filterText}". Try searching for 'Patent', 'Traditional Knowledge', 'ABS', or 'Trademark'.</div>`;
      return;
    }

    filtered.forEach(guide => {
      const card = document.createElement("div");
      card.className = "ipr-card";
      
      const sourceBadges = guide.sourceIds.map(sid => {
        const s = IPR_DATA.sources[sid];
        return s ? `<span class="source-badge" style="margin-right: 4px;">${s.name}</span>` : '';
      }).join("");

      card.innerHTML = `
        <div>
          <div class="ipr-card-header">
            <div class="ipr-card-icon">${guide.icon}</div>
            <span class="ipr-card-tag">${guide.tag}</span>
          </div>
          <h3 class="ipr-card-title">${guide.title}</h3>
          <p class="ipr-card-summary">${guide.summary}</p>
          <div class="ipr-criteria-box">
            <strong>Key Criteria:</strong> ${guide.keyCriteria}
          </div>
          <div style="font-size: 0.83rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5;">
            <strong style="color: var(--primary);">Ayurveda Aspect:</strong> ${guide.ayurvedaSpecifics}
          </div>
        </div>
        <div class="ipr-card-footer">
          <button class="ipr-learn-btn" data-guide-id="${guide.id}">
            <span>Learn More Details</span> <span>→</span>
          </button>
          <div class="ipr-source-pill">${sourceBadges}</div>
        </div>
      `;

      // Click event to view full detail modal
      card.querySelector(".ipr-learn-btn").addEventListener("click", () => {
        openGuideDetailModal(guide);
      });

      iprCardsGrid.appendChild(card);
    });
  }

  function openGuideDetailModal(guide) {
    if (!sourceModal) return;
    modalTitle.innerHTML = `${guide.icon} ${guide.title}`;
    modalAuthority.textContent = `IP Category: ${guide.tag}`;
    modalJurisdiction.textContent = "India (Patents Act / Trade Marks Act / BD Act) & International (WIPO)";
    modalDomain.textContent = guide.keyCriteria;
    modalSummary.textContent = guide.summary + "\n\n" + guide.ayurvedaSpecifics;
    modalLegalBasis.textContent = `Common Pitfall to Avoid: ${guide.commonPitfall}`;
    
    // First source link
    const firstSource = IPR_DATA.sources[guide.sourceIds[0]];
    if (firstSource) {
      modalExternalLink.href = firstSource.url;
      modalExternalLink.textContent = `Access Official Authority (${firstSource.name}) ↗`;
    }

    sourceModal.classList.add("active");
  }

  if (guideSearchInput) {
    guideSearchInput.addEventListener("input", (e) => {
      renderIPRGuides(e.target.value);
    });
  }

  // -------------------------------------------------------------
  // 6. Product Classification Wizard
  // -------------------------------------------------------------
  // Option Card selection
  document.querySelectorAll(".wizard-step-content .option-card").forEach(opt => {
    opt.addEventListener("click", () => {
      const parent = opt.parentElement;
      parent.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
      opt.classList.add("selected");
      
      const stepNum = parent.getAttribute("data-step");
      const value = opt.getAttribute("data-val");

      if (stepNum === "1") wizardAnswers.nature = value;
      if (stepNum === "2") wizardAnswers.use = value;
      if (stepNum === "3") wizardAnswers.classical = value;
      if (stepNum === "4") wizardAnswers.market = value;
    });
  });

  function updateWizardUI() {
    progressSteps.forEach((step, idx) => {
      const sNum = idx + 1;
      step.classList.toggle("active", sNum === wizardStep);
      step.classList.toggle("completed", sNum < wizardStep);
    });

    stepContents.forEach(content => {
      const sNum = parseInt(content.getAttribute("data-step"), 10);
      content.classList.toggle("active", sNum === wizardStep);
    });

    if (wizardStep === 1) {
      wizardPrevBtn.style.visibility = "hidden";
      wizardNextBtn.textContent = "Continue to Step 2 →";
      wizardResult.classList.remove("active");
    } else if (wizardStep <= 4) {
      wizardPrevBtn.style.visibility = "visible";
      wizardNextBtn.textContent = wizardStep === 4 ? "Generate Classification 🎯" : `Continue to Step ${wizardStep + 1} →`;
      wizardResult.classList.remove("active");
    } else {
      // Step 5: Result screen
      wizardPrevBtn.style.visibility = "hidden";
      wizardNextBtn.style.display = "none";
      stepContents.forEach(c => c.classList.remove("active"));
      computeClassificationResult();
      wizardResult.classList.add("active");
    }
  }

  if (wizardNextBtn) {
    wizardNextBtn.addEventListener("click", () => {
      if (wizardStep < 5) {
        wizardStep++;
        updateWizardUI();
      }
    });
  }

  if (wizardPrevBtn) {
    wizardPrevBtn.addEventListener("click", () => {
      if (wizardStep > 1) {
        wizardStep--;
        updateWizardUI();
      }
    });
  }

  if (resetWizardBtn) {
    resetWizardBtn.addEventListener("click", () => {
      wizardStep = 1;
      wizardNextBtn.style.display = "inline-flex";
      updateWizardUI();
    });
  }

  function computeClassificationResult() {
    let category = "Ayurvedic Proprietary Medicine";
    let authority = "State AYUSH Licensing Authority (Drugs & Cosmetics Act 1940)";
    let licenseForm = "Form 25-D (Rule 158-B)";
    let testingRequirements = "Heavy metals, pesticide residues, microbial load, aflatoxins, stability studies.";
    let ipRecommendation = "Brand Trademark (Class 5) + Patent possible ONLY if proven synergistic efficacy is documented.";
    let tkRelevance = "Ingredients must be cited in Ayurvedic Pharmacopoeia of India (API).";

    if (wizardAnswers.use === "cosmetic") {
      category = "Ayurvedic Cosmetic";
      authority = "State AYUSH Licensing Authority (Rule 158-B Cosmetic Schedule)";
      licenseForm = "Form 32-A (Cosmetics Manufacturing License)";
      testingRequirements = "Dermal toxicity patch testing, heavy metal clearance, microbiological limits.";
      ipRecommendation = "Trademark (Class 3) + Container Industrial Design (Designs Act 2000).";
      tkRelevance = "Herbs with known skin brightening (Varnya) or hair nourishing (Keshya) properties.";
    } else if (wizardAnswers.use === "dietary" || (wizardAnswers.classical === "yes" && wizardAnswers.use === "wellness")) {
      category = "Ayurveda Aahar (Nutraceutical / Food Supplement)";
      authority = "Food Safety and Standards Authority of India (FSSAI)";
      licenseForm = "FSSAI Central / State License (Ayurveda Aahar Regulations 2022)";
      testingRequirements = "Food safety standards, nutritional analysis, absence of synthetic vitamins/minerals unless permitted.";
      ipRecommendation = "Trademark (Class 30/32 - Food & Beverages).";
      tkRelevance = "Must strictly comply with recipes/processes in Schedule A authoritative treatises.";
    } else if (wizardAnswers.classical === "yes" && wizardAnswers.use === "therapeutic") {
      category = "Classical Ayurvedic Medicine (Shastriya)";
      authority = "State AYUSH Licensing Authority";
      licenseForm = "Form 25-D (Manufacture of Ayurvedic / Siddha / Unani classical drugs)";
      testingRequirements = "Conformity to Ayurvedic Formulary of India (AFI) or Ayurvedic Pharmacopoeia of India (API) standards.";
      ipRecommendation = "Classical name cannot be trademarked exclusively. Trademark unique manufacturer prefix/logo.";
      tkRelevance = "Directly documented in classical treatises (Charaka, Sushruta, Sahasrayogam). Not patentable.";
    } else if (wizardAnswers.nature === "device") {
      category = "Ayurvedic Medical / Therapeutic Device";
      authority = "Central Drugs Standard Control Organization (CDSCO) / Medical Devices Rules";
      licenseForm = "Form MD-5 / MD-9 (Medical Device Manufacturing)";
      testingRequirements = "Biocompatibility, electrical safety, mechanical endurance tests.";
      ipRecommendation = "Patent for utility mechanism + Industrial Design registration for external aesthetic shape.";
      tkRelevance = "Modern engineering adapting ancient therapy techniques (e.g., automated Shirodhara device).";
    }

    // Target market adjustment
    if (wizardAnswers.market === "international") {
      category += " (Export Configuration)";
      authority += " + Export Inspection Council / US FDA DSHEA / EU EMA Herbal Monograph";
      ipRecommendation += " + Madrid Protocol Trademark filing.";
    }

    // Populate result elements
    document.getElementById("resCategoryTitle").textContent = category;
    document.getElementById("resAuthority").textContent = authority;
    document.getElementById("resLicense").textContent = licenseForm;
    document.getElementById("resTesting").textContent = testingRequirements;
    document.getElementById("resIP").textContent = ipRecommendation;
    document.getElementById("resTK").textContent = tkRelevance;
  }

  // -------------------------------------------------------------
  // 7. Dashboard Interactive Case Switcher
  // -------------------------------------------------------------
  const DASHBOARD_CASES = {
    case1: {
      ipTitle: "Patent & Trademark (Class 5)",
      ipBadge: "REQUIRES REVIEW",
      ipBadgeClass: "requires-review",
      ipMain: "Synergistic Polyherbal Capsule for Glycemic Control",
      ipDesc: "Section 3(p) exclusion applies for known herbs (Gymnema + Fenugreek). Synergy data required to prove non-obvious therapeutic benefit.",
      ipChecklist: [
        "Prior art search conducted on TKDL database",
        "Empirical in-vitro synergy test documented",
        "Trademark brand search for coined name"
      ],
      regTitle: "AYUSH Proprietary Medicine",
      regBadge: "REQUIRES REVIEW",
      regBadgeClass: "requires-review",
      regMain: "State AYUSH Licensing Authority (Rule 158-B)",
      regDesc: "Requires Form 25-D manufacturing application with proof of textual safety for all botanical ingredients.",
      regChecklist: [
        "Pharmacopoeial API limits validated",
        "Heavy metal batch release testing scheduled",
        "GMP Schedule T compliance verified"
      ],
      tkTitle: "Traditional Knowledge & ABS",
      tkBadge: "ACTION NEEDED",
      tkBadgeClass: "not-verified",
      tkMain: "Biological Diversity Act (Section 6 NBA Approval)",
      tkDesc: "Formulation sources biological resources from Indian forests/farms. Mandatory NBA Form III filing before patent grant.",
      tkChecklist: [
        "TKDL cited texts mapped (Charaka Chikitsa 6)",
        "NBA Form III application pending clearance",
        "State Biodiversity Board (SBB) intimation"
      ],
      nextTitle: "Immediate Action Plan",
      nextBadge: "VERIFIED",
      nextBadgeClass: "verified",
      nextMain: "4-Phase Commercialization Roadmap",
      nextDesc: "Sequential execution path to secure intellectual property rights and regulatory clearances without infringement risk.",
      nextChecklist: [
        "1. Complete synergy validation tests",
        "2. Submit Form III to National Biodiversity Authority",
        "3. File AYUSH Form 25-D with State Licensing Authority",
        "4. Register trademark before marketing launch"
      ]
    },

    case2: {
      ipTitle: "Trademark & Packaging Design",
      ipBadge: "VERIFIED",
      ipBadgeClass: "verified",
      ipMain: "Brand Protection for Classical Chyawanprash Formulation",
      ipDesc: "Generic classical Sanskrit recipe is public domain. Exclusive brand protection rests on coined logo trademark and custom jar design.",
      ipChecklist: [
        "Madrid System international TM filed",
        "Industrial Design for jar registered",
        "No exclusive claim on word 'Chyawanprash'"
      ],
      regTitle: "Ayurveda Aahar / US FDA DSHEA",
      regBadge: "VERIFIED",
      regBadgeClass: "verified",
      regMain: "FSSAI Ayurveda Aahar & Export Clearance",
      regDesc: "Marketed as Dietary Supplement in USA (DSHEA) and Ayurveda Aahar in India. Complies with 21 CFR Part 111 GMP.",
      regChecklist: [
        "Certificate of Pharmaceutical Product (CoPP) issued",
        "California Prop 65 heavy metal testing passed",
        "FSSAI Schedule A compliance confirmed"
      ],
      regDate: "Audited Q3 2026",
      tkTitle: "TKDL & Defensive Heritage",
      tkBadge: "VERIFIED",
      tkBadgeClass: "verified",
      tkMain: "Charaka Samhita Classical Prior Art",
      tkDesc: "Publicly documented classical preparation. Defensive protection actively maintained by TKDL preventing biopiracy.",
      tkChecklist: [
        "Reference: Charaka Samhita Rasayana Adhyaya",
        "TKDL classification verified (IPC A61K 36/00)",
        "Zero biopiracy patent conflicts"
      ],
      nextTitle: "Export Compliance Roadmap",
      nextBadge: "VERIFIED",
      nextBadgeClass: "verified",
      nextMain: "Global Distribution Checklist",
      nextDesc: "Final packaging audits and customs harmonized system (HS Code 3004.90.11) verification.",
      nextChecklist: [
        "1. Finalize US FDA structure/function claims",
        "2. Confirm tamper-evident seal verification",
        "3. Monitor export batch microbial certificates",
        "4. Renew Ayush Premium Mark certification"
      ]
    },

    case3: {
      ipTitle: "Cosmetic Design & Trademark (Class 3)",
      ipBadge: "VERIFIED",
      ipBadgeClass: "verified",
      ipMain: "Herbal Anti-Acne Facial Serum",
      ipDesc: "Topical cosmetic formulation with tea tree, turmeric, and aloe vera. Protected via Class 3 trademark and dropper bottle design.",
      ipChecklist: [
        "Trademark registered for distinctive brand name",
        "Dropper applicator registered under Designs Act",
        "Process patent filed for clear nano-emulsion"
      ],
      regTitle: "AYUSH Cosmetic License (Form 32-A)",
      regBadge: "REQUIRES REVIEW",
      regBadgeClass: "requires-review",
      regMain: "State AYUSH Licensing Authority Cosmetic Wing",
      regDesc: "Cosmetic license application under Rule 158-B. Must ensure packaging avoids therapeutic or prescription drug claims.",
      regChecklist: [
        "Dermatological patch test documentation complete",
        "Ingredient list follows Latin botanical format",
        "No claims of curing medical cystic acne"
      ],
      tkTitle: "Traditional Knowledge Review",
      tkBadge: "VERIFIED",
      tkBadgeClass: "verified",
      tkMain: "Varnya (Complexion) Herbal Prior Art",
      tkDesc: "Herbal ingredients well-known in classical texts for skin wellness. Does not violate patent exclusivity of others.",
      tkChecklist: [
        "Sushruta Samhita references mapped",
        "Absence of synthetic hydroquinone verified",
        "Raw material fair-trade certificate on file"
      ],
      nextTitle: "Launch Readiness Protocol",
      nextBadge: "REQUIRES REVIEW",
      nextBadgeClass: "requires-review",
      nextMain: "Retail & D2C Distribution Readiness",
      nextDesc: "Final labeling verification and batch release protocols before e-commerce launch.",
      nextChecklist: [
        "1. Obtain final State AYUSH Form 32-A seal",
        "2. Validate stability testing at 40°C / 75% RH",
        "3. Complete GS1 barcode registration",
        "4. Brief marketing team on compliant cosmetic claims"
      ]
    }
  };

  function updateDashboardCase(caseKey) {
    const data = DASHBOARD_CASES[caseKey];
    if (!data) return;

    // Card 1: IP Protection
    const ipCard = document.getElementById("dashCardIP");
    ipCard.querySelector(".dash-card-title").innerHTML = `<span>🛡️</span> ${data.ipTitle}`;
    const b1 = ipCard.querySelector(".status-badge");
    b1.textContent = data.ipBadge;
    b1.className = `status-badge ${data.ipBadgeClass}`;
    ipCard.querySelector(".dash-card-main-text").textContent = data.ipMain;
    ipCard.querySelector(".dash-card-desc").textContent = data.ipDesc;
    ipCard.querySelector(".dash-checklist").innerHTML = data.ipChecklist.map(item => `<li><span class="dash-checklist-check">✓</span> ${item}</li>`).join("");

    // Card 2: Regulatory
    const regCard = document.getElementById("dashCardReg");
    regCard.querySelector(".dash-card-title").innerHTML = `<span>📋</span> ${data.regTitle}`;
    const b2 = regCard.querySelector(".status-badge");
    b2.textContent = data.regBadge;
    b2.className = `status-badge ${data.regBadgeClass}`;
    regCard.querySelector(".dash-card-main-text").textContent = data.regMain;
    regCard.querySelector(".dash-card-desc").textContent = data.regDesc;
    regCard.querySelector(".dash-checklist").innerHTML = data.regChecklist.map(item => `<li><span class="dash-checklist-check">✓</span> ${item}</li>`).join("");

    // Card 3: TK & ABS
    const tkCard = document.getElementById("dashCardTK");
    tkCard.querySelector(".dash-card-title").innerHTML = `<span>🌱</span> ${data.tkTitle}`;
    const b3 = tkCard.querySelector(".status-badge");
    b3.textContent = data.tkBadge;
    b3.className = `status-badge ${data.tkBadgeClass}`;
    tkCard.querySelector(".dash-card-main-text").textContent = data.tkMain;
    tkCard.querySelector(".dash-card-desc").textContent = data.tkDesc;
    tkCard.querySelector(".dash-checklist").innerHTML = data.tkChecklist.map(item => `<li><span class="dash-checklist-check">✓</span> ${item}</li>`).join("");

    // Card 4: Next Steps
    const nextCard = document.getElementById("dashCardNext");
    nextCard.querySelector(".dash-card-title").innerHTML = `<span>🎯</span> ${data.nextTitle}`;
    const b4 = nextCard.querySelector(".status-badge");
    b4.textContent = data.nextBadge;
    b4.className = `status-badge ${data.nextBadgeClass}`;
    nextCard.querySelector(".dash-card-main-text").textContent = data.nextMain;
    nextCard.querySelector(".dash-card-desc").textContent = data.nextDesc;
    nextCard.querySelector(".dash-checklist").innerHTML = data.nextChecklist.map(item => `<li><span class="dash-checklist-check">✓</span> ${item}</li>`).join("");
  }

  caseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      caseBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cKey = btn.getAttribute("data-case");
      updateDashboardCase(cKey);
    });
  });

  // -------------------------------------------------------------
  // Initial Setup
  // -------------------------------------------------------------
  renderIPRGuides();
  updateWizardUI();
  updateDashboardCase("case1");
  setLanguage("en");

  // Wire up hero CTA buttons
  const heroAskBtn = document.getElementById("heroAskBtn");
  const heroExploreBtn = document.getElementById("heroExploreBtn");

  if (heroAskBtn) {
    heroAskBtn.addEventListener("click", () => {
      document.getElementById("askSection").scrollIntoView({ behavior: "smooth" });
      if (queryInput) queryInput.focus();
    });
  }

  if (heroExploreBtn) {
    heroExploreBtn.addEventListener("click", () => {
      document.getElementById("guideSection").scrollIntoView({ behavior: "smooth" });
    });
  }
});
