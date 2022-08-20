import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDuoAtunlV6H26P6nh9rSt2oejq1RjSjrM",
  authDomain: "chat-e8d04.firebaseapp.com",
  databaseURL: "https://chat-e8d04.firebaseio.com",
  projectId: "chat-e8d04",
  storageBucket: "chat-e8d04.appspot.com",
  messagingSenderId: "863068162400",
  appId: "1:863068162400:web:6875dae4fc3023c946f605"
};

const fbase = firebase.initializeApp(firebaseConfig);

export default fbase.firestore();
