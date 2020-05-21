import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const congif = {
    apiKey: "AIzaSyCoS494Jg7CFCjHcBz514eFwsD8bY-vkho",
    authDomain: "shoppingwebsitereact.firebaseapp.com",
    databaseURL: "https://shoppingwebsitereact.firebaseio.com",
    projectId: "shoppingwebsitereact",
    storageBucket: "shoppingwebsitereact.appspot.com",
    messagingSenderId: "238779094048",
    appId: "1:238779094048:web:992330f6ec44b21ac79845",
    measurementId: "G-RG3KE9W4CJ"
  };

firebase.initializeApp(congif);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;