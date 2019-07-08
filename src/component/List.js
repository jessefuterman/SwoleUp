import React, { Component } from "react";
// import moment from "moment";
 import ProgressBarExample from "./ProgressBarExample.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      list: this.props.greeting,
      percentage: 0
    };
    console.log(this.state.percentage, "the state percentage");
  }

  lify = event => {
    if (this.state.list !== undefined) {
      let mapOne = this.state.list.map(x => (
        <li>
          {x}
          <button  className ="button" onClick={() => {
            this.handleSubmit(x)
           }}>
            Complete Excercise
          </button>
         
          
         
          
           
          
          
         
        </li>
      ));
      return mapOne;
    }
  };

  componentDidUpdate = previousProps => {
    if (this.props !== previousProps) {
      console.log(this.props);
      this.setState({ list: this.props.greeting });
    }
  };
  handleDelete = str => {
  
  };

  handleSubmit = (str) => {
  console.log("does it work jerk?!")
  this.setState((prevState, props) => ({
    percentage: this.state.percentage + 1
})); 
  console.log(this.state.percentage, "Set what!?")
  console.log("aa");
  let del = this.state.list.filter(x => x !== str);
  this.setState({ list: del });
  this.props.pass(del);
  }

  render() {
    return (
      <div className="task-list">
        <ul>{this.lify()}</ul>
        <div className="App-header"></div>
        <ProgressBarExample pass = {this.state.percentage}></ProgressBarExample>
      </div>
    );
  }
}

export default List;
