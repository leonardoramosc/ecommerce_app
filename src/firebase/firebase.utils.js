import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBg0dKwiPoLR-hL1NrOxjzVnUMn15FKRuk",
    authDomain: "ecom-db-80a1d.firebaseapp.com",
    databaseURL: "https://ecom-db-80a1d.firebaseio.com",
    projectId: "ecom-db-80a1d",
    storageBucket: "ecom-db-80a1d.appspot.com",
    messagingSenderId: "809103275390",
    appId: "1:809103275390:web:a46b87bbc61b7d97462f2f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;