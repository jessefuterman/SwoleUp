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
          "Skull Crushers",
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
      hiddenpercentagecopy: 0
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
    if (this.state.selectedOption === "PersonalWorkout") {
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

  tricepOrder = () => {
    this.setState({
      items: [
        this.state.workouts.Tricep[0],
        this.state.workouts.Tricep[1],
        this.state.workouts.Tricep[2],
        this.state.workouts.Tricep[3]
      ]
    });
  };

  bicepOrder = () => {
    this.setState({
      items: [
        this.state.workouts.Bicep[0],
        this.state.workouts.Bicep[1],
        this.state.workouts.Bicep[2]
      ]
    });
  };

  backOrder = () => {
    this.setState({
      text: "",
      items: [
        this.state.workouts.Back[0],
        this.state.workouts.Back[1],
        this.state.workouts.Back[2],
        this.state.workouts.Back[3]
      ]
    });
  };

  chestOrder = () => {
    this.setState({
      text: "",
      items: [
        this.state.workouts.Chest[0],
        this.state.workouts.Chest[1],
        this.state.workouts.Chest[2],
        this.state.workouts.Chest[3]
      ]
    });
  };

  legsOrder = () => {
    this.setState({
      text: "",
      items: [
        this.state.workouts.Legs[0],
        this.state.workouts.Legs[1],
        this.state.workouts.Legs[2],
        this.state.workouts.Legs[3]
      ]
    });
  };

  shoulderOrder = i => {
    let pushed = [];
    
    
   
 
    for (i = 0; i < this.state.workouts.Shoulder.length; i++) {
      pushed.push(
       
          <li>{this.state.workouts.Shoulder[i]}</li>
          
       
      )
    }

    this.setState({
      
      items: [pushed],
     
    });
  };

  onChange = event => {
    event.preventDefault();
    this.setState({ text: event.target.value });
  };

  passingHidden = hidden => {
    this.unlockExcercise();
    this.setState({ hiddenpercentagecopy: hidden });
    console.log("this is hiddenpercentage", this.state.hiddenpercentagecopy);
  };

  unlockExcercise = () => {
    if (this.state.hiddenpercentagecopy >= 75) {
      console.log(this.state.workouts.items, "this is personal");
      let newTask = "lalalalala";

      this.setState(prevState => ({
        PersonalWorkout: [this.state.workouts.items, ...newTask]
      }));
    }
  };

  getModifiedArray = arr => {
    this.setState({ items: arr });
  };

  handleChange = event => {
    this.setState({ selectedOption: event.target.value }, () =>
      this.triggerWorkout()
    );
  };

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
            <option value="PersonalWorkout">Personal Workout List</option>
          </select>
        </div>

        <List
       
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
