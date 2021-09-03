import React from 'react';
import { Header } from '../../Components/Header';
import { Container } from './styles';

export function BoxDoctor() {
    return (
        <Container >
            <Header title='Box Doctor' />
        </Container>
    )
}




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAO--3J_ePYWcUeO5MCFY0hXMaiFcn0cvs",
//   authDomain: "boxdoctor-1fa77.firebaseapp.com",
//   databaseURL: "https://boxdoctor-1fa77-default-rtdb.firebaseio.com",
//   projectId: "boxdoctor-1fa77",
//   storageBucket: "boxdoctor-1fa77.appspot.com",
//   messagingSenderId: "430502615538",
//   appId: "1:430502615538:web:74758ce6deb9bc5254736b",
//   measurementId: "G-J1L5F0BQJE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);