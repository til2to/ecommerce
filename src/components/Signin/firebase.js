import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCwcSm8DeCABGJ2iEawOENgUfiFdZrwFf0",
  authDomain: "ecommerce-f82d1.firebaseapp.com",
  projectId: "ecommerce-f82d1",
  storageBucket: "ecommerce-f82d1.appspot.com",
  messagingSenderId: "504509720798",
  appId: "1:504509720798:web:282753dd118438a2243a4f",
  measurementId: "G-CMHK3KTR74"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export {auth, db, provider};
