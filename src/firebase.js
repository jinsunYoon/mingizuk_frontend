// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyB9H447O3g87NFWr7JgpAZZ-MXejMVXwBs',
    authDomain: 'mingizuk-49027.firebaseapp.com',
    projectId: 'mingizuk-49027',
    storageBucket: 'mingizuk-49027.appspot.com',
    messagingSenderId: '115507717768',
    appId: '1:115507717768:web:55f8095a41acfaafe7613d',
    measurementId: 'G-W2QV7WR0QQ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
logEvent(analytics, 'login')
