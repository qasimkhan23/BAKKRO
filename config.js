import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



 // Your web app's Firebase configuration

export const firebaseConfig =  {
    apiKey: "AIzaSyAmYAJwjADc5DPiMrflpognT2fbP7zjqO0",
    authDomain: "mobilebakkrotest.firebaseapp.com",
    projectId: "mobilebakkrotest",
    storageBucket: "mobilebakkrotest.appspot.com",
    messagingSenderId: "866219144347",
    appId: "1:866219144347:web:662a5a3e74c699d5a3023e"
}
if(!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);

}