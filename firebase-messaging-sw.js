// Firebase Service Worker — Copa Prowork 2026
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDeJEoRcln_CKs8k8Cs1tvq5kfTTzJ44sU",
  authDomain: "portal-turnos.firebaseapp.com",
  projectId: "portal-turnos",
  storageBucket: "portal-turnos.firebasestorage.app",
  messagingSenderId: "992048440873",
  appId: "1:992048440873:web:a89af9f09da59a03c75e38",
  measurementId: "G-P0RV6XC49N"
});

const messaging = firebase.messaging();
// Firebase SDK maneja las notificaciones automáticamente sin onBackgroundMessage
