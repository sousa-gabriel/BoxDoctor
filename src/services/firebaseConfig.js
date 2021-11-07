import firebase from 'firebase/app';
import 'firebase/database'


let firebaseConfig = {
  apiKey: "AIzaSyAO--3J_ePYWcUeO5MCFY0hXMaiFcn0cvs",
  authDomain: "boxdoctor-1fa77.firebaseapp.com",
  databaseURL: "https://boxdoctor-1fa77-default-rtdb.firebaseio.com",
  projectId: "boxdoctor-1fa77",
  storageBucket: "boxdoctor-1fa77.appspot.com",
  messagingSenderId: "430502615538",
  appId: "1:430502615538:web:74758ce6deb9bc5254736b",
  measurementId: "3Xc2UNq74F853heW6iCM"
  };
    
firebase.initializeApp(firebaseConfig);

export default firebase;