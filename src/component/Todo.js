import React, { Component } from "react";
import List from "./List.js";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
  }
  getModifiedArray = arr => {
    this.setState({ items: arr });
  };

  onChange = event => {
    event.preventDefault();
    this.setState({ text: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      text: "",
      items: [...this.state.items, this.state.text]
    });
  };

  render() {
    return (
      <div>
        <div className="todoListMain">
          <div className="header">
            <form className="App" onSubmit={this.onSubmit}>
              <input value={this.state.text} onChange={this.onChange} />
              <button type="submit"> Add Task </button>
            </form>
            <div>
              <List passItem={this.state.items} pass={this.Array} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
