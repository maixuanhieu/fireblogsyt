import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEaybQFziFscu7fHkt8pHMqeKC_UzDCO4",
  authDomain: "fireblogsyt-b3f4c.firebaseapp.com",
  projectId: "fireblogsyt-b3f4c",
  storageBucket: "fireblogsyt-b3f4c.appspot.com",
  messagingSenderId: "28952540075",
  appId: "1:28952540075:web:43b5b61e0a3a118edad8ee"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore()