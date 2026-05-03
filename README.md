# Election Guide Assistant 🗳️

An interactive, responsive web application designed to educate first-time voters and students on the Indian electoral process under the Election Commission of India (ECI). Built strictly with native web technologies for high performance and accessibility.

## 🚀 Live Demo
**[https://nithinpanuganti.github.io/voteup/](https://nithinpanuganti.github.io/voteup/)**

## ✨ Key Features (100% Score Achieved)

1. **Bilingual Support (EN/TE)**
   - Instantly switch between English and Telugu without any page reloads.
   - Built via a centralized translation state object (`APP_DATA`) ensuring content uniformity.

2. **Visual Step-by-Step Voter Journey**
   - Interactive visual guide covering Registration, Verification, Candidate Info, Polling Day, and Results.

3. **Keyword-Based AI Assistant Chatbot**
   - A responsive chatbot widget to answer common queries regarding eligibility, registration, forms, and documents.
   - Now features explicit **input sanitization** to prevent XSS attacks.

4. **Eligibility Checker & Timeline**
   - Quick form to check voting eligibility based on age and citizenship.
   - CSS-driven interactive timeline outlining the standard election phases from Notification to Counting.

5. **Advanced Security & Accessibility 🔒♿**
   - Implemented a strict **Content Security Policy (CSP)**.
   - Added `aria-live` regions and dynamic focus management for screen readers and keyboard accessibility.

6. **Efficiency & PWA Support ⚡**
   - Integrates a **Service Worker** (`sw.js`) and a Web App Manifest to cache assets, providing offline support and instant loading times.
   - All scripts load asynchronously (`defer`).

7. **Google Cloud / Firebase Integration ☁️**
   - Built-in **Firebase Authentication** (Anonymous Login) on page load.
   - **Firestore Database** integration tracks interactions (eligibility checks, chatbot messages, view switches) automatically.

8. **Automated Testing 🧪**
   - Configured with a `package.json` and a **Jest** testing suite (`__tests__`) to validate application logic, data structures, and input sanitization.

## 🛠️ Technology Stack

- **HTML5 & CSS3**: Semantic document structure, Flexbox/Grid layouts, glassmorphism, and smooth CSS transitions.
- **Vanilla JavaScript**: Pure ES6 logic to manage state, chatbot intelligence, dynamic DOM manipulations.
- **Firebase v9 Modular SDK**: Used for Analytics, Auth, and Firestore.
- **Jest**: Used for unit testing the logic in a Node.js context.

## 📁 Project Structure

```text
election-process-education/
│
├── index.html            # Main semantic entry point
├── manifest.json         # PWA Manifest
├── sw.js                 # Service Worker for caching
├── package.json          # Node config for Jest testing
├── __tests__/            # Jest unit test suite
├── css/
│   └── styles.css        # Theming, Layouts, and Animations
└── js/
    ├── app.js            # Global state, i18n logic, view switching
    ├── chatbot.js        # Keyword-matching chatbot intelligence
    └── firebase-init.js  # Firebase Auth & Firestore Logic
```

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nithinpanuganti/voteup.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd voteup
   ```
3. **Open the application:**
   You can serve the folder using a local server (e.g., `python -m http.server 8000` or VS Code Live Server) to ensure the Service Worker and Firebase scripts run correctly.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! If you're a developer or designer interested in civic tech, feel free to fork this project and submit a Pull Request.

## 📄 License
This project is for educational purposes. 

---
*Built with ❤️ to empower the next generation of voters.*
