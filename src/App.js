import React, { Component } from "react";

import "./App.css";
import Header from "./component/Header.js";
import Input from "./component/Input.js";
import List from "./component/List.js";
// import fire from "./component/fire.js";
// import firebase from "firebase"




class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      user: {},
    };
  }
// googleLogin = () => {
//   const provider = firebase.auth.GoogleAuthProvider()
//   firebase.auth().signInWithPopup(provider)

//   .then(result => {
//     const user = result.user;
//     document.write(`Hello ${user.displayName}`);
//     console.log(user, "this is uer")
//   })
//   .catch(console.log)


// }

// authListener = () => {
//   fire.auth().onAuthStateChanged((user) => {
//   if (user) {
//     this.setState({user});
//     //localStorage.setItem('user', user.uid)
//   }else{
//     this.setState({user: null});
//    // localStorage.removeItem('user')
//   }



//   })
// }

  

  render() {
    return (
      <div className="App">
     
      <Header></Header>
        <Input />
      </div>
    );
  }
}

export default App;
