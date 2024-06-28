// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU2778vnRNJLvjzMiwiaEcN9KE6kHZap0",
  authDomain: "todonowornever-1aee7.firebaseapp.com",
  projectId: "todonowornever-1aee7",
  storageBucket: "todonowornever-1aee7.appspot.com",
  messagingSenderId: "962913625369",
  appId: "1:962913625369:web:f3f468e374e615496fd188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

// Function to sign in with email and password
const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // The UID can be accessed using user.uid
    console.log('User signed in:', user.uid);
    return user;
  } catch (error) {
    console.error('Error signing in with email and password:', error);
    throw error;
  }
};

// Function to register with email and password
const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // The UID can be accessed using user.uid
    console.log('User registered:', user.uid);
    return user;
  } catch (error) {
    console.error('Error registering with email and password:', error);
    throw error;
  }
};

export { auth, app, GoogleProvider, signInWithEmail, registerWithEmail };
