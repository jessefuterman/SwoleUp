import React, { Component } from "react";
// import moment from "moment";
import ProgressBarExample from "./ProgressBarExample.js";
import Modal from "react-responsive-modal";

import {
  Button,
  Checkbox,
  TextInput,
  TextArea,
  Balloon,
  Table,
  Progress,
  Icon,
  Sprite
} from "nes-react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      list: this.props.passItem,
      hiddenpercentage: 0,
      percentage: 0,
      open: false,
      modalText: {
        Bicep: [
          "Step 1: Stand up straight with a dumbbell in each hand, holding them alongside you. Your palms should face your body. Keep your feet hip-width apart and engage your core to stabilize the body. Step 2: Keep your biceps stationary and start bending at your elbows, lifting both dumbbells. Step 3:Lift until the dumbbells reach shoulder-level, but don’t actually touch your shoulders. Hold this contraction briefly, then lower back to the starting position and repeat.",
          "Grab a pair of dumbbells and let them hang at arm’s length next to your sides with your palms facing your thighs. Without moving your upper arms, bend your elbows and curl the dumbbells as close to your shoulders as you can. Pause, then slowly lower the weight back to the starting position. Each time you return to the starting position, completely straighten your arms.",
          "Grab an EZ-bar with your hands six inches apart. Rest your upper arms on the sloping pad of a preacher bench and hold the bar in front of you with your elbows slightly bent. Without moving your upper arms, bend your elbows and curl the bar toward your shoulders. Pause, then slowly lower the weight back to the starting position"
        ],
        Tricep: [
          "Set up for the french press by loading a barbell or EZ-bar with the appropriate amount of weight and placing it on the floor in front of you. Bend only at the knees and grasp the barbell with an overhand grip (palms facing down) with your hands about 8-12 inches apart. Stand up straight with the bar with your feet around shoulder width apart and a slight bend in your knees. Lift the bar above your head and bend at your elbows slightly to take the tension onto your triceps. Your palms are now facing upward. This is the starting position for the exercise. Keeping your elbows fixed and pointing straight up toward the ceiling, slowly lower the bar down behind your head as far as comfortably possible. Pause, and then slowly raise the bar back to the starting position. Don't lock your elbows out, and then repeat the movement.",
          "To perform the Skull Crusher excercise, sit up straight on a chair, bench or -- for an added balance challenge -- a stability ball. Place both feet flat on the floor and hold the dumbbells above your head. Your arms should be extended toward the ceiling -- but not locked -- with your palms facing each other. Bend your elbows to lower the weights slowly behind your head. As with the lying version, try to move your shoulders and upper arms as little as possible. Extend your arms upward to complete one repetition. Keep your head up, your abs tight and your back straight at all times.",
          "Set the cable machine up with the bar at head height. Grab the bar and stand upright with your back straight and your elbows tucked in to your sides. Stand with your feet hip-width apart, or place one in front of the other if it helps you balance. Pull the cable down until the bar touches your thighs and pause to squeeze your triceps at the bottom of the move. Then slowly raise the bar back to the starting position. Make sure you don’t lean forwards to aid the press and don’t let your elbows leave your sides, otherwise you’ll lose some of the focus on the triceps.",
          "Start by bracing your abdominals.Tuck your elbows in at your sides and position your feet slightly apart Inhale. Push down until your elbows are fully extended but not yet in the straight, locked position. Keep your elbows close to your body and bend your knees slightly on the pushdown. Resist bending forward. Try to keep your back as straight as possible as you push down. As you exhale, return to the starting point using a controlled movement. Try not to crash the weights.For beginners, aim to complete 4 sets of 8 reps"
        ]
      },
      elem: "",
      workouts: this.props.passworkouts,
      switch: true,
      lvl2switch: true,
      lvl3switch: true,
      lvl4switch: true,
      hiddenworkout: ["shandy", "sisters"],
      titles: [
        "LVL 1: LIL LIFTER",
        "LVL 2: GAINING ON YA",
        "LVL 3: OPA GAIN NAM STYLE",
        "LVL 4: BIG LIFTER"
      ]
    };
  }
  onOpenModal = elem => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  infoLogic = () => {
    if (this.state.elem === "Bicep Curl") {
      return this.state.modalText.Bicep[0];
    }
    if (this.state.elem === "Hammer Curl") {
      return this.state.modalText.Bicep[1];
    }
    if (this.state.elem === "Preacher Curl") {
      return this.state.modalText.Bicep[2];
    }
    if (this.state.elem === "French Press") {
      return this.state.modalText.Tricep[0];
    }
    if (this.state.elem === "Skull Crushers") {
      return this.state.modalText.Tricep[1];
    }
    if (this.state.elem === "Tricep Press") {
      return this.state.modalText.Tricep[2];
    }
    if (this.state.elem === "Rope Tricep Pushdown") {
      return this.state.modalText.Tricep[3];
    }
  };

  lify = event => {
    if (this.state.list !== undefined) {
      let mapOne = this.state.list.map(elem => (
        <li>
          {elem}

          <button
            className="buttonTwo"
            onClick={() => {
              this.handleSubmit(elem);
              this.handleExperience(elem);
              this.setState({ elem: elem });
              console.log(elem, "what is elem");
            }}
          >
            POWER UP
          </button>

          <button
            className="button"
            onClick={() => {
              this.onOpenModal(elem);

              this.setState({ elem: elem });
            }}
          >
            ?
          </button>
        </li>
      ));
      return mapOne;
    }
  };

  handleExperience = () => {
    if (this.state.switch === false) {
      return <h1 className="vidya"> !!10XP!!</h1>;
    }
  };

  handleLevelup = () => {
    if (this.state.lvl2switch === false) {
      return <h1 className="levelup"> !SWOLE POWER LVL UP!</h1>;
    }
    if (this.state.lvl3switch === false) {
      return <h1 className="levelup"> !SWOLE ON SWOLE LVL UP!</h1>;
    }
    if (this.state.lvl4switch === false) {
      return (
        <h1 className="levelup">
          {" "}
          !!LVL UP!! U CANT CONTROL THE SWOLE !!LVL UP!!
        </h1>
      );
    }
  };

  componentDidUpdate = previousProps => {
    if (this.props.workouts !== previousProps) {
      this.setState({
        workouts: this.props.passExcerciseBicep,
       
      });
    }

    if (this.props.list !== previousProps){
      this.setState({list: this.props.passItem})
    }
    ///
    if (this.state.switch === false) {
      setTimeout(() => this.setState({ switch: true }), 1000);
    }

    if (this.state.lvl2switch === false) {
      setTimeout(() => this.setState({ lvl2switch: true }), 1500);
    }
    if (this.state.lvl3switch === false) {
      setTimeout(() => this.setState({ lvl3switch: true }), 1500);
    }
    if (this.state.lvl4switch === false) {
      setTimeout(() => this.setState({ lvl4switch: true }), 1500);
    }
  };

  handleSubmit = str => {
    this.setState((prevState, props) => ({
      hiddenpercentage: this.state.hiddenpercentage + 25,
      percentage: this.state.percentage + 25,
      list: del,
      switch: false
    }));

    //exp rules
    if (this.state.percentage === 100) {
      this.setState({ percentage: this.state.percentage * 0 });
    }
    if (this.state.hiddenpercentage === 350) {
      this.setState({ lvl4switch: false });
    }
    if (this.state.hiddenpercentage === 225) {
      this.setState({ lvl3switch: false });
    }
    if (this.state.hiddenpercentage === 100) {
      let hidden = this.state.hiddenpercentage
      this.props.passingHidden(hidden)
      this.setState({ lvl2switch: false });
    }
    
    let del = this.state.list.filter(x => x !== str);
    
    this.props.pass(del);
  };

  changeTitle = () => {
    if (this.state.hiddenpercentage >= 375) {
      return this.state.titles[3];
    }
    if (this.state.hiddenpercentage >= 250) {
      return this.state.titles[2];
    }
    if (this.state.hiddenpercentage >= 125) {
      return this.state.titles[1];
    }
    return this.state.titles[0];
  };

  render() {
    const { open } = this.state;

    return (
      <div className="task-list">
        <ul>{this.lify()}</ul>

        <div className="App-header" />
        <ProgressBarExample
          pass={this.state.percentage}
          passHidden={this.state.hiddenpercentage}
        />

        <Modal open={open} onClose={this.onCloseModal} center>
          <h2 className="modal">{this.infoLogic()}</h2>
        </Modal>
        <div>
          <h1>{this.handleLevelup()}</h1>
          <h1>{this.handleExperience()}</h1>
        </div>
        <div className="titles"> {this.changeTitle()}</div>
        
      </div>
    );
  }
}

export default List;
