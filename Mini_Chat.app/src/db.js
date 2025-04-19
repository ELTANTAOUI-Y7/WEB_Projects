import firebase from 'firebase/app' // the core part of firebase package
import "firebase/database"
// Then we import any features from firebase that we want to use
// in our case it is cloud firestore
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCmXJslNPR50SvtsgnySD-6CWRb7Zdn1XY",
    authDomain: "chat-app-d81e3.firebaseapp.com",
    projectId: "chat-app-d81e3",
    storageBucket: "chat-app-d81e3.firebasestorage.app",
    messagingSenderId: "176926603522",
    appId: "1:176926603522:web:c95830f2ce280620062a1b",
    databaseURL:"https://chat-app-d81e3-default-rtdb.firebaseio.com/"
  };

  // Step 1 : init firebase
  // we use the firebaseConfig to init the connection to our firebase backend
  const db = firebase.initializeApp(firebaseConfig) 

  // Step 2 : Init the firestore service
  // If we want to do any communication with the firestore db (eg. add documents)
  // we can use projectFirestore variable
  const projectFirestore = firebase.firestore()

  //Step 3 : Export projectFirestore
  // This will enable the use the firebase in different components
  export {projectFirestore};
  export default db;
