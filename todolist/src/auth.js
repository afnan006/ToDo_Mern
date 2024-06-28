// src/auth.js
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, GoogleProvider } from "./firebase";

export const signInWithGoogle = () => {
  return signInWithPopup(auth, GoogleProvider);
};

export const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};