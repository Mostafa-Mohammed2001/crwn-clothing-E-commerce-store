// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore, // get the database
  doc, //get the document instance
  getDoc, // get the document data
  setDoc, // set the document data
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9rHMClBogaWXLRehOYVUM51WXoaRWpes",
  authDomain: "crwn-store-project.firebaseapp.com",
  projectId: "crwn-store-project",
  storageBucket: "crwn-store-project.appspot.com",
  messagingSenderId: "999361069378",
  appId: "1:999361069378:web:cc3b540bfea856f816c8db",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Google auth provider class
const provider = new GoogleAuthProvider();

// force user to choose an account
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// check if the docment exists or not and if not exists => create a new one
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userAuth);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("create user error", error.message);
    }
  }
  return userDocRef;
};
