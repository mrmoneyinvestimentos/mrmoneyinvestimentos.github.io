import firebase from 'firebase/app';
import 'firebase/auth'; // importing the auth module as an example

// Firebase web config
const config = {
  apiKey: 'AIzaSyAokGrynkAoiH_M-83Ey2IeJQCcuQsnEfg',
  authDomain: 'trade-c4c5a.firebaseapp.com',
  databaseURL: 'https://trade-c4c5a.firebaseio.com',
  projectId: 'trade-c4c5a',
  storageBucket: 'trade-c4c5a.appspot.com',
  messagingSenderId: '806793345969',
  appId: '1:806793345969:web:a1a34d6c4f8073f277db90',
  measurementId: 'G-CS8P5K2NGR'
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
