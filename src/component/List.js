import React, { Component } from "react";
// import moment from "moment";
// import ProgressBarExample from "./ProgressBarExample.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      list: this.props.greeting
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
            remove
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

  render() {
    return (
      <div className="task-list">
        <ul>{this.lify()}</ul>
      </div>
    );
  }
}

export default List;
