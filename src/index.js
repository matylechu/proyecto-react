import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtW74TGKu6CwN0BIxA8B3amcPdHjdU-hY",
  authDomain: "react-curso-56b28.firebaseapp.com",
  projectId: "react-curso-56b28",
  storageBucket: "react-curso-56b28.appspot.com",
  messagingSenderId: "701228261813",
  appId: "1:701228261813:web:dd883dce9f20c1c321f9fc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);
