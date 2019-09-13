import React, { Component } from "react";
import List from "./List.js";
// import moment from "moment";
// import ProgressBarExample from "./ProgressBarExample.js";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: [],
      email: this.props.passingEmail,
      userEmail: this.props.fireBaseDataUserEmail ,
      userXP: 0,

      workouts: {
        Shoulder: [
          "Overhead Press",
          "Front Barbell Raise",
          "Seated Rear Delt Raise"
        ],
        Chest: [
          "Benchpress",
          "Chest-Fly-Press",
          "Incline Chest Press",
          "Decline Chest Press"
        ],
        Legs: [
          "Lunges",
          "Squat",
          "Lying Leg Curl",
          "Leg Extentions",
          "Seated Leg Curl"
        ],
        Tricep: [
          "Skull Crusher",
          "French Press",
          "Tricep Press",
          "Rope Tricep Pushdown"
        ],
        Back: [
          "Pull-Up",
          "Dumbell Single Arm Row",
          "Inverted Rows w Dumbell",
          "Lat Pull-Downs w Dumbell"
        ],
        Bicep: ["Bicep Curl", "Hammer Curl", "Preacher Curl"],
        PersonalWorkout: [""]
      },
      selectedOption: "",
      hiddenpercentagecopy: 0,
     visible: "visible"
    };
  }
  

  // onSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     text: "",
  //     items: [...this.state.items, this.state.text]
  //   });
  // };

  

  triggerWorkout = () => {
   let passSwitchTwo = this.state.visible
    this.props.passSwitchTwo(passSwitchTwo)
   
    if (this.state.selectedOption === "Nathan Micay") {
      this.personalWorkout();
    }

    if (this.state.selectedOption === "Back") {
      this.backOrder();
    }
    if (this.state.selectedOption === "Chest") {
      this.chestOrder();
    }
    if (this.state.selectedOption === "Leg") {
      this.legsOrder();
    }
    if (this.state.selectedOption === "Shoulder") {
      this.shoulderOrder();
    }
    if (this.state.selectedOption === "bicep") {
      this.bicepOrder();
    }
    if (this.state.selectedOption === "tricep") {
      this.tricepOrder();
    }
  };
  personalWorkout = () => {
    this.setState({
      items: []
    });
  };

  tricepOrder = i => {
    let pushed = [];

    for (i = 0; i < this.state.workouts.Tricep.length; i++) {
      pushed.push(this.state.workouts.Tricep[i]);
    }
    this.setState({
      items: [pushed[0], pushed[1], pushed[2]]
    });
    if (this.state.hiddenpercentagecopy >= 100) {
      pushed.push(
        "Slow Skull Crusher",
        "Slow French Press",
        "Slow Tricep Press",
        "Slow Rope Tricep Pushdown"
      );
      this.setState({
        items: [pushed[4], pushed[5], pushed[6], pushed[7]]
      });
    }
  };

  bicepOrder = i => {
    let pushed = [];

   

    for (i = 0; i < this.state.workouts.Bicep.length; i++) {
      pushed.push(this.state.workouts.Bicep[i]);
    }
    this.setState({
      items: [pushed[0], pushed[1], pushed[2]]
    });
    if (this.state.hiddenpercentagecopy >= 100) {
      pushed.push("Slow Bicep Curl", "Slow Hammer Curl", "Slow Preacher Curl");
      this.setState({
        items: [pushed[3], pushed[4], pushed[5]]
      });
    }
  };

  backOrder = i => {
    let pushed = [];

    for (i = 0; i < this.state.workouts.Back.length; i++) {
      pushed.push(this.state.workouts.Back[i]);
    }
    this.setState({
      items: [pushed[0], pushed[1], pushed[2]]
    });

    if (this.state.hiddenpercentagecopy >= 100) {
      pushed.push(
        "Slow Pull-Up",
        "Slow Dumbell Single Arm Row",
        "Slow Inverted Rows w Dumbell",
        "Slow Lat Pull-Downs w Dumbell"
      );
      this.setState({
        items: [pushed[4], pushed[5], pushed[6], pushed[7]]
      });
    }
  };

  chestOrder = i => {
    let pushed = [];

    for (i = 0; i < this.state.workouts.Chest.length; i++) {
      pushed.push(this.state.workouts.Chest[i]);
    }
    this.setState({
      items: [pushed[0], pushed[1], pushed[2], pushed[3]]
    });
    if (this.state.hiddenpercentagecopy >= 100) {
      pushed.push(
        "Slow Benchpress",
        "Slow Chest-Fly-Press",
        "Slow Incline Chest Press",
        "Slow Decline Chest Press"
      );
      this.setState({
        items: [pushed[4], pushed[5], pushed[6], pushed[7]]
      });
    }
  };

  legsOrder = i => {
    let pushed = [];

 

    for (i = 0; i < this.state.workouts.Legs.length; i++) {
      pushed.push(this.state.workouts.Legs[i]);
    }

    this.setState({
      items: [pushed[0], pushed[1], pushed[2], pushed[3], pushed[4]]
    });

    if (this.state.hiddenpercentagecopy >= 100) {
      pushed.push(
        "Lunges",
        "Squat",
        "Slow Lying Leg Curl",
        "Slow Leg Extentions",
        "Slow Seated Leg Curl"
      );
      this.setState({
        items: [pushed[5], pushed[6], pushed[7], pushed[8], pushed[9]]
      });
    }
  };

  shoulderOrder = i => {
    let pushed = [];

   

    for (i = 0; i < this.state.workouts.Shoulder.length; i++) {
      pushed.push(this.state.workouts.Shoulder[i]);
    }

    this.setState({
      items: [pushed[0], pushed[1], pushed[2]]
    });

    if (this.state.hiddenpercentagecopy >= 100) {
      pushed.push(
        "Slow Overhead Press",
        "Slow Front Barbell Raise",
        "Slow Seated Rear Delt Raise"
      );
      this.setState({
        items: [pushed[3], pushed[4], pushed[5]]
      });
    }
  };

  onChange = event => {
    event.preventDefault();
    this.setState({ text: event.target.value });
  };

  passingHidden = hidden=> {
   
    this.setState({ hiddenpercentagecopy: hidden});
 
  };

  getModifiedArray = (arr) => {
     //also passing FIREBASE data here, originally from LOGIN 
    this.setState({ items: arr, userEmail: this.props.fireBaseDataUserEmail });
    
   
  };

  handleChange = event => {
    this.setState({ selectedOption: event.target.value }, () =>
      this.triggerWorkout()
    );
  };
  
  componentDidMount = () => {

   
    this.getModifiedArray()
  }

  

  render() {
   
    return (
      <div>
        <div className="To-do-list-input">
          <select
            value={this.state.selectedOption}
            className="Dropdown-menu"
            onChange={this.handleChange}
          >
            <option value="" />
            <option value="bicep">Bicep</option>
            <option value="tricep">Tricep</option>
            <option selected value="Shoulder">
              Shoulder
            </option>
            <option value="Back">Back</option>
            <option value="Chest">Chest</option>
            <option value="Leg">Leg</option>
            <option value="Nathan Micay">LOCKED UNTIL LVL 3</option>
          </select>
        </div>

        <List
          passingUserEmail = {this.props.fireBaseDataUserEmail }
          passingEmail={this.state.email}
          passingHidden={this.passingHidden}
          passItem={this.state.items}
          pass={this.getModifiedArray}
          passExcerciseBicep={this.state.selectedOption}
          passExcerciseShoulder={this.state.workouts.Shoulder}
          passExcerciseBack={this.state.workouts.back}
        />
      </div>
    );
  }
}

export default Input;
