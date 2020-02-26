import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
    apiKey: "AIzaSyDym11CAx6kBMu-RPCiyDvPuhYwbomlHzY",
    authDomain: "crwn-db-edbbc.firebaseapp.com",
    databaseURL: "https://crwn-db-edbbc.firebaseio.com",
    projectId: "crwn-db-edbbc",
    storageBucket: "crwn-db-edbbc.appspot.com",
    messagingSenderId: "651373121737",
    appId: "1:651373121737:web:bffd2a6f76695711a33d18",
    measurementId: "G-4RB3HT52B2"
  };

  firebase.initializeApp(config);
  firebase.analytics();

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  
  export default firebase;