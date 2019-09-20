import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import fire from "./fire";
import {Firebase, snapshot} from "firebase";
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
      experience: 0,
      id: this.props.passId,
      userEmail: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
       
        this.getScores();
      })
      .catch(error => {
        console.log(error);
      });


      
    let email = this.state.email;
    this.props.passEmail(email);
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {this.saveData()})
      .then(u => {
        
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
    // this.getScores()
  }



  saveData = () => {
    let data = {
      levelTitle: this.state.titles[0],
    
      experience: 0,
 
      percentage: 0,
  
      id: this.props.passId,
   
     
      name: this.state.email
    };
    let database = Firebase.database();
    let ref = database.ref("SaveGameThree");
    ref.push(data);


  }
  getScores = () => {
    let database = fire.database();
    var ref = database.ref("SaveGameThree");
    ref.on("value", this.getData, this.errData);
    
  
  };


 

  getData = (data,  fireDataUid) => {
    
     let allIds = []
    let scores = data.val();
    let keys = Object.keys(scores);
    let k = keys;
    let experience = scores.experience;
    let title = scores.title;
    let names = scores.name;
    let userId = scores.id

    for (let i = 0; i < keys.length; i++) {
      k = keys[i];
      userId = scores[k].id
      names = scores[k].name;
      experience = scores[k].experience;
      
      title = scores[k].levelTitle;
      allIds.push(userId)
    }
  
   
   this.setState({
    userEmail: names,
   
    id: this.props.passId
  });
  //Get the current userID


  // console.log(this.state.id, "current user id in state")
  //    console.log(allIds.find(userId => {
  //     console.log("userid",userId, "this.state.id",this.state.id)
  //     return userId === this.state.id 
  //     }), "find data")
   
     
    this.props.fireBaseData(names);
   
  
    var user = fire.auth().currentUser.uid;
   
  
 
if (user) {
  let email = this.state.email
 
let percentage
  var usersRef = fire.database().ref("SaveGameThree").orderByChild("name").equalTo(email);
usersRef.limitToLast(1).on("child_added", function(snapshot) {
 

  console.log(snapshot.child("experience").val(), "this is the experience");
    // console.log(snapshot.child("id").val(), "this is id");
    // console.log(snapshot.child("name").val(), "this is email");
    // console.log(snapshot.child("percentage").val(), "this is perentage");
    experience =  snapshot.child("experience").val()
    percentage = snapshot.child("percentage").val()
});
let fillPercentage = percentage

let Xp = experience
// this.props.passingPercentData(fillPercentage)
this.props.passingXp(Xp, fillPercentage)

console.log(fillPercentage, "is fill coming in from firebase")
this.setState({
  
  experience: this.state.experience + experience,
 
});
//  let fireBaseXp = this.state.experience
//  console.log(fireBaseXp, "what is this?!")
// this.props.passingXp(fireBaseXp)


} else {
  // No user is signed in.
}


    
  
   
  };


  errData = err => {};

  render() {
    
    return (
      <div className="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />

            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              class="form-control2"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">
            Login
          </button>
          <button
            onClick={this.signup}
            style={{ marginLeft: "25px" }}
            className="btn btn-success"
          >
            Signup
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
