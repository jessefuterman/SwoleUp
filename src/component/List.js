import React, { Component } from "react";
import moment from "moment";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.greeting,
      date: ""
    };
    console.log(this.state.date, "the state");
  }

  lify = event => {
    if (this.state.list !== undefined) {
      let mapOne = this.state.list.map(x => (
        <li>
          {" "}
          {x}
          <button
            onClick={() => {
              this.handleDelete(x);
            }}
          >
            remove
          </button>{" "}
          <button onClick={this.momentTimer}>timer</button>
        </li>
       
      ));
      return mapOne;
    }
  };

  timerZero = () => {};

  momentTimer = () => {
    
  };

  componentDidUpdate = previousProps => {
    if (this.props !== previousProps) {
      this.setState({ list: this.props.greeting });
    }
  };
  handleDelete = str => {
    console.log("aa");
    let del = this.state.list.filter(x => x !== str);
    this.setState({ list: del });
    this.props.pass(del);
  };
  
  componentDidMount = () => {

    setInterval(() => {
      let date = moment().format("HH:mm:ss");

      console.log(date, "this is date");
      this.setState({ date: date });
    }, 1000);
  }

  render() {
    return (
      <div>
        <ul>{this.lify()}</ul>
        <ul>{this.state.date} </ul>
        <div>
          
        </div>
      </div>
    );
  }
}

export default List;
