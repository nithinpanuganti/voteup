// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-storage.js";

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
const storage = getStorage(app);

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

/**
 * Mocks a document upload to Firebase Storage for demonstration.
 * @param {File} file - The file to upload.
 * @returns {Promise<string>} The download URL of the uploaded file.
 */
window.uploadDocument = async (file) => {
    try {
        const storageRef = ref(storage, `user_docs/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        
        // Log the upload event to Firestore as well
        await window.logActionToDB('document_upload', { fileName: file.name });
        
        return downloadURL;
    } catch (e) {
        console.error("Firebase Storage Error: Could not upload document", e);
        throw e;
    }
};

