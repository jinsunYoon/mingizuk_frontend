importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')

const firebaseConfig = {
    apiKey: 'AIzaSyAS_SWopA-j9xJQEKdMTZCM4MqTZGOToKc',
    authDomain: 'mingi-pwa-notification.firebaseapp.com',
    projectId: 'mingi-pwa-notification',
    storageBucket: 'mingi-pwa-notification.appspot.com',
    messagingSenderId: '809939401343',
    appId: '1:809939401343:web:348e9317ed19c17e3f1d4a',
    measurementId: 'G-T4Z7RR6PYY',
}

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload)

    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
