import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCwcSm8DeCABGJ2iEawOENgUfiFdZrwFf0",
  authDomain: "ecommerce-f82d1.firebaseapp.com",
  projectId: "ecommerce-f82d1",
  storageBucket: "ecommerce-f82d1.appspot.com",
  messagingSenderId: "504509720798",
  appId: "1:504509720798:web:282753dd118438a2243a4f",
  measurementId: "G-CMHK3KTR74"
};

// initialize firebase
initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export {auth, db};