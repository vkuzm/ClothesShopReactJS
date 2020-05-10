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
  appId: '1:679323290074:web:4bab70b0efb0ed7c63d8e3'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = () => {
  const newProvider = new firebase.auth.GoogleAuthProvider();
  newProvider.setCustomParameters({ prompt: 'select_account' });
  return newProvider;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider());

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((object) => {
    const docName = object.docName ? object.docName : null;
    const newDocRef = collectionRef.doc(docName);
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, routeName, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(routeName),
      title: title,
      items: items
    };
  });

  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};
