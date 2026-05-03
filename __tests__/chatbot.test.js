const { generateBotResponse, sanitizeInput, botResponses } = require('../js/chatbot');

describe('Chatbot Logic', () => {
    // We mock currentLang implicitly since it's defined in the global scope in app.js
    // but in test environment without app.js it might fail.
    // However, chatbot.js handles fallback gracefully.
    beforeAll(() => {
        global.currentLang = 'en';
    });

    test('generateBotResponse should return intent response for matching keywords', () => {
        const response = generateBotResponse('how do I register?');
        expect(response).toContain('Form 6');
    });

    test('generateBotResponse should return fallback for unknown keywords', () => {
        const response = generateBotResponse('what is the capital of India?');
        expect(response).toBe(botResponses.en.fallback);
    });

    test('sanitizeInput should escape HTML tags', () => {
        const input = '<script>alert(1)</script>';
        const sanitized = sanitizeInput(input);
        expect(sanitized).not.toContain('<script>');
        expect(sanitized).toContain('&lt;script&gt;');
    });
});
