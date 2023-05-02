import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth= getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {


    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSigin =()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const githubSignin =()=>{
        return signInWithPopup(auth, githubProvider);
    }





    const user ={name:'billal'}
    const authInfo ={
        createUser,
        loginUser,
        googleSigin,
        githubSignin,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;