import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth= getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const googleSigin =()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const githubSignin =()=>{
        return signInWithPopup(auth, githubProvider);
    }

    const user ={name:'billal'}
    const authInfo ={
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