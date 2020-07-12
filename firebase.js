import firebase from 'firebase/app';
import 'firebase/auth'; // importing the auth module as an example

// Firebase web config
const config = {
  apiKey: process.env.MR_API_FIREBASE,
  authDomain: 'trade-c4c5a.firebaseapp.com',
  databaseURL: 'https://trade-c4c5a.firebaseio.com',
  projectId: process.env.MR_PROJECT_ID,
  storageBucket: 'trade-c4c5a.appspot.com',
  messagingSenderId: '806793345969',
  appId: process.env.MR_APP_ID,
  measurementId: process.env.MR_MEASURE_ID
};

let instance = null;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = firebase.initializeApp(config);
    return instance;
  }

  return null;
}
