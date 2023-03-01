import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import firebase from 'firebase/app'
// import 'firebase/database'

import App from './App.vue'
import router from './router'

import { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore'
// firebase.initializeApp({
//     apiKey: "AIzaSyDIP8yeFsgHm30xuKlxZ4kOSEl3Y-CY3Ic",
//     authDomain: "jabrixofthings-c1c16.firebaseapp.com",
//     databaseURL: "https://jabrixofthings-c1c16-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "jabrixofthings-c1c16",
//     storageBucket: "jabrixofthings-c1c16.appspot.com",
//     messagingSenderId: "1024004792418",
//     appId: "1:1024004792418:web:abd6765f8d0b7efee9b13b",
//     measurementId: "G-W9YC90TVDY"
// })

initializeApp({
    credential: applicationDefault()
})


import './assets/main.css'
// export const db = firebase.database()


const app = createApp(App)
export const db = getFirestore()

app.use(createPinia())
app.use(router)

app.mount('#app')

