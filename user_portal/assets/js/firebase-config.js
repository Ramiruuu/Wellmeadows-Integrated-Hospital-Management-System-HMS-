// assets/js/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    sendEmailVerification,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where, 
    orderBy,
    getDoc,
    setDoc,
    Timestamp
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

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
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// For test phone numbers - this allows testing without actual SMS
auth.settings.appVerificationDisabledForTesting = true;

// Collection references
const patientsCollection = collection(db, 'patients');
const appointmentsCollection = collection(db, 'appointments');

export { 
    auth, 
    db,
    patientsCollection,
    appointmentsCollection,
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    sendEmailVerification,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    GoogleAuthProvider,
    googleProvider,
    signInWithPopup,
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where, 
    orderBy,
    getDoc,
    setDoc,
    Timestamp
};