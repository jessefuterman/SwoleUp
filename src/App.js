import React, {Component} from "react";
import List from "./component/List.js"
import "./App.css";
import Todo from "./component/Todo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <Todo> </Todo>
          
       <List> </List>
        </header>
      </div>
    );
  }
}

export default App;


