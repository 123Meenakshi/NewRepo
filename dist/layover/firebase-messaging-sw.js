import { } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js";
import { } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js";
firebase.initializeApp({
  apiKey: "AIzaSyB7ieIcUxnxLeg-IT7d-eCYuN5HFlRb6ug",
    authDomain: "layover-connect-notification.firebaseapp.com",
    projectId: "layover-connect-notification",
    storageBucket: "layover-connect-notification.appspot.com",
    messagingSenderId: "582775183979",
    appId: "1:582775183979:web:7a60c568fad02568bc6f2e",
    measurementId: "G-71FLMH3R1R",
    VapidKey: 'BEpMOEOPvP82neL-fPakZVADOJsK3lTmjO37_923yP9gMvNdg_9MMJVHySy5Yhxv5KNsR0KvYZ932xDDdtjCfSE'
});
if (firebase.messaging.isSupported()) {
  firebase.messaging();
  // firebase.onBackgroundMessage();
}