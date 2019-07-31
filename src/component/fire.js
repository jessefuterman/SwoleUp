import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD1SJqzufUyUagLYOjUaMvXQPVa8BiJSsM",
    authDomain: "swoleon-b9f8c.firebaseapp.com",
    databaseURL: "https://swoleon-b9f8c.firebaseio.com",
    projectId: "swoleon-b9f8c",
    storageBucket: "",
    messagingSenderId: "716241455226",
    appId: "1:716241455226:web:fc894bd8be45e196"
  };
  // Initialize Firebase
  
  const fire =  firebase.initializeApp(firebaseConfig);
  var database = firebase.database()
  var ref = database.ref("scores")

  var data = {
      name:"Jesse",
      score: "20"
  }
  ref.push(data)



  export default fire