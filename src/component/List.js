import React, { Component } from "react";
// import moment from "moment";
// import ProgressBarExample from "./ProgressBarExample.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      list: this.props.greeting,
      percentage: 0
    };
    console.log(this.state.date, "the state");
  }

  lify = event => {
    if (this.state.list !== undefined) {
      let mapOne = this.state.list.map(x => (
        <li>
          {x}
          <button
            onClick={() => {
              this.handleDelete(x);
            }}
          >
            Remove
          </button>
          
          <button onClick={() => {
            this.handleSubmit(x)
           }} 
           >
           Add Workout
           
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
    console.log("aa");
    let del = this.state.list.filter(x => x !== str);
    this.setState({ list: del });
    this.props.pass(del);
  };

  handleSubmit = () => {
  console.log("does it work jerk?!")
  let add = 5
  this.setState({ percentage: add });
  this.props.juice(add);
  }

  render() {
    return (
      <div className="task-list">
        <ul>{this.lify()}</ul>
        
      </div>
    );
  }
}

export default List;
