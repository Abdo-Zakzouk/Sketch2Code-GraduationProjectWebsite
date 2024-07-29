import React, { useRef } from "react";
import "./LoginSignup.css";
import { useState } from "react";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";
import auth from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db, app } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

// import '../..firebase.js'
// import {
//     getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup
// } from "firebase/auth";

// const register=()=>{
//     const emailRef=useRef("");
// const passwordRef=useRef()
// const nameRef=useRef()
//     const auth=getAuth();
//     createUserWithEmailAndPassword(auth,emailRef.value,passwordRef.value, nameRef.value)
//     .then((data)=>{
//         console.log("you are successfully registered!");
//         console.log(auth.currentUser);
//         // router.push('/Account');
//         console.log(data);
//     })
//     .catch((error)=> {
//         console.log(error.code);
//         alert(error.message);
//     });

// };
// const signInWithGoogle=()=>{
// const provider = new GoogleAuthProvider();
// signInWithPopup(getAuth(),provider)
// .then((result)=>{
// console.log(result.user);
// // router.push('/Account');

// })
// .catch((error)=>{
//     console.log(error.code);
//         alert(error.message);
// });
// };
export const SignupLogin = () => {
  // const emailRef=useRef("");
  // const passwordRef=useRef()
  // const nameRef=useRef()
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const errMsg = useState("");
  const navigate = useNavigate();
  const collectionRef = collection(db, "users");

  const handleSignup = async () => {
    //   try {
    //     const userCredential = await createUserWithEmailAndPassword(auth,name, email, password);
    //     console.log('User signed up:', userCredential.user);
    //   } catch (error) {
    //     console.error('Error signing up:', error.message);
    //   }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up", userCredential.user);
      alert("User signed up", userCredential.user);
      navigate("/login");
    } catch (error) {
      console.error("Error signing up", error.message);
      alert(error.message);
    }
    //   setAction("Sign Up");
    try {
      // const docRef = await addDoc(collectionRef, {
      //   name: auth.name,
      //   email: auth.email,
      //   passord: auth.password,
      // });
      addDoc(collection(db, "users"), {
        name: name,
        email: email,
        password: password,
      }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      });

      // db.collection("users")
      //   .add({
      //     first: "Ada",
      //     last: "Lovelace",
      //     born: 1815,
      //   })
      //   .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      //   });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const login = async () => {
    // try {
    //   const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //   console.log('User logged in:', userCredential.user);
    // } catch (error) {
    //   console.error('Error logging in:', error.message);
    // }
    navigate("/login");
  };
  // const [action,setAction] = useState("Login");
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Sign-up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={person_icon} alt="" />
            <input
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit" onClick={handleSignup}>
            Sign Up
          </div>
          <div className="submit gray" onClick={login}>
            Login
          </div>
        </div>
      </div>
      <div className="below"></div>
    </div>
  );
};
export default SignupLogin;
