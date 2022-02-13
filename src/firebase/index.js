import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBso1pZJRvBwtGVtFXiQd-0pKpgmpSslII",
    authDomain: "nala-reactjs.firebaseapp.com",
    projectId: "nala-reactjs",
    storageBucket: "nala-reactjs.appspot.com",
    messagingSenderId: "126560821543",
    appId: "1:126560821543:web:8c20635a11e3d5f6938902"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = ()=> app;
export const getFirestore =() => firebase.firestore(app);