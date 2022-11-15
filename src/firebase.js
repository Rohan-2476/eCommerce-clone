import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA-fXy9l2pfNkXymkDhxha9J4vdrQTJD7w",
    authDomain: "clone-92148.firebaseapp.com",
    projectId: "clone-92148",
    storageBucket: "clone-92148.appspot.com",
    messagingSenderId: "1042263839169",
    appId: "1:1042263839169:web:62f877b4f2ac593fc21f40",
    measurementId: "G-R7RTJHTR2K"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Use this for db(database) and auth(authentication)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth };