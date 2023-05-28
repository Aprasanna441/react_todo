import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC54sNddHxMxHkXiwUURo4EDVh5_Xsnb1Y",
  authDomain: "todo-app-cp-2099e.firebaseapp.com",
  projectId: "todo-app-cp-2099e",
  storageBucket: "todo-app-cp-2099e.appspot.com",
  messagingSenderId: "578819377344",
  appId: "1:578819377344:web:5815577032fe5c5053c525",
  measurementId: "G-ENYGSEBR7X"
};

const firebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp)
export {db};