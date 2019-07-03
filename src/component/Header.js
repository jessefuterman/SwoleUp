import React, { Component } from "react";
import ProgressBarExample from "./ProgressBarExample.js";
import moment from "moment";

class Header extends Component {
    constructor () {
        super()
        this.state = {
            date: ""
        }
    }

    componentDidMount = () => {
        setInterval(() => {
          let date = moment().format("HH:mm:ss");
    
          this.setState({ date: date });
        }, 1000);
      };

  render() {
    return (
      <div className="App-header">
        <ProgressBarExample> </ProgressBarExample>
        <ul className="Time-place">{this.state.date} </ul>
      </div>
    );
  }
}

export default Header;