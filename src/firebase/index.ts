import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDIP8yeFsgHm30xuKlxZ4kOSEl3Y-CY3Ic',
    authDomain: 'jabrixofthings-c1c16.firebaseapp.com',
    databaseURL: 'https://jabrixofthings-c1c16-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'jabrixofthings-c1c16',
    storageBucket: 'jabrixofthings-c1c16.appspot.com',
    messagingSenderId: '1024004792418',
    appId: '1:1024004792418:web:abd6765f8d0b7efee9b13b',
    measurementId: 'G-W9YC90TVDY'
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}