import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //function for create user using email and password
  const createUserUsingEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // function for google sign in
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // update profile
  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  // login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // creating logout function
  const logOut = () => {
    signOut(auth);
  };

  // creating a observer for user
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscriber();
    };
  }, []);

  const authInfo = {
    user,
    createUserUsingEmail,
    updateUserProfile,
    logOut,
    login,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
