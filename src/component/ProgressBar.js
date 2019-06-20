import React, { Component } from "react";



class ProgressBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
       percentage: 60
      };
    }
   
   

  
    render() {
      return (
        <div>
          <ProgressBar percentage = {this.state.ProgressBar}></ProgressBar>
        </div>
      );
    }
  }
  
  export default ProgressBar;
  