// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgb-xQ0_PuBIJ-OnWqb_35kXvO4k07sy8",
  authDomain: "prepwise-3cd07.firebaseapp.com",
  projectId: "prepwise-3cd07",
  storageBucket: "prepwise-3cd07.firebasestorage.app",
  messagingSenderId: "293059904152",
  appId: "1:293059904152:web:1c0f414fbfd4d138f486ed",
  measurementId: "G-XCVV8QD2BQ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);