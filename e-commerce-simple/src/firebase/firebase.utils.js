// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"
import "firebase/firestore"
import { getAuth ,signInWithPopup} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhuusVD9vySMl4XzsXow9HLXhYVCFLtBI",
  authDomain: "ecommerce-simple-app-556aa.firebaseapp.com",
  projectId: "ecommerce-simple-app-556aa",
  storageBucket: "ecommerce-simple-app-556aa.appspot.com",
  messagingSenderId: "120344504414",
  appId: "1:120344504414:web:364b7f5efa781216f8accf",
  measurementId: "G-XW10WGS97L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const fireStore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export  const signInWithGoogle = ()=> signInWithPopup(auth,provider);

export default app;