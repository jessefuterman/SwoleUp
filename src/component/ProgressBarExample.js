import React, { Component } from "react";
import List from "./List"

class ProgressBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
 percentage:  this.props.pass     

    }
 
  }
  
  
  
  
  componentDidUpdate = previousProps => {
    if (this.props !== previousProps) {
     
      this.setState({ percentage: this.props.pass + 1 });
    }
  };
  



  
 
  
  
  render() {
    return (
        
        <div>
       
        <div className="progress-bar">
        <div className="filler" style={{ width:`${this.state.percentage}%` }} />
      </div>
      <div>
      
      </div>
        </div>

        
        
        )
  }
}

export default ProgressBarExample;
