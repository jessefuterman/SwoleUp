import React, { Component } from "react";
import List from "./List"
import classNames from "classnames";



class ProgressBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
 percentage:  this.props.pass     

    }
    
  }
  

  
  
  
  componentDidUpdate = (prevProps, prevState) => {
    if ( prevProps.pass  !==  this.props.pass) {
     
      this.setState({ percentage: this.props.pass });
    }
  };
  



  
 
  
  
  render() {
    return (
        
        <div>
       
        <div className="progress-bar">
        <div className="filler" style={{ width:`${this.state.percentage}%` }} />
      </div>
      <div>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      
      </div>
        </div>

        
        
        )
  }
}

export default ProgressBarExample;
