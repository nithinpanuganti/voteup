// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA16xwzUKFXmCBavMOFsWKbX7bXEGnd8w",
  authDomain: "electo-voto.firebaseapp.com",
  projectId: "electo-voto",
  storageBucket: "electo-voto.firebasestorage.app",
  messagingSenderId: "750297433472",
  appId: "1:750297433472:web:37621a23faadc7b2b32d65",
  measurementId: "G-8XGXCFJGCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Authenticate Anonymously
signInAnonymously(auth).then(() => {
    console.log("Firebase Auth: Logged in anonymously successfully.");
    logEvent(analytics, 'login', { method: 'anonymous' });
}).catch((error) => {
    console.error("Firebase Auth Error:", error);
});

/**
 * Expose function globally to allow logging events to Firestore from other scripts
 * @param {string} actionType - Type of the action (e.g., 'eligibility_check', 'chat_message')
 * @param {object} details - Additional metadata
 */
window.logActionToDB = async (actionType, details = {}) => {
    try {
        // Only log if auth is established, though addDoc handles this generally
        await addDoc(collection(db, "app_interactions"), {
            action: actionType,
            details: details,
            timestamp: serverTimestamp()
        });
        
        // Also log to Google Analytics
        logEvent(analytics, actionType, details);
    } catch (e) {
        console.error("Firebase Firestore Error: Could not save interaction", e);
    }
};

// Log an initial page view to DB
window.logActionToDB('page_view', { path: window.location.pathname });
