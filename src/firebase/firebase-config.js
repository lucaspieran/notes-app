import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAbkqY8gZPqI3n7k_nNgwMqB4OvAku6IBs",
    authDomain: "journal-app-e9873.firebaseapp.com",
    projectId: "journal-app-e9873",
    storageBucket: "journal-app-e9873.appspot.com",
    messagingSenderId: "865708784678",
    appId: "1:865708784678:web:7839bc881a2decb92cfae7"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}