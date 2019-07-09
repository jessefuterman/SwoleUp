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
          "Overhead Press ",
          "Front Barbell Raise ",
          "Seated Rear Delt Raise "
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
          "French Press ",
          "Tricep Press ",
          "Rope Tricep Pushdown"
        ],
        Back: [
          "Pull-Up",
          "Dumbell Single Arm Row",
          "Inverted Rows w Dumbell",
          "Lat Pull-Downs w Dumbell"
        ],
        Bicep: ["Bicep Curl", "Hammer Curl", "Preacher Curl"],
        PersonalList: [""],
        
      },
      selectedOption: ""
    };
    console.log(this.state.selectedOption, "what is selected")
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      text: "",
      items: [...this.state.items, this.state.text]
    });
  };

  triggerWorkout = () => {
    if (this.state.selectedOption === "") {
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

  tricepOrder = () => {
    this.setState({
      text: "",
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
      text: "",
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

  shoulderOrder = () => {
    this.setState({
      text: "",
      items: [
        this.state.workouts.Shoulder[0],
        this.state.workouts.Shoulder[1],
        this.state.workouts.Shoulder[2]
      ]
    });
  };

  onChange = event => {
    event.preventDefault();
    this.setState({ text: event.target.value });
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
          <form onSubmit={this.onSubmit}>
            <input value={this.state.text} onChange={this.onChange} />
            <button type="submit"> Add Task </button>
          </form>
        </div>
        <List passItem={this.state.items} pass={this.getModifiedArray} passExcerciseBicep ={this.state.selectedOption} passExcerciseShoulder = {this.state.workouts.Shoulder} passExcerciseBack = {this.state.workouts.back}/>
      </div>
    );
  }
}


export default Input;
