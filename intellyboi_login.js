
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  import { getAuth,GoogleAuthProvider , signInWithPopup} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA_eNtJpagGaoqDTof0RK--eDY-hG7lXIw",
    authDomain: "intellyboi-bda57.firebaseapp.com",
    projectId: "intellyboi-bda57",
    storageBucket: "intellyboi-bda57.appspot.com",
    messagingSenderId: "795473648825",
    appId: "1:795473648825:web:21eade8aa7f6a8b4d08f68",
    measurementId: "G-RFP1BBZ6YQ"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();
  const auth=getAuth(app);
  auth.languageCode ='it'
  const googleLogin = document.getElementById('google-login-btn');
  googleLogin.addEventListener("click",function(){

    signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    const user = result.user;
    console.log(user);
    window.location.href="./intellyboi.html"
  
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
   
    const email = error.customData.email;
   
    const credential = GoogleAuthProvider.credentialFromError(error);
  })
})

