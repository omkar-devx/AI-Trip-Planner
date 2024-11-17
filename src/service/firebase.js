import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk1A90IaXdTlq9I0X-dagFhhWCwNSxCXE",
  authDomain: "trip-planner-444fb.firebaseapp.com",
  projectId: "trip-planner-444fb",
  storageBucket: "trip-planner-444fb.firebasestorage.app",
  messagingSenderId: "117293498230",
  appId: "1:117293498230:web:fb20dfdaac8a2246598457",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
