import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

document
  .getElementById("google-signup-btn")
  .addEventListener("click", function () {
    alert(5);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User signed up with Google:", result.user);
      })
      .catch((error) => {
        console.error("Error during Google sign-up:", error);
      });
  });

document
  .getElementById("google-login-btn")
  .addEventListener("click", function () {
    alert(5);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User logged in with Google:", result.user);
      })
      .catch((error) => {
        console.error("Error during Google login:", error);
      });
  });
