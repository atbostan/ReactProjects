// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
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
  measurementId: "G-XW10WGS97L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const fireStore = getFirestore(app);

export const createUser = async (password, email) => {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  return credential;
};

export const signIn = async(password,email)=>{
  const signCredential = await signInWithEmailAndPassword(auth,email,password)
  return signCredential
}
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = collection(fireStore, "users");
  const docRef = doc(fireStore, "users", `${userAuth.uid}`);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = Date();

    try {
      await setDoc(doc(userRef, userAuth.uid), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return await getDoc(docRef);
};
export default app;
