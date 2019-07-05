import React, { Component } from "react";
import List from "./List"

class ProgressBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
  }

  ProgressBar = () => {
    return (
      <div className="progress-bar">
        <this.Filler percentage={this.state.percentage}>  </this.Filler>
      </div>
    );
  };

  Filler = () => {
    
    
    return <div className="filler" style={{ width:`${this.state.percentage}%` }} />;
  }; 


JuiceFill = () => {
  
  

}

 
  
  



  
 
  
  
  render() {
    return (
        
        <div>
        
        <this.ProgressBar percentage = {this.state.percentage}></this.ProgressBar>
        
        </div>

        
        
        )
  }
}

export default ProgressBarExample;
