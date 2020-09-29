import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
};

export const auth = firebase.auth();

// export const db = firebase.firestore();
