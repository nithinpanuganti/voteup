/**
 * @jest-environment jsdom
 */
const { APP_DATA, switchToView } = require('../src/app');

describe('App Logic & DOM Integration', () => {
    beforeEach(() => {
        // Setup a mock DOM structure for testing view switching
        document.body.innerHTML = `
            <section id="dashboard-view" class="view-section active"></section>
            <section id="guide-view" class="view-section hidden">
                <h2 id="guide-header">Voter's Journey</h2>
            </section>
        `;
        
        // Mock global window properties
        window.logActionToDB = jest.fn();
    });

    test('APP_DATA contains english and telugu dictionaries', () => {
        expect(APP_DATA).toHaveProperty('en');
        expect(APP_DATA).toHaveProperty('te');
    });

    test('switchToView hides current view and shows target view', () => {
        switchToView('guide-view');
        
        const dashboard = document.getElementById('dashboard-view');
        const guide = document.getElementById('guide-view');
        
        expect(dashboard.classList.contains('hidden')).toBe(true);
        expect(guide.classList.contains('active')).toBe(true);
        expect(guide.classList.contains('hidden')).toBe(false);
    });

    test('switchToView shifts focus to target heading for accessibility', () => {
        switchToView('guide-view');
        const heading = document.getElementById('guide-header');
        
        // Check if focus was managed
        expect(document.activeElement).toBe(heading);
        expect(heading.getAttribute('tabindex')).toBe('-1');
    });

    test('switchToView logs the action to Firebase if available', () => {
        switchToView('guide-view');
        expect(window.logActionToDB).toHaveBeenCalledWith('view_switched', { view: 'guide-view' });
    });
});
