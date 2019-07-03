import React, { Component } from "react";

import "./App.css";
import Header from "./component/Header.js";
import Input from "./component/Input.js";
import List from "./component/List.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
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
