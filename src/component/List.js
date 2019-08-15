import React, { Component } from "react";
// import moment from "moment";
import ProgressBarExample from "./ProgressBarExample.js";
import Modal from "react-responsive-modal";
import Firebase from "firebase";
// import fire from "./component/fire.js"
import Login from "./Login.js";

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
import fire from "./fire.js";

// Initialize Firebase
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
          "Grab an EZ-bar with your hands six inches apart. Rest your upper arms on the sloping pad of a preacher bench and hold the bar in front of you with your elbows slightly bent. Without moving your upper arms, bend your elbows and curl the bar toward your shoulders. Pause, then slowly lower the weight back to the starting position",
          "The same as the regular Curl, except do it as SLOWLY as you can while focusing on your breath.Step 1: Stand up straight with a dumbbell in each hand, holding them alongside you. Your palms should face your body. Keep your feet hip-width apart and engage your core to stabilize the body. Step 2: Keep your biceps stationary and start bending at your elbows, lifting both dumbbells. Step 3:Lift until the dumbbells reach shoulder-level, but don’t actually touch your shoulders. Hold this contraction briefly, then lower back to the starting position and repeat.",
          "The same as the regular Hammer Curl, except do it as SLOWLY as you can while focusing on your breath. Grab a pair of dumbbells and let them hang at arm’s length next to your sides with your palms facing your thighs. Without moving your upper arms, bend your elbows and curl the dumbbells as close to your shoulders as you can. Pause, then slowly lower the weight back to the starting position. Each time you return to the starting position, completely straighten your arms.",
          "The same as the regular Preacher Curl, except do it as SLOWLY as you can while focusing on your breath. Grab an EZ-bar with your hands six inches apart. Rest your upper arms on the sloping pad of a preacher bench and hold the bar in front of you with your elbows slightly bent. Without moving your upper arms, bend your elbows and curl the bar toward your shoulders. Pause, then slowly lower the weight back to the starting position"
        ],
        Tricep: [
          "Set up for the french press by loading a barbell or EZ-bar with the appropriate amount of weight and placing it on the floor in front of you. Bend only at the knees and grasp the barbell with an overhand grip (palms facing down) with your hands about 8-12 inches apart. Stand up straight with the bar with your feet around shoulder width apart and a slight bend in your knees. Lift the bar above your head and bend at your elbows slightly to take the tension onto your triceps. Your palms are now facing upward. This is the starting position for the exercise. Keeping your elbows fixed and pointing straight up toward the ceiling, slowly lower the bar down behind your head as far as comfortably possible. Pause, and then slowly raise the bar back to the starting position. Don't lock your elbows out, and then repeat the movement.",
          "To perform the Skull Crusher excercise, sit up straight on a chair, bench or -- for an added balance challenge -- a stability ball. Place both feet flat on the floor and hold the dumbbells above your head. Your arms should be extended toward the ceiling -- but not locked -- with your palms facing each other. Bend your elbows to lower the weights slowly behind your head. As with the lying version, try to move your shoulders and upper arms as little as possible. Extend your arms upward to complete one repetition. Keep your head up, your abs tight and your back straight at all times.",
          "Set the cable machine up with the bar at head height. Grab the bar and stand upright with your back straight and your elbows tucked in to your sides. Stand with your feet hip-width apart, or place one in front of the other if it helps you balance. Pull the cable down until the bar touches your thighs and pause to squeeze your triceps at the bottom of the move. Then slowly raise the bar back to the starting position. Make sure you don’t lean forwards to aid the press and don’t let your elbows leave your sides, otherwise you’ll lose some of the focus on the triceps.",
          "Start by bracing your abdominals.Tuck your elbows in at your sides and position your feet slightly apart Inhale. Push down until your elbows are fully extended but not yet in the straight, locked position. Keep your elbows close to your body and bend your knees slightly on the pushdown. Resist bending forward. Try to keep your back as straight as possible as you push down. As you exhale, return to the starting point using a controlled movement. Try not to crash the weights.For beginners, aim to complete 4 sets of 8 reps",
          "The same as the regular French Press, except do it as SLOWLY as you can while focusing on your breath. Set up for the french press by loading a barbell or EZ-bar with the appropriate amount of weight and placing it on the floor in front of you. Bend only at the knees and grasp the barbell with an overhand grip (palms facing down) with your hands about 8-12 inches apart. Stand up straight with the bar with your feet around shoulder width apart and a slight bend in your knees. Lift the bar above your head and bend at your elbows slightly to take the tension onto your triceps. Your palms are now facing upward. This is the starting position for the exercise. Keeping your elbows fixed and pointing straight up toward the ceiling, slowly lower the bar down behind your head as far as comfortably possible. Pause, and then slowly raise the bar back to the starting position. Don't lock your elbows out, and then repeat the movement.",
          "The same as the regular Skull Crusher, except do it as SLOWLY as you can while focusing on your breath. To perform the Skull Crusher excercise, sit up straight on a chair, bench or -- for an added balance challenge -- a stability ball. Place both feet flat on the floor and hold the dumbbells above your head. Your arms should be extended toward the ceiling -- but not locked -- with your palms facing each other. Bend your elbows to lower the weights slowly behind your head. As with the lying version, try to move your shoulders and upper arms as little as possible. Extend your arms upward to complete one repetition. Keep your head up, your abs tight and your back straight at all times.",
          "The same as the regular Tricep Press, except do it as SLOWLY as you can while focusing on your breath. Set the cable machine up with the bar at head height. Grab the bar and stand upright with your back straight and your elbows tucked in to your sides. Stand with your feet hip-width apart, or place one in front of the other if it helps you balance. Pull the cable down until the bar touches your thighs and pause to squeeze your triceps at the bottom of the move. Then slowly raise the bar back to the starting position. Make sure you don’t lean forwards to aid the press and don’t let your elbows leave your sides, otherwise you’ll lose some of the focus on the triceps.",
          "The same as the regular Rope Tricep Pushdown, except do it as SLOWLY as you can while focusing on your breath. Start by bracing your abdominals.Tuck your elbows in at your sides and position your feet slightly apart Inhale. Push down until your elbows are fully extended but not yet in the straight, locked position. Keep your elbows close to your body and bend your knees slightly on the pushdown. Resist bending forward. Try to keep your back as straight as possible as you push down. As you exhale, return to the starting point using a controlled movement. Try not to crash the weights.For beginners, aim to complete 4 sets of 8 reps"
        ],
        Shoulder: [
          "The movement begins in the bottom (start) position. Stand with your entire body tight and rigid. Hold a barbell just above your upper chest, hands slightly wider that shoulder width. Now think of an imaginary straight line drawn from the elbows through the wrists and hands and into the ceiling. Press the bar up along this path as the elbows extend, taking the same path back down to the starting position. Dumbbells and kettlebells are pressed similarly, with one slight alteration. For some variations, the hands start in a neutral (facing-in) position at the bottom. Start with the hands neutral in the bottom position. Rotating the arms parallel with the ears as you press makes use of the shoulder's entire range of motion. The rest is the same. The elbows extend as the bell is pressed up and back.",
          "Adopt a pronated, shoulder-width grip on the barbell from a standing position. Allow your arms to hang straight down to mid thigh with the elbows extended. Your head should face forward, with your shoulders back and your chest up. Maintain a neutral spine and contract your abs to provide core support. This will be your starting position. Initiate the movement by flexing the shoulder, raising the weight straight out in front of you. Keep the elbows extended and the wrist neutral throughout the movement. Continue the upward movement of the arms until the barbell is just above shoulder height. At the top of the motion, pause briefly, and then slowly return to the starting position.",
          "Place a couple of dumbbells looking forward in front of a flat bench. Sit on the end of the bench with your legs together and the dumbbells behind your calves. Bend at the waist while keeping the back straight in order to pick up the dumbbells. The palms of your hands should be facing each other as you pick them. This will be your starting position.Keeping your torso forward and stationary, and the arms slightly bent at the elbows, lift the dumbbells straight to the side until both arms are parallel to the floor. Exhale as you lift the weights. (Note: avoid swinging the torso or bringing the arms back as opposed to the side.) After a one second contraction at the top, slowly lower the dumbbells back to the starting position. Repeat for the recommended amount of repetitions. Variation: This exercise can also be performed standing but those with lower back problems are better off performing this seated variety.",
          "The same as the regular Overhead Press, except do it as SLOWLY as you can while focusing on your breath. The movement begins in the bottom (start) position. Stand with your entire body tight and rigid. Hold a barbell just above your upper chest, hands slightly wider that shoulder width. Now think of an imaginary straight line drawn from the elbows through the wrists and hands and into the ceiling. Press the bar up along this path as the elbows extend, taking the same path back down to the starting position. Dumbbells and kettlebells are pressed similarly, with one slight alteration. For some variations, the hands start in a neutral (facing-in) position at the bottom. Start with the hands neutral in the bottom position. Rotating the arms parallel with the ears as you press makes use of the shoulder's entire range of motion. The rest is the same. The elbows extend as the bell is pressed up and back.",
          "The same as the regular Front Barbell Rise, except do it as SLOWLY as you can while focusing on your breath. Adopt a pronated, shoulder-width grip on the barbell from a standing position. Allow your arms to hang straight down to mid thigh with the elbows extended. Your head should face forward, with your shoulders back and your chest up. Maintain a neutral spine and contract your abs to provide core support. This will be your starting position. Initiate the movement by flexing the shoulder, raising the weight straight out in front of you. Keep the elbows extended and the wrist neutral throughout the movement. Continue the upward movement of the arms until the barbell is just above shoulder height. At the top of the motion, pause briefly, and then slowly return to the starting position.",
          "The same as the regular Seated Rear Delt Raise, except do it as Slowly as you can while focusing on your breath. Place a couple of dumbbells looking forward in front of a flat bench. Sit on the end of the bench with your legs together and the dumbbells behind your calves. Bend at the waist while keeping the back straight in order to pick up the dumbbells. The palms of your hands should be facing each other as you pick them. This will be your starting position.Keeping your torso forward and stationary, and the arms slightly bent at the elbows, lift the dumbbells straight to the side until both arms are parallel to the floor. Exhale as you lift the weights. (Note: avoid swinging the torso or bringing the arms back as opposed to the side.) After a one second contraction at the top, slowly lower the dumbbells back to the starting position. Repeat for the recommended amount of repetitions."
        ]
      },
      elem: "",
      workouts: this.props.passworkouts,
      switch: true,
      lvl2switch: true,
      lvl3switch: true,
      lvl4switch: true,
      email: "",

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
    //Bicep
    if (this.state.elem === "Bicep Curl") {
      return this.state.modalText.Bicep[0];
    }
    if (this.state.elem === "Hammer Curl") {
      return this.state.modalText.Bicep[1];
    }
    if (this.state.elem === "Preacher Curl") {
      return this.state.modalText.Bicep[2];
    }
    //Slow Bicep (LVL 2)
    if (this.state.elem === "Slow Bicep Curl") {
      return this.state.modalText.Bicep[3];
    }
    if (this.state.elem === "Slow Hammer Curl") {
      return this.state.modalText.Bicep[4];
    }
    if (this.state.elem === "Slow Preacher Curl") {
      return this.state.modalText.Bicep[5];
    }
    //Tricep
    if (this.state.elem === "French Press") {
      return this.state.modalText.Tricep[0];
    }
    if (this.state.elem === "Skull Crusher") {
      return this.state.modalText.Tricep[1];
    }
    if (this.state.elem === "Tricep Press") {
      return this.state.modalText.Tricep[2];
    }
    if (this.state.elem === "Rope Tricep Pushdown") {
      return this.state.modalText.Tricep[3];
    }
    //Slow Tricep (LVL 2)
    if (this.state.elem === "Slow Skull Crusher") {
      return this.state.modalText.Tricep[4];
    }
    if (this.state.elem === "Slow French Press") {
      return this.state.modalText.Tricep[5];
    }
    if (this.state.elem === "Slow Tricep Press") {
      return this.state.modalText.Tricep[6];
    }
    if (this.state.elem === "Slow Rope Tricep Pushdown") {
      return this.state.modalText.Tricep[7];
    }
    //Shoulder
    if (this.state.elem === "Overhead Press") {
      return this.state.modalText.Shoulder[0];
    }
    if (this.state.elem === "Front Barbell Raise") {
      return this.state.modalText.Shoulder[1];
    }
    if (this.state.elem === "Seated Rear Delt Raise") {
      return this.state.modalText.Shoulder[2];
    }
    if (this.state.elem === "Slow Overhead Press") {
      return this.state.modalText.Shoulder[3];
    }
    if (this.state.elem === "Slow Front Barbell Raise") {
      return this.state.modalText.Shoulder[4];
    }
    if (this.state.elem === "Slow Seated Rear Delt Raise") {
      return this.state.modalText.Shoulder[5];
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
      return (
        <h1 className="levelup">
          !!!SLOWED EXCERCISES HAVE BECOME UNLOCKED!!!
        </h1>
      );
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

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.workouts !== this.props.workouts) {
      this.setState({
        workouts: this.props.passExcerciseBicep
      });
    }

    if (prevProps.passItem !== this.props.passItem) {
      this.setState({ list: this.props.passItem });
    }
    ///
    if (this.state.switch === false) {
      setTimeout(() => this.setState({ switch: true }), 1000);
    }

    if (this.state.lvl2switch === false) {
      setTimeout(() => this.setState({ lvl2switch: true }), 3000);
    }
    if (this.state.lvl3switch === false) {
      setTimeout(() => this.setState({ lvl3switch: true }), 1500);
    }
    if (this.state.lvl4switch === false) {
      setTimeout(() => this.setState({ lvl4switch: true }), 1500);
    }
  };

  // passEmail = props => {
  //   this.setState({
  //     email: this.props.passingEmail
  //   });
  //   console.log(this.props.passingEmail, "this is props passingemail");
  // };

  //firebase

  submitScore = () => {
    //level1
    if (this.state.hiddenpercentage >= 375) {
    } else if (this.state.hiddenpercentage >= 250) {
      this.passEmail();
      console.log("does this get to this.state.titles[2");
      let data = {
        levelTitle: this.state.titles[2],
        name: this.props.passingEmail,
        experience: this.state.hiddenpercentage
      };
      let database = Firebase.database();
      let ref = database.ref("UserInfo");
      ref.push(data);
    } else if (this.state.hiddenpercentage >= 125) {
      console.log("are we getting inside level 2 conditional");
      // this.passEmail();
      let data = {
        levelTitle: this.state.titles[1],
        name: this.props.passingEmail,
        experience: this.state.hiddenpercentage
      };
      let database = Firebase.database();
      let ref = database.ref("UserInfo");
      ref.push(data);
      console.log(data, "firebase data level 2");
    } else if (this.state.hiddenpercentage >= 0) {
      // this.passEmail();
      console.log("are we getting inside of conditional title");
      let data = {
        levelTitle: this.state.titles[0],
        name: this.props.passingEmail,
        experience: this.state.hiddenpercentage
      };

      let database = Firebase.database();
      let ref = database.ref("Userinfo");
      ref.push(data);
      console.log(data, "this is firebase data");
    }

    //level2
  };

  handleSubmit = str => {
    this.setState((prevState, props) => ({
      hiddenpercentage: this.state.hiddenpercentage + 25,
      percentage: this.state.percentage + 25,
      list: del,
      switch: false
    }));

    //passing hidden percentage
    let hidden = this.state.hiddenpercentage;
    this.props.passingHidden(hidden);
    //exp rules
    if (this.state.percentage === 100) {
      this.setState({ percentage: this.state.percentage * 0 });
    }
    if (this.state.hiddenpercentage === 350) {
      this.setState({ lvl4switch: false });
    }
    if (this.state.hiddenpercentage === 225) {
      this.submitScore();

      this.setState({ lvl3switch: false });
    }
    if (this.state.hiddenpercentage === 100) {
      this.submitScore();

      this.setState({ lvl2switch: false });
    }

    let del = this.state.list.filter(x => x !== str);

    this.props.pass(del);
  };

  changeTitle = () => {
    if (this.state.hiddenpercentage >= 375) {
      return this.state.titles[3];
    } else if (this.state.hiddenpercentage >= 250) {
      return this.state.titles[2];
    } else if (this.state.hiddenpercentage >= 125) {
      return this.state.titles[1];
    } else if (this.state.hiddenpercentage >= 0) {
      return this.state.titles[0];
    }
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
        <h1 className="titles"> {this.changeTitle()}</h1>
      </div>
    );
  }
}

export default List;
