# Election Guide Assistant 🗳️

An interactive, responsive web application designed to educate first-time voters and students on the Indian electoral process under the Election Commission of India (ECI). Built strictly with native web technologies for high performance and accessibility.

## 🚀 Live Demo
*(You can host this project easily on GitHub Pages or Vercel. Once deployed, add your link here!)*

## ✨ Key Features

1. **Bilingual Support (EN/TE)**
   - Instantly switch between English and Telugu without any page reloads.
   - Built via a centralized translation state object (`APP_DATA`) ensuring content uniformity.

2. **Visual Step-by-Step Voter Journey**
   - Interactive visual guide covering Registration, Verification, Candidate Info, Polling Day, and Results.
   - Animated progress tracking and dynamic DOM rendering.

3. **Keyword-Based AI Assistant Chatbot**
   - A responsive chatbot widget to answer common queries regarding eligibility, registration, forms, and documents.
   - Operates entirely client-side using keyword mapping and intent detection.

4. **Eligibility Checker & Timeline**
   - Quick form to check voting eligibility based on age and citizenship.
   - CSS-driven interactive timeline outlining the standard election phases from Notification to Counting.

5. **Modern, Accessible UI**
   - Built on a "Trust Palette" (Deep Blues, Soft Whites, Action Oranges) designed to invoke official credibility while staying modern.
   - Fully responsive layout: from mobile (390px) up to large desktop monitors (1920px+).
   - Utilizes glassmorphism, smooth CSS transitions, and FontAwesome typography.

## 🛠️ Technology Stack

- **HTML5**: Semantic document structure ensuring solid SEO and accessibility.
- **CSS3**: Modern UI layout techniques (Grid/Flexbox), CSS Variables, micro-animations, and pure CSS timelines (No frameworks like Tailwind or Bootstrap).
- **Vanilla JavaScript**: Pure ES6 logic to manage state, chatbot intelligence, dynamic DOM manipulations, and bilingual toggle features.

## 📁 Project Structure

```text
election-process-education/
│
├── index.html            # Main semantic entry point
├── css/
│   └── styles.css        # Theming, Layouts, and Animations
├── js/
│   ├── app.js            # Global state, i18n logic, view switching
│   └── chatbot.js        # Keyword-matching chatbot intelligence
└── README.md             # Project documentation
```

## ⚙️ How to Run Locally

Since this application is built entirely using vanilla frontend technologies without external build dependencies, running it is incredibly simple:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nithinpanuganti/voteup.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd voteup
   ```
3. **Open the application:**
   Simply double-click `index.html` to open it in your default web browser, or use an extension like VS Code's "Live Server" for hot-reloading during development.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! If you're a developer or designer interested in civic tech, feel free to fork this project and submit a Pull Request.

## 📄 License
This project is for educational purposes. 

---
*Built with ❤️ to empower the next generation of voters.*
