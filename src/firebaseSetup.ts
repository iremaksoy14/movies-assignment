import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAGYtn5a2_ccnVwt_i9e90a8j1eSRrFzvY',
  authDomain: 'qq-test-authentication.firebaseapp.com',
  projectId: 'qq-test-authentication',
  storageBucket: 'qq-test-authentication.appspot.com',
  messagingSenderId: '225001688784',
  appId: '1:225001688784:web:527c043d2b764548bc58d5',
  measurementId: 'G-D4XRXXF08Q'
}; //this is where your firebase app values you copied will go

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();