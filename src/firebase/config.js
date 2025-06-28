import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD8YUC3H9eGCpnBu5XEwLlNM5Jrf1teDds",
  authDomain: "mobile-as65d.firebaseapp.com",
  projectId: "mobile-as65d",
  storageBucket: "mobile-as65d.firebasestorage.app",
  messagingSenderId: "1043076304340",
  appId: "1:1043076304340:web:eeb52c96ac02cc8fcbda41"
};


const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);