import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDAPr-aokCCJCfXvQGAfOHOBt1L-a7UtjE",
  authDomain: "react-firebase-authentic-4d611.firebaseapp.com",
  databaseURL:  "https://react-firebase-authentic-4d611.firebaseio.com",
  projectId: "react-firebase-authentic-4d611",
  storageBucket: "react-firebase-authentic-4d611.appspot.com",
  messagingSenderId: "493546074492",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
    
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

}

export default Firebase;