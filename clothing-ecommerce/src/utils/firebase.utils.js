import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAgHynM1lNgW3xPcdmZ75SgAd0B9mJSiDs",
  authDomain: "clothing-ecommer-web-app.firebaseapp.com",
  projectId: "clothing-ecommer-web-app",
  storageBucket: "clothing-ecommer-web-app.appspot.com",
  messagingSenderId: "557011440532",
  appId: "1:557011440532:web:b83e5f5c6f18cb4a42f581",
  measurementId: "G-Y01Z3RCNEG",
};

//Creates an instance of database according to config above
const firebaseApp = initializeApp(firebaseConfig);

//-------------------------AUTH STAFF------------------

export const auth = getAuth();

//Google
const googleProvider = new GoogleAuthProvider(); //It is essentially class
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);

//-------------------------FIRESTORE DB------------------

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  //Reference keyword is special type of object that firestore uses talking about actual instance of a document model
  const userDocRef = doc(db, "users", userAuth.uid); //doc(db,collectionName,uniqueId)
  //If this users collection not exist firestore generates automatically

  // Snapshot equals object with data.
  const userSnapShot = await getDoc(userDocRef);
  //In this phase data not exist yet !

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("erro when creating user", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// This method is example of observer pattern . And we need this because when every time user login or logout we have to
// add setCurrentUser below that scope and this is not a best practice
// Also this method keep track user sign in or sign out
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
