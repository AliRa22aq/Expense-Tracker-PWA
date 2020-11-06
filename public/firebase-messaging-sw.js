importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyDslp2IuVEghEtbt3U5umqfC1UVpJaMc34",
    authDomain: "expense-tracker-pwa-33a35.firebaseapp.com",
    databaseURL: "https://expense-tracker-pwa-33a35.firebaseio.com",
    projectId: "expense-tracker-pwa-33a35",
    storageBucket: "expense-tracker-pwa-33a35.appspot.com",
    messagingSenderId: "854966277712",
    appId: "1:854966277712:web:948e60d3d098ead365e355"
  };


  firebase.initializeApp(firebaseConfig);
  firebase.messaging();

