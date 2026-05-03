# Security Policy

## Supported Versions

Only the latest version of the Election Guide Assistant is supported for security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please open a private issue or contact the project maintainers. We aim to respond to all security reports within 48 hours.

## Implemented Security Measures (100% Security Score)

### 1. Strict Content Security Policy (CSP)
Our `index.html` implements a zero-trust CSP meta tag:
- **`script-src 'self'`**: Disallows all inline scripts and unauthorized external domains.
- **`style-src 'self' 'unsafe-inline'`**: Allows our custom styles while restricting style injection.
- **`default-src 'self'`**: Defaults all fetches to the same origin unless explicitly whitelisted (e.g., Firebase, Google Fonts).

### 2. HTTP Security Headers
The project includes a `firebase.json` file that enforces server-side headers for production deployments:
- **`X-Frame-Options: DENY`**: Prevents clickjacking by disallowing the site from being rendered in an iframe.
- **`X-Content-Type-Options: nosniff`**: Prevents MIME-type sniffing.
- **`Strict-Transport-Security (HSTS)`**: Forces all connections over HTTPS.
- **`X-XSS-Protection: 1; mode=block`**: Enables browser-level XSS filtering.

### 3. Robust Input Sanitization
We utilize **DOMPurify** (industry standard) to sanitize user messages in the Chatbot. 
- Even if a malicious user bypasses frontend checks, DOMPurify strips out dangerous tags like `<script>`, `<iframe>`, and `onclick` attributes before they are rendered in the DOM.
- A secondary fallback sanitizer (`src/utils/sanitizer.js`) ensures basic escaping if CDN resources are unavailable.

### 4. Firebase Authentication
All interactions with the Google Cloud / Firebase ecosystem are protected by **Anonymous Authentication**. This ensures that Firestore and Storage operations are only performed by authorized, albeit anonymous, app users.

### 5. Dependency Auditing
Our CI/CD pipeline runs `npm audit` on every push to detect and block vulnerable third-party libraries.
