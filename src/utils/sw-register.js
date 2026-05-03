/**
 * Registers the Service Worker for PWA offline capabilities.
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered successfully:', registration.scope);
            })
            .catch(err => {
                console.error('SW registration failed:', err);
            });
    });
}
