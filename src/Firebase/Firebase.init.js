import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeJHAwQVNafPv5sSiMjexSRUtnwBL-y6M",
  authDomain: "simple-firebase-ac3e0.firebaseapp.com",
  projectId: "simple-firebase-ac3e0",
  storageBucket: "simple-firebase-ac3e0.firebasestorage.app",
  messagingSenderId: "781065337526",
  appId: "1:781065337526:web:6278436dc54eb897a34417",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
