import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import {getStorage , ref } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDeNP8taSVXhv1JK6Dd31VXZFqPGpjDLrc",
  authDomain: "dbclone-9368c.firebaseapp.com",
  projectId: "dbclone-9368c",
  storageBucket: "dbclone-9368c.appspot.com",
  messagingSenderId: "57224191739",
  appId: "1:57224191739:web:77ad62b108473ae8259a5e",
  measurementId: "G-0FKKGZZSC5"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

// export const storage = getStorage(firebaseApp)
export const firebaseAuth=getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);