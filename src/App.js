import React, { Component } from "react";

import "./App.css";
import Todo from "./component/Todo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo> </Todo>
        </header>
      </div>
    );
  }
}

export default App;
