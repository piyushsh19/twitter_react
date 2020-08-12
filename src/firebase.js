import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD57TBjPenlXAg7lPnt83eTITrMNTF2pic",
    authDomain: "twitter-clone-20c8c.firebaseapp.com",
    databaseURL: "https://twitter-clone-20c8c.firebaseio.com",
    projectId: "twitter-clone-20c8c",
    storageBucket: "twitter-clone-20c8c.appspot.com",
    messagingSenderId: "203614494895",
    appId: "1:203614494895:web:26128d3edfa7106c54745a",
    measurementId: "G-NQSWCDLTNB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;