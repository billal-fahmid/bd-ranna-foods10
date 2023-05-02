import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth= getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user , setUser] =useState({})

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logout = ()=>{
        return signOut(auth)
    }

    const googleSigin =()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const githubSignin =()=>{
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(LoggedInUser)=>{
            setUser(LoggedInUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])




    const authInfo ={
        createUser,
        loginUser,
        logout,
        googleSigin,
        githubSignin,
        user,
        auth
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;