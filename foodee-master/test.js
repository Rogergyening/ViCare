// JavaScript code
// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhnPAYqzh32Y_QCIKdegq7WDoeqUGyxnU",
  authDomain: "vicare-30b38.firebaseapp.com",
  databaseURL: "https://vicare-30b38-default-rtdb.firebaseio.com",
  projectId: "vicare-30b38",
  storageBucket: "vicare-30b38.appspot.com",
  messagingSenderId: "122983331070",
  appId: "1:122983331070:web:8a39d0330dc33b573021af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

document
  .querySelector(".signup-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".login").style.display = "none";
    document.querySelector(".signup").style.display = "block";
  });

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Signup Successful!!!");
      })
      .catch((error) => {
        console.error(error);
        alert("Signup failed. Please try again later.");
      });
  });
