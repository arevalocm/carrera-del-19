// Firebase Service Worker — Copa Prowork 2026
// Este archivo DEBE estar en la raíz de tu repositorio GitHub

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

// Muestra la notificación cuando la app está en segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('[SW] Notificación recibida en background:', payload);
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: icon || '/carrera-del-19/icon-192.png',
    badge: '/carrera-del-19/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'golf-notification',
    renotify: true
  });
});
