// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  SignInMethod,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBAycqw7iN-iukkmaOgwkWxSUVpjBDvWM",
  authDomain: "dts-mini-project-b2ed6.firebaseapp.com",
  projectId: "dts-mini-project-b2ed6",
  storageBucket: "dts-mini-project-b2ed6.appspot.com",
  messagingSenderId: "911536374214",
  appId: "1:911536374214:web:8f7a5d6ba0d0dbdbd972c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTER EMAIL DAN PASSWORD
const registerEmailDanPassword = async (email, password) => {
  try {
    const userYangRegister = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user yang berhasil register", userYangRegister);
  } catch (err) {
    console.log(err);
    console.log("error code", err.code);
    console.log("error message", err.message);
  }
};

const loginEmailDanPassword = async (email, password) => {
  try {
    const userYangLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("berhasil login", userYangLogin);
  } catch (err) {
    console.log(err);
    console.log("error code", err.code);
    console.log("error message", err.message);
  }
};

const keluarDariAplikasi = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  registerEmailDanPassword,
  loginEmailDanPassword,
  auth,
  keluarDariAplikasi,
};
