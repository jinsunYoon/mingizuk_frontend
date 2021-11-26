// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAyURaPvFcXB7ReNDqu5n3BbmfOpmOLnfM',
    authDomain: 'ming-gi-jeog.firebaseapp.com',
    projectId: 'ming-gi-jeog',
    storageBucket: 'ming-gi-jeog.appspot.com',
    messagingSenderId: '155965299981',
    appId: '1:155965299981:web:4337b58f5bc232fdae6444',
    measurementId: 'G-XH2R1628ML',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
