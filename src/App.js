import React, { Component } from "react";

import "./App.css";
import Header from "./component/Header.js";
import Input from "./component/Input.js";
import List from "./component/List.js";
import fire from "./component/fire.js";
import Login from "./component/Login.js";

// import firebase from "firebase"

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      user: null,
      email: "",
      userEmail: "",
      userXP:0,
      visible: ""

    };
    this.authListener = this.authListener.bind(this);
  }
  passEmail = (email) => {
    this.setState({ email: email });
    console.log("this is email in app", this.state.email)

   
  }

  fireBaseData = ( userEmail) => {
    this.setState({ userEmail: userEmail});
    console.log(this.state.userEmail, "we are in app brother")
  }

 

  componentDidMount() {
  
    this.authListener();
  }

  logout = () => {

  this.setState({visible: "hidden"})
    fire.auth().signOut();
}
  authListener() {
   
   

    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      
    
      if (user) {
        this.setState({ user });
        this.setState({visible: "visible"})
        localStorage.setItem("user", user.uid);
         
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
  
    });
 

  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>{this.state.user ? <Input passingEmail = {this.state.email} passSwitchTwo = {this.passEmail} fireBaseDataUserEmail ={this.state.userEmail}/> : <Login passEmail ={this.passEmail} fireBaseData ={this.fireBaseData} passSwitch = {this.passSwitch} />}</div>
        <button className = "logout"    style = {{visibility: "" + this.state.visible}} onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default App;
