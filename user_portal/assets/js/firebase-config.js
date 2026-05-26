// ============================================
// FIREBASE CONFIGURATION - WORKING VERSION
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAQS17Nd6pD2C8CcNDyhi2T10_WY-CGQKA",
    authDomain: "wellmeadows-73b0f.firebaseapp.com",
    projectId: "wellmeadows-73b0f",
    storageBucket: "wellmeadows-73b0f.firebasestorage.app",
    messagingSenderId: "999831131104",
    appId: "1:999831131104:web:e69c9880b1295056ff5185"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { 
    auth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    sendPasswordResetEmail,
    googleProvider,
    signInWithPopup
};