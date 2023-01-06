import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider(auth)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateProfileInfo = (userName, photUrl) => {
    return updateProfile(auth.currentUser, { displayName: userName, photoURL: photUrl })
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const googleSignUp = () => {
    return signInWithPopup(auth, GoogleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    updateProfileInfo,
    login,
    googleSignUp

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;