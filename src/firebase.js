// // src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyA95AgOQw2fHzIb5j6k_kn9ERLWl2RKAWY",
//   authDomain: "sketch2code-auth.firebaseapp.com",
//   projectId: "sketch2code-auth",
//   storageBucket: "sketch2code-auth.appspot.com",
//   messagingSenderId: "237486237014",
//   appId: "1:237486237014:web:11a7c5556b8d84e64922f7",
//   measurementId: "G-4414PXNYV7"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;
///////////////////////////////////////////////////////////////////////////
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA95AgOQw2fHzIb5j6k_kn9ERLWl2RKAWY",
  authDomain: "sketch2code-auth.firebaseapp.com",
  projectId: "sketch2code-auth",
  storageBucket: "sketch2code-auth.appspot.com",
  messagingSenderId: "237486237014",
  appId: "1:237486237014:web:11a7c5556b8d84e64922f7",
  measurementId: "G-4414PXNYV7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
export default auth;
const storage = getStorage(app);
export { app, db , storage}; // Export app, auth, and db


///////////////////////////////////////////////////////////////////////////

// const firebaseConfig = {
//   apiKey: "AIzaSyA95AgOQw2fHzIb5j6k_kn9ERLWl2RKAWY",
//   authDomain: "sketch2code-auth.firebaseapp.com",
//   projectId: "sketch2code-auth",
//   storageBucket: "sketch2code-auth.appspot.com",
//   messagingSenderId: "237486237014",
//   appId: "1:237486237014:web:11a7c5556b8d84e64922f7",
//   measurementId: "G-4414PXNYV7"
// };

// // Initialize Firebase
// const auth = initializeApp(firebaseConfig);
// connectAuthEmulator(auth,"http://localhost:9099");
// const loginEmailPassword=async()=>{
//     const loginEmail= txtEmail.value;
//     const loginPassword=txtPassword.value;

//     const userCredential=await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
//     console.log(userCredential.user);
// }
// btnLogin.addEventListener("click",loginEmailPassword);


// const analytics = getAnalytics(app);
// // const auth = firebase.auth();
// firebase.auth().createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/v8/firebase.User
//       var uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
//   const user = firebase.auth().currentUser;
// if (user !== null) {
//   const displayName = user.displayName;
//   const email = user.email;
//   const emailVerified = user.emailVerified;

// }

// // Confirm the link is a sign-in with email link.
// if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
//     // Additional state parameters can also be passed via URL.
//     // This can be used to continue the user's intended action before triggering
//     // the sign-in operation.
//     // Get the email if available. This should be available if the user completes
//     // the flow on the same device where they started it.
//     var email = window.localStorage.getItem('emailForSignIn');
//     if (!email) {
//       // User opened the link on a different device. To prevent session fixation
//       // attacks, ask the user to provide the associated email again. For example:
//       email = window.prompt('Please provide your email for confirmation');
//     }
//     // The client SDK will parse the code from the link for you.
//     firebase.auth().signInWithEmailLink(email, window.location.href)
//       .then((result) => {
//         // Clear email from storage.
//         window.localStorage.removeItem('emailForSignIn');
//         // You can access the new user via result.user
//         // Additional user info profile not available via:
//         // result.additionalUserInfo.profile == null
//         // You can check if the user is new or existing:
//         // result.additionalUserInfo.isNewUser
//       })
//       .catch((error) => {
//         // Some error occurred, you can inspect the code: error.code
//         // Common errors could be invalid email and invalid or expired OTPs.
//       });
//   }
//   var provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({
//     'login_hint': 'user@example.com'
//   });
//   firebase.auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // IdP data available in result.additionalUserInfo.profile.
//       // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });
//   firebase.auth().signInWithRedirect(provider);
//   firebase.auth()
//   .getRedirectResult()
//   .then((result) => {
//     if (result.credential) {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;

//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
//     // IdP data available in result.additionalUserInfo.profile.
//       // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });

//   export default app