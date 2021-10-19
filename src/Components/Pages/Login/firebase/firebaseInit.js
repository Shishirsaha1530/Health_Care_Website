import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig';

let fireBaseInit = () =>{
    initializeApp(firebaseConfig)
}

export default fireBaseInit;