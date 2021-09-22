import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyAC68NHHrPWB_Lg11l47RGWpdg5OqM9Eao",
    authDomain: "project93-b5a9b.firebaseapp.com",
    databaseURL: "https://project93-b5a9b-default-rtdb.firebaseio.com",
    projectId: "project93-b5a9b",
    storageBucket: "project93-b5a9b.appspot.com",
    messagingSenderId: "132277065379",
    appId: "1:132277065379:web:b9ff0908e5c6e870135116",
    measurementId: "G-6E2XJXLL52"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("Username",user_name);

    window.location = "kwiiter_room.html";
}
