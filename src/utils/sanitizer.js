/**
 * Utility functions for security and sanitization.
 */

/**
 * Sanitizes user input to prevent basic XSS when DOMPurify is not available.
 * @param {string} str - The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitizeInputFallback(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Main sanitization function that uses DOMPurify if available, else falls back.
 * @param {string} str - The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitize(str) {
    if (typeof DOMPurify !== 'undefined') {
        return DOMPurify.sanitize(str);
    }
    return sanitizeInputFallback(str);
}

// Conditionally export for testing in Node.js / Jest
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sanitize,
        sanitizeInputFallback
    };
} else {
    window.AppSecurity = {
        sanitize
    };
}
