import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpkaZBTTLPfLflJwWkV91W036Pg8hjlR8",
  authDomain: "ghost-fit-tech.firebaseapp.com",
  projectId: "ghost-fit-tech",
  storageBucket: "ghost-fit-tech.firebasestorage.app",
  messagingSenderId: "373209928471",
  appId: "1:373209928471:web:40c5201cbafc679e13dd52",
  measurementId: "G-6V4D91J16H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);