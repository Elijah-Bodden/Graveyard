import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "react"
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDO7esByebzglertjt0swODXdpnsUgb0n4",
  authDomain: "voxiversal-1.firebaseapp.com",
  projectId: "voxiversal-1",
  storageBucket: "voxiversal-1.appspot.com",
  messagingSenderId: "1045437218421",
  appId: "1:1045437218421:web:fb216675f8ad8731db823c",
  measurementId: "G-PBE43EW75W"
};

const app = initializeApp(firebaseConfig);