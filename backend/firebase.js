import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_mEhNNhtScWS36x-eIrv_-QqYixWeUJ0',
  authDomain: 'instagram-cloneee.firebaseapp.com',
  projectId: 'instagram-cloneee',
  storageBucket: 'instagram-cloneee.appspot.com',
  messagingSenderId: '759897870026',
  appId: '1:759897870026:web:d9290ba8277d0bdb946e33',
  measurementId: 'G-HDQ6YKKGEL',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
