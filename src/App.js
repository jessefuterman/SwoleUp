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
      user: "",
      email: "",
      userEmail: "",
      userXP:0,
      visible: "",
      id:""


    };
    this.authListener = this.authListener.bind(this);
  }
  passEmail = (email) => {
    this.setState({ email: email });
  
   
  }
   
  

  fireBaseData = (userEmail) => {
    this.setState({ userEmail: userEmail });
    
   
  }

 

  componentDidMount() {
  
    this.authListener();
    this.fireBaseData()
  }

  logout = () => {

  this.setState({visible: "hidden"})
    fire.auth().signOut();
}
  

authListener() {
  let uid = localStorage.user
  
  admin.auth().getUser(uid)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully fetched user data:', userRecord.toJSON());
  })
  .catch(function(error) {
    console.log('Error fetching user data:', error);
  });
  
    fire.auth().onAuthStateChanged(user => {
      
      
    
      if (user) {
        this.setState({ user: user.email, id: user.uid });
        this.setState({visible: "visible"})
        localStorage.setItem("user", user.uid);
        console.log(this.state.user, this.state.id, "this is the new stuff brotherman")
        let userId = user.uid
        
        
        
   
       
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
        <div>{this.state.user ? <Input passingEmail = {this.state.email} passSwitchTwo = {this.passEmail} fireBaseDataUserEmail ={this.state.userEmail}/> : <Login passEmail ={this.passEmail} fireBaseData ={this.fireBaseData} passSwitch = {this.passSwitch} passId ={this.state.id} />}</div>
        <button className = "logout"    style = {{visibility: "" + this.state.visible}} onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default App;
