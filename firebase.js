import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPzXNMriyXuADn8_0GDCbBjtX4ahFkGg0",
  authDomain: "rn-uber-eats-clone-a370b.firebaseapp.com",
  projectId: "rn-uber-eats-clone-a370b",
  storageBucket: "rn-uber-eats-clone-a370b.appspot.com",
  messagingSenderId: "498281132560",
  appId: "1:498281132560:web:e7ba3764fb8139eb889095",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
