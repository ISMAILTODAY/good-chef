import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';

export const contextProvider = createContext(null);

const ContextProvider = ({ children }) => {
    // Loader
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);
    // create user
    const auth = getAuth(app);
    const createUser = (emai, password) => {
        return createUserWithEmailAndPassword(auth, emai, password)
    }

    // login user

    const handleSignUp = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logOut
    const handleLogOut = () => {
        return signOut(auth);
    }

    // login with google
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }
    // login with github
    const provider2 = new GithubAuthProvider();
    const signInWithGithub = () => {
        return signInWithPopup(auth, provider2);
    }



    // objerver

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            return unsubscribe();
        }
    }, [])
    // updateProfile
    const profileUpdate = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo

        })
    }




    // context value
    const info = {
        createUser,
        handleSignUp,
        handleLogOut,
        signInWithGoogle,
        signInWithGithub,
        profileUpdate,
        user,
        loading
    };



    return (
        <contextProvider.Provider value={info}>
            {children}
        </contextProvider.Provider>
    );
};

export default ContextProvider;