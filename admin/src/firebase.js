import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBmNmaR9V720iL1xNt1XBmTtjlRWwtBDKU",
    authDomain: "netflix-eb0ba.firebaseapp.com",
    projectId: "netflix-eb0ba",
    storageBucket: "netflix-eb0ba.appspot.com",
    messagingSenderId: "1027684767629",
    appId: "1:1027684767629:web:efa197f150ef86b761cfc4",
    measurementId: "G-NS9VQN9VY4"
  };

  firebase.initialeziApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;