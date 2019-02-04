
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCs1z0RAk_4VBe5gE26fopXbz0fBy41WdQ",
  authDomain: "loginmodule-2233b.firebaseapp.com",
  databaseURL: "https://loginmodule-2233b.firebaseio.com",
  projectId: "loginmodule-2233b",
  storageBucket: "loginmodule-2233b.appspot.com",
  messagingSenderId: "503008658723"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();

const auth = firebase.auth();

export {
  db,
  auth,
};
