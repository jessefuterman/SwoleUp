import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8oDyout1MEqwn9r8BHgF9KsU1HbitSxg",
    authDomain: "fir-project1-deb4e.firebaseapp.com",
    databaseURL: "https://fir-project1-deb4e.firebaseio.com",
    projectId: "fir-project1-deb4e",
    storageBucket: "",
    messagingSenderId: "746453714210",
    appId: "1:746453714210:web:e8f888ec64763fe2"
  };
 
 
  const fire = firebase.initializeApp(firebaseConfig);

  

 
export default fire;