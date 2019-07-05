import React, { Component } from "react";
import List from "./List"

class ProgressBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 10
    };
  }

  

  Filler = () => {
    
    
    return <div className="filler" style={{ width:`${this.state.percentage}%` }} />;
  }; 


JuiceFill = () => {
  
  

}

 
  
  



  
 
  
  
  render() {
    return (
        
        <div>
        
        <div className="progress-bar">
        <this.Filler>  </this.Filler>
      </div>
      <div>
      </div>
        </div>

        
        
        )
  }
}

export default ProgressBarExample;
