// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3yHFXPLtlod0lfYrM7s5_s3zoUMd0rfM",
  authDomain: "juleykawebsite.firebaseapp.com",
  projectId: "juleykawebsite",
  storageBucket: "juleykawebsite.firebasestorage.app",
  messagingSenderId: "520059467518",
  appId: "1:520059467518:web:740385071b364b18b557af",
  measurementId: "G-VTRHVWNNKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
