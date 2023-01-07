import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCAbatimlxAZ-tbwfw9Q_GgCvMX9Avf76Y",
  authDomain: "jtweet-7468f.firebaseapp.com",
  projectId: "jtweet-7468f",
  storageBucket: "jtweet-7468f.appspot.com",
  messagingSenderId: "723993765534",
  appId: "1:723993765534:web:96d6a788624eb5e22c7d8f"
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseAnalytics = getAnalytics(firebaseApp);