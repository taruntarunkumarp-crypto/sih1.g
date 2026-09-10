# 🌿 IP-SAKTI Sahayak

**“Your AI Guide for Ayurveda, Intellectual Property & Regulatory Compliance”**

---

## 📖 Overview

**IP-SAKTI Sahayak** is a modern, responsive frontend prototype designed for Ayurveda innovators, entrepreneurs, practitioners, and researchers. It bridges ancient Ayurvedic wisdom with modern Intellectual Property Rights (IPR) and regulatory frameworks under the **Ministry of Ayush**, **Office of the Controller General of Patents, Designs and Trade Marks (IP India)**, **Traditional Knowledge Digital Library (TKDL)**, **National Biodiversity Authority (NBA)**, and **FSSAI**.

---

## 🌟 Core Features & Pages

### 1. 🏠 Healthcare & AI Homepage
- **Hero Title:** *“Protect Your Ayurveda Innovation. Navigate IPR & Regulations with Confidence.”*
- **Two Primary CTAs:** **Ask Sahayak** and **Explore IPR**.
- **Permanent Guidance Disclaimer:** Notice explaining that guidance is educational and does not constitute formal legal advice.
- **Key Feature Highlights:** Section 3(p) Screening, TKDL & Prior Art, AYUSH & FSSAI Pathways, Biological Diversity (ABS) clearance.

### 2. 🤖 Ask Sahayak AI Interface
- **Jurisdiction Selector:** 🇮🇳 India vs 🌎 International.
- **Help Category Filter:** Patent, Trademark, Copyright, Geographical Indication (GI), Traditional Knowledge, Biodiversity / ABS, Product Regulation, General Question.
- **Interactive Prompt Suggestions:** Pre-loaded with realistic Ayurveda innovation scenarios (Herbal diabetes formulation, Turmeric cosmetic vs drug, Classical Chyawanprash export, Ashwagandha + Piperine NBA compliance).
- **Simulated AI Synthesis:** Dynamic analysis card showing:
  - **Sahayak Analysis Summary**
  - **Confidence Badge:** `Medium` / `High`
  - **Possible IP Route:** Novelty, Section 3(p) TK exclusion, Section 3(e) synergism requirements, Trademarking.
  - **Regulatory Consideration:** Classical Shastriya, Proprietary (Rule 158-B), Ayurveda Aahar (FSSAI 2022), or Cosmetic.
  - **TKDL & Prior Art Awareness:** Mapping against classical treatises (Charaka, Sushruta, Astanga Hridaya).
  - **Biological Diversity & ABS:** Mandatory National Biodiversity Authority (NBA) Form III requirements.
  - **Recommended Next Steps:** Sequential, numbered 5-step roadmap.
  - **Copy Report:** One-click clipboard copy of the full analysis.

### 3. 📚 Authoritative Sources Integration
- Clickable source cards for:
  - **IP India (CGPDTM)** - Patents Act 1970 & Trade Marks Act 1999
  - **Ministry of Ayush** - Drugs and Cosmetics Act 1940 (Chapter IV-A)
  - **Traditional Knowledge Digital Library (TKDL)** - CSIR prior-art registry
  - **National Biodiversity Authority (NBA)** - Biological Diversity Act 2002
  - **WIPO** - Intergovernmental Committee on IP and Genetic Resources
  - **FSSAI (Ayurveda Aahar)** - Food Safety and Standards Regulations 2022
- Interactive modal displaying the legal authority, statutory basis, jurisdiction, and official portal links.

### 4. 📜 Comprehensive IPR Guide
- Interactive cards for **Patents**, **Trademarks**, **Copyright**, **Geographical Indications (GI)**, **Industrial Designs**, **Traditional Knowledge**, and **Biodiversity / ABS**.
- Live search filter across topics.
- Detailed modal view with criteria and common pitfalls to avoid.

### 5. 📋 Product Classification Wizard
- Interactive 4-step wizard:
  - **Step 1:** Product type (Polyherbal formulation, standardized extract, topical cosmetic/oil, herbal food, or therapy device)
  - **Step 2:** Main intended use (Therapeutic treatment, general rasayana wellness, cosmetic beauty, or daily nutrition)
  - **Step 3:** Classical Ayurvedic text basis (Classical Shastriya, modified formulation, or novel combination)
  - **Step 4:** Target market (India domestic vs International export)
- **Preliminary Classification Output:** Classifies into Classical Medicine, Proprietary Medicine (Rule 158-B), Ayurveda Aahar, Cosmetic (Form 32-A), or Medical Device with licensing forms and mandatory testing requirements.

### 6. 📊 Compliance Dashboard Matrix
- 4-Card executive summary with status badges:
  - `VERIFIED`
  - `REQUIRES REVIEW`
  - `ACTION NEEDED`
- Interactive switchers for 3 demo scenarios:
  1. *Diabetic Herbal Capsule*
  2. *Classical Chyawanprash Export*
  3. *Anti-Acne Herbal Serum*

### 7. 🌐 Multilingual UI
- Instant translation switcher in navigation supporting:
  - English (EN)
  - Hindi (हिंदी)
  - Kannada (ಕನ್ನಡ)
  - Telugu (తెలుగు)
  - Tamil (தமிழ்)

### 8. 🛡️ Statutory Safety Rules
- Permanent statutory disclaimer across the header and footer:
  > *"IP-SAKTI Sahayak provides informational guidance based on referenced sources and does not provide legal advice. Always verify applicable laws and consult a qualified professional where necessary."*
- Zero fabricated legal citations; strictly references genuine statutory frameworks.

---

## 🚀 Running the Application

### Option A: Local Web Server (Already Running)
The local server is already running at:
```
http://localhost:3000/
```
To restart if ever stopped:
```bash
node server.js
```

### Option B: Direct Browser Open
You can open `index.html` directly in any web browser:
```
c:\Users\DELL\Desktop\sih1\index.html
```

---

## 📁 File Structure

```
sih1/
├── index.html         # Main semantic HTML structure & layout
├── css/
│   └── styles.css     # Modern Ayurveda + AI styling & design system
├── js/
│   ├── data.js        # Domain datasets, statutory sources, and multilingual translations
│   └── app.js         # Interactive controller (Chat AI simulation, Wizard, Dashboard, Modal)
├── server.js          # Zero-dependency local static server
└── README.md          # Comprehensive documentation
```
