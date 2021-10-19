import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import fireBaseInit from './../Components/Pages/Login/firebase/firebaseInit';
fireBaseInit()
const provider = new GoogleAuthProvider();
const useFirebase = () => {
    let [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [useremail, setuserEmail] = useState("");
    const [userpassword, setuserPassword] = useState("");
     const [isLoading, setIsLoading] = useState(true);

      const getName = e =>{
        setName(e.target.value);
    }

    const getEmail = e =>{
        setEmail(e.target.value);
    }

    const getPassword = e =>{
        setPassword(e.target.value);
    }
      const userEmail = e => {
        setuserEmail(e.target.value)
    }

    const userPassword = e => {
        setuserPassword(e.target.value)
    }

    const auth = getAuth();

// User Registration uisng email and password
      const userRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(email.length === 0){
            setError("Please enter your email")
            return;
        }
        if(password.length === 0){
            setError("Please enter a password");
            return;
        }
        if(password.length < 6){
            setError("Password should be at least 6 charecters");
            return;
        }
            const setUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message)
          });
    }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUserInfo();
            const user = result.user;
            console.log(user);
            setError("");
        })
        .catch((error) => {
            setError(error.message);
        })
    }
// User Signin using Email and Password

       const signInWithEmail = e => {
        e.preventDefault();
        if(useremail.length === 0){
            setError("Please give your email")
            return;
        }
        if(userpassword.length === 0){
            setError("Please give your password")
            return;
        }
        signInWithEmailAndPassword(auth, useremail, userpassword)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(result.user)
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
    }

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
        isLoading,
        name,
        getName,
        signInWithEmail,
        getEmail,
        userRegistration,
        getPassword,
        error,
        userEmail,
        userPassword
    } 
};

export default useFirebase;