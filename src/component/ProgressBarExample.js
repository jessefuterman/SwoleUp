import React, { Component } from "react";
import List from "./List"

class ProgressBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
 percentage:  this.props.pass     

    }
    console.log(this.props.pass, "this is my props")
  }
  
  
  
  
  componentDidUpdate = previousProps => {
    if (this.props !== previousProps) {
      console.log(this.props);
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
