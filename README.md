# Cota de Volta

[![Deploy](https://img.shields.io/badge/deploy-netlify-00C7B7?style=flat-square&logo=netlify)](https://cotadevolta.netlify.app)
[![Status](https://img.shields.io/badge/status-production-brightgreen?style=flat-square)]()
[![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-red?style=flat-square)]()

> Commercial platform for consortium statement analysis and value recovery for clients across Brazil.

---

## 📌 About the Project

**Cota de Volta** specializes in **technical analysis of consortium statements**. The website is the main client acquisition channel — it presents the services, generates qualified leads via form and WhatsApp, and conveys credibility to the brand.

### What the company does

- Analyzes active or cancelled consortium statements
- Identifies improper charges, abusive discounts, and recoverable amounts
- Guides clients on administrative or legal measures
- Refers clients to specialized lawyers when needed

---

## ✨ Features

### Interface & Experience
- Scroll-triggered entrance animations (AOS)
- Automatic and continuous partner companies carousel (Splide.js)
- Fixed header with dynamic scroll behavior
- Animated accordion in the FAQ section
- Progress bar animation via IntersectionObserver
- Always-visible floating WhatsApp button
- Fully responsive design for all devices

### Contact Form
- Contact popup with field validation
- Submission via REST API (Web3Forms)
- Anti-spam protection with hCaptcha
- WhatsApp integration for direct support

---

## 🛠️ Tech Stack

### Core

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Modular styling, global variables and responsiveness with media queries |
| **JavaScript (ES6+)** | Interactivity, animations and form submission via Fetch API |

### Libraries

| Library | Version | Usage |
|---|---|---|
| [AOS](https://michalsnik.github.io/aos/) | 2.3.4 | Scroll-triggered entrance animations |
| [Splide.js](https://splidejs.com/) | Latest | Partner companies carousel |
| [Splide Auto Scroll](https://splidejs.com/extensions/auto-scroll/) | Latest | Continuous auto-scroll extension |

### Services

| Service | Usage |
|---|---|
| [Web3Forms](https://web3forms.com/) | Contact form submission via REST API |
| [hCaptcha](https://www.hcaptcha.com/) | Anti-spam protection on the form |
| [Google Fonts](https://fonts.google.com/) | **Poppins** font used throughout the project |
| [WhatsApp API](https://wa.me/) | Direct link for customer support |
| [Netlify](https://netlify.com/) | Hosting and continuous deployment via GitHub |

---

## 📁 Project Structure

```
cotadevolta/
├── assets/
│   ├── icons/              # Icons (SVG/PNG)
│   └── images/             # Images, logo and partner logos
├── src/
│   ├── aos.js              # AOS initialization with global settings
│   ├── config.js           # Global config (price, policy date)
│   ├── index.js            # Fixed header scroll and dynamic main_header
│   ├── popup.js            # Contact popup creation, control and submission
│   ├── privacidade.js      # Privacy policy page dynamic content
│   ├── progressbar.js      # Progress bar animation (IntersectionObserver)
│   ├── schema.js           # Structured data (JSON-LD schema)
│   ├── splide.js           # Carousel initialization and configuration
│   └── summary.js          # FAQ accordion
├── styles/
│   ├── main/
│   │   ├── contact.css             # Contact section
│   │   ├── enterprises.css         # Partners section with carousel
│   │   ├── extra.css               # Floating WhatsApp button and "Talk to us"
│   │   ├── faq.css                 # FAQ section with animated accordion
│   │   ├── feedbacks.css           # Testimonials section
│   │   ├── footer.css              # Footer
│   │   ├── general.css             # Reset, global CSS variables and base styles
│   │   ├── header.css              # Fixed header and dynamic main_header
│   │   ├── howitworks.css          # "How It Works" section with progress bar
│   │   ├── main.css                # Hero section
│   │   ├── talkwithus_popup.css    # Contact form popup
│   │   └── whoweare.css            # "Who We Are" section
│   └── policy/
│       └── privacy_policy.css      # Privacy policy page styles
├── index.html              # Main page
└── privacidade.html        # Privacy policy page
```

---

## 📄 License

© 2026 Cota de Volta. All rights reserved.

This repository is public for portfolio and transparency purposes only. No part of this code, design, or content may be copied, modified, distributed, or used in any form without explicit written permission from the author.
