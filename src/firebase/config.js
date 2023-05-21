import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDRegz-SMSZc-LVFjAg9hwoqDsoiGfbBFs',
    authDomain: 'reading-list-a2918.firebaseapp.com',
    projectId: 'reading-list-a2918',
    storageBucket: 'reading-list-a2918.appspot.com',
    messagingSenderId: '889558899213',
    appId: '1:889558899213:web:551362978a981ef30b1344',
};
// init firebase
initializeApp(firebaseConfig);

// init firestore

const db = getFirestore();
// init auth
const auth = getAuth();

export { db, auth, serverTimestamp };
