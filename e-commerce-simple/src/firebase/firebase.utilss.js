import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore, setDoc, writeBatch } from "firebase/firestore";

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

//Initialize Firebase Db
const db = getFirestore(app);

//Initialize Auth
const auth = getAuth(app);


//Get A New Write Batch
const batch = writeBatch(db)


export const addCollectionAndItems = async (collectionKey , objectsToAdd)=>{
    const categoriesRef = doc(collection(db,collectionKey));

  
    objectsToAdd.forEach(obj=>{
      await setDoc(categoriesRef,obj)
  
    })
  
    return await batch.commit(); // returns a promises
    
  }