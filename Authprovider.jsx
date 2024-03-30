import React, { createContext, useState } from 'react';


import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './src/firebase.config';
export const AuthContext =createContext(null)

const auth=getAuth(app)
const Authprovider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setloading]=useState(true)

const createUser=(email,password)=>{
    setloading(true)
  return  createUserWithEmailAndPassword(auth,email,password)
}

const signinUser=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


    const useinfo={
user,
loading,
createUser,
signinUser

    }
    return (
        <AuthContext.Provider value={useinfo} >
           { children}
        </AuthContext.Provider>
    );
};

export default Authprovider;