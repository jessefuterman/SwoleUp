import React, { Component } from "react";
import List from "./List"

class ProgressBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    }
  }

  



 
  
  



  
 
  
  
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
