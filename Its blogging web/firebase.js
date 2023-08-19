
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCcdf192QyawpORD3EyXbtjRrjk_-c_t9Q",
    authDomain: "blog-web-592b5.firebaseapp.com",
    projectId: "blog-web-592b5",
    storageBucket: "blog-web-592b5.appspot.com",
    messagingSenderId: "821122428574",
    appId: "1:821122428574:web:4cbd7c56fdc0faafc4958f",
    measurementId: "G-TCGX4V6RSY"
  };

  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);