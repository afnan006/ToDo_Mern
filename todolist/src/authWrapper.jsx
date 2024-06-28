// src/AuthWrapper.jsx
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { signInWithGoogle, signInWithEmail, registerWithEmail, logout } from "./auth";
import LoginForm from './components/LoginForm.jsx';

const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignInWithEmail = async () => {
    try {
      await signInWithEmail(email, password);
    } catch (error) {
      console.error("Error signing in with email:", error);
    }
  };

  const handleRegisterWithEmail = async () => {
    try {
      await registerWithEmail(email, password);
    } catch (error) {
      console.error("Error registering with email:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!user) {
    return (
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSignInWithEmail={handleSignInWithEmail}
        handleRegisterWithEmail={handleRegisterWithEmail}
        handleSignInWithGoogle={handleSignInWithGoogle}
      />
    );
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      {children}
    </div>
  );
};

export default AuthWrapper;