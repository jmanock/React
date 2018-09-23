import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDnIkpV3_WG6C43hWc_Y6XsReysADxNSmA",
  authDomain: "react-25b21.firebaseapp.com",
  databaseURL: "https://react-25b21.firebaseio.com",
  projectId: "react-25b21",
  storageBucket: "react-25b21.appspot.com",
  messagingSenderId: "930344019073"
};

if(!firebase.app.length){
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export{
  auth
};
