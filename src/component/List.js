import React, { Component } from "react";
import moment from "moment";
import ProgressBar from "./ProgressBar";

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
        </li>
      ));
      return mapOne;
    }
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

  ProgressBar = props => {
    return (
      <div className="progress-bar">
        <filler percentage={props.percentage}> </filler>
      </div>
    );
  };

  Filler = props => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />;
  };

  componentDidMount = () => {
    setInterval(() => {
      let date = moment().format("HH:mm:ss");

      console.log(date, "this is date");
      this.setState({ date: date });
    }, 1000);
  };

  render() {
    return (
      <div>
        <ul>{this.lify()}</ul>
        <ul className="Time-place">{this.state.date} </ul>
        <div>
          <select className="Dropdown-menu">
            <option value="grapefruit">Bicep</option>
            <option value="lime">Tricep</option>
            <option selected value="coconut">
              Shoulder
            </option>
            <option value="mango">Back</option>
          </select>
          <ProgressBar />
        </div>
      </div>
    );
  }
}

export default List;
