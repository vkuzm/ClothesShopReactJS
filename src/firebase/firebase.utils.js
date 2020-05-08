import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDOJ7V-P7ok7sTsUjbyqMOyHBh57FJz-lc',
  authDomain: 'crwn-db-9ce89.firebaseapp.com',
  databaseURL: 'https://crwn-db-9ce89.firebaseio.com',
  projectId: 'crwn-db-9ce89',
  storageBucket: 'crwn-db-9ce89.appspot.com',
  messagingSenderId: '679323290074',
  appId: '1:679323290074:web:4bab70b0efb0ed7c63d8e3',
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = () => {
  const newProvider = new firebase.auth.GoogleAuthProvider();
  newProvider.setCustomParameters({ prompt: 'select_account' });
  return newProvider;
};

const signInWithGoogle = () => auth.signInWithPopup(provider());

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error);
    }
  }

  return userRef;
};

export { auth, firestore, signInWithGoogle, createUserProfileDocument };
