
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'



 export const firebaseConfig = {
  apiKey: "AIzaSyDVO5BlldRRw8cmxD65ryBFav7l3azMWqA",
  authDomain: "playwrigth-app.firebaseapp.com",
  projectId: "playwrigth-app",
  storageBucket: "playwrigth-app.appspot.com",
  messagingSenderId: "324304758562",
  appId: "1:324304758562:web:c6139794ad5e0ad485e77b"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const login = ({email, password }: any) =>{
  return signInWithEmailAndPassword(auth, email,password)
}

export const register = ({email, password }: any) =>{
  return createUserWithEmailAndPassword(auth, email,password)
}