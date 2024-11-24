import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_Messaging_Sender_Id,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_App_Id,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_Measurement_Id,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);