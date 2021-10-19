import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,signInWithEmailAndPassword  } from "firebase/auth";
import { useState, useEffect } from 'react';
import fireBaseInit from './../Components/Pages/Login/firebase/firebaseInit';
fireBaseInit()
const provider = new GoogleAuthProvider();
const useFirebase = () => {
    let [user, setUser] = useState({})
     const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // google sign in
    let handleGoogleSignIn=()=>{
      setIsLoading(true);
      signInWithPopup(auth, provider)
  .then((result) => {
    setUser(result.user);
  }).finally(() => setIsLoading(false));
    }

    useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user)
  } else {
    setUser({})
  } setIsLoading(false);
});
    },[])

    let logOut=()=>{
      setIsLoading(true);
        signOut(auth).then(() => {
}).finally(() => setIsLoading(false));
    }
    return{
        user,
        handleGoogleSignIn,
        logOut,
        isLoading
    } 
};

export default useFirebase;