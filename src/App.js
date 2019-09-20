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
      userXp:0,
      visible: "",
      id:"",
      userPercentage:0


    };
    this.authListener = this.authListener.bind(this);
  }
  passEmail = (email) => {
    this.setState({ email: email });
  
   
  }

  // passingPercentData = (fillPercentage) => {
  //   let fill = fillPercentage
  //   this.setState({ usePercentage: fillPercentage });
   
  // }
 
   
  

  fireBaseData = (userEmail) => {
    this.setState({ userEmail: userEmail });
    
   
  }

  passingXp = (Xp, fillPercentage) => {
    
    this.setState({ userXp:  Xp, userPercentage: fillPercentage });
    console.log(this.state.userPercentage,  " FILL PERCETAGE is passing to app" )

  }

 

  componentDidMount() {
   
    this.authListener();
    this.fireBaseData()
    // this.passingPercentData()
  }

  logout = () => {

  this.setState({visible: "hidden"})
    fire.auth().signOut();
}
  //ADD SAVE BUTTON IN HERE

authListener() {
 
  
 
  
    fire.auth().onAuthStateChanged(user => {
      
      
    
      if (user) {
        this.setState({ user: user.email, id: user.uid });
        this.setState({visible: "visible"})
        localStorage.setItem("user", user.uid);

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
        <div>{this.state.user ? <Input  passingXp = {this.state.userXp}  passingFillPercentage = {this.state.userPercentage} passingEmail = {this.state.email} passSwitchTwo = {this.passEmail} fireBaseDataUserEmail ={this.state.userEmail} passId ={this.state.id}/> : <Login passEmail ={this.passEmail}  passingXp ={this.passingXp}   fireBaseData ={this.fireBaseData} passSwitch = {this.passSwitch} passId ={this.state.id} />}</div>
        <button className = "logout"    style = {{visibility: "" + this.state.visible}} onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default App;
