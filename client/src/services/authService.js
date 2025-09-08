// src/services/authService.js
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Register
export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login with email/password
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Logout
export const logoutUser = () => signOut(auth);

// Track user state
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

//Google Login
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
