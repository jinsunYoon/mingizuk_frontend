import firebase from 'firebase/compat/app'
import 'firebase/compat/messaging'

// * fcm test
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

export const getToken = (setTokenFound) => {
    return messaging
        .getToken({
            vapidKey:
                'BPBRPYBLojf8IWb4aDRCf6WpA_3drCEnbwTUwQoH5iTsF66eJ5LlTmeDO0pn1q4vZAY8D-nOmUhNDzPilZn7XAI',
        })
        .then((currentToken) => {
            if (currentToken) {
                console.log('current token for client: ', currentToken)
                setTokenFound(true)
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                console.log(
                    'No registration token available. Request permission to generate one.'
                )
                setTokenFound(false)
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err)
            // catch error while creating client token
        })
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload)
        })
    })
