import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCfeyvcRa8BAPo5p9qjzN0Hhgo42v8anU",
    authDomain: "project-67-415eb.firebaseapp.com",
    projectId: "project-67-415eb",
    storageBucket: "project-67-415eb.appspot.com",
    messagingSenderId: "940937294390",
    appId: "1:940937294390:web:36679cd2f121d4ff985e97"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();