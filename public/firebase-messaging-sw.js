importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBDUWhTWBrfvjcf9EVih-mxSayE7zJPd60",
    authDomain: "notificaciones-a1856.firebaseapp.com",
    projectId: "notificaciones-a1856",
    storageBucket: "notificaciones-a1856.appspot.com",
    messagingSenderId: "216294466357",
    appId: "1:216294466357:web:919944fc0099f42655227c",
    measurementId: "G-06Q390ZHE7"
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
});