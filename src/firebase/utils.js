import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA7XN8oi2J3103k8aKNGFzaFIlJ6eUXEZc',
  authDomain: 'univ-6e108.firebaseapp.com',
  databaseURL: 'https://univ-6e108.firebaseio.com',
  projectId: 'univ-6e108',
  storageBucket: '',
  messagingSenderId: '971192028173',
  appId: '1:971192028173:web:84dc5745bbdbbd7a6dd944',
  measurementId: 'G-R23L1J064B'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
