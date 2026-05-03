/**
 * @jest-environment jsdom
 */
const { sanitize, sanitizeInputFallback } = require('../src/utils/sanitizer');

describe('Sanitizer Utility', () => {
    test('sanitizeInputFallback should escape HTML tags', () => {
        const input = '<script>alert(1)</script>';
        const sanitized = sanitizeInputFallback(input);
        expect(sanitized).not.toContain('<script>');
        expect(sanitized).toContain('&lt;script&gt;');
    });

    test('sanitize should use fallback when DOMPurify is not available', () => {
        const input = '<b>Bold</b>';
        const sanitized = sanitize(input);
        expect(sanitized).toBe('&lt;b&gt;Bold&lt;/b&gt;');
    });
});
