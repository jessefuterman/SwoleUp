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
