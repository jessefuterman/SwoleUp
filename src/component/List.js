import React, { Component } from "react";
// import moment from "moment";
 import ProgressBarExample from "./ProgressBarExample.js";
 import Modal from 'react-responsive-modal';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      list: this.props.passItem,
      percentage: 0,
      open: false,
      excerciseInfoBicep: " Step 1: Stand up straight with a dumbbell in each hand, holding them alongside you. Your palms should face your body. Keep your feet hip-width apart and engage your core to stabilize the body. Step 2: Keep your biceps stationary and start bending at your elbows, lifting both dumbbells. Step 3:Lift until the dumbbells reach shoulder-level, but don’t actually touch your shoulders. Hold this contraction briefly, then lower back to the starting position and repeat.",
      workouts: [this.props.passExcerciseBicep, this.props.passExcerciseShoulder, this.props.passExcerciseBack]
    };
    console.log(this.state.workouts[0] ,"what teh fuck is this state")

  
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  infoLogic = () => {
   if(this.state.workouts[0] === "b"){
    return this.state.excerciseInfoBicep[0]
   
   }
    

  }




  lify = event => {
    if (this.state.list !== undefined) {
      let mapOne = this.state.list.map(elem => (
        <li>
          {elem}
          <h1>
          </h1>
          <button  className ="buttonTwo" onClick={() => {
            this.handleSubmit(elem)
           }}>
            Complete Excercise
          </button>
          <h1>
          </h1>
          <button  className ="button" onClick={() => {
            this.onOpenModal(elem)
           }}>
               Info
          </button>
         
          
         
          
           
          
          
         
        </li>
      ));
      return mapOne;
    }
  };

  componentDidUpdate = previousProps => {
    if (this.props !== previousProps) {
      this.setState({workouts: this.props.passExcerciseBicep[0]})  
      this.setState({ list: this.props.passItem });
    }
  };
 

  handleSubmit = (str) => {
  
  this.setState((prevState, props) => ({
    percentage: this.state.percentage + 1
})); 
 
  let del = this.state.list.filter(x => x !== str);
  this.setState({ list: del });
  this.props.pass(del);
  }

  render() {
    const { open } = this.state;

    return (
      <div className="task-list">
        <ul>{this.lify()}</ul>
        <div className="App-header"></div>
        <ProgressBarExample pass = {this.state.percentage}></ProgressBarExample>
    
      
      
      <Modal open={open} onClose={this.onCloseModal} center>
        <h2>{this.infoLogic()}</h2>
      </Modal>
      
      </div>
    );
  }
}

export default List;
