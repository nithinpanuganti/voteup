/**
 * @jest-environment jsdom
 */
const { generateBotResponse, botResponses } = require('../src/components/chatbot');

describe('Chatbot Logic', () => {
    beforeAll(() => {
        global.currentLang = 'en';
    });

    test('generateBotResponse should return intent response for matching keywords', () => {
        const response = generateBotResponse('how do I register?');
        expect(response).toContain('Form 6');
    });

    test('generateBotResponse should return fallback for unknown keywords', () => {
        const response = generateBotResponse('random text that should not match');
        expect(response).toBe(botResponses.en.fallback);
    });

    test('generateBotResponse should work for Telugu when language is switched', () => {
        global.currentLang = 'te';
        const response = generateBotResponse('నమోదు'); // Registration in Telugu
        expect(response).toContain('ఫారం 6');
    });
});
