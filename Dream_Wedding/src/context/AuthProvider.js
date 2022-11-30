import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logOut =() =>{

        localStorage.removeItem('token')
        return signOut(auth)
    }

    const updateUserProfile = (profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => { 
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }

    }, [])

    const authInfo = {logIn,createUser,logOut,googleSignIn,updateUserProfile,user,loading};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    
        </div>
    );
};

export default AuthProvider;