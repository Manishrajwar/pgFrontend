import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyB_sdgznauYER9ZHyTeFXgpikcw8Ud1_hA",
  authDomain: "pgfinder-4c217.firebaseapp.com",
  projectId: "pgfinder-4c217",
  storageBucket: "pgfinder-4c217.appspot.com",
  messagingSenderId: "640399890687",
  appId: "1:640399890687:web:08963eeb60f5bfc42694ca",
  measurementId: "G-F2QXMEX12P" , 
  databaseURL:"https://pgfinder-4c217-default-rtdb.firebaseio.com"
};



export const app = initializeApp(firebaseConfig); 
