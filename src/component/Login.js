import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import fire from "./fire";
import Firebase from "firebase";
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
    
      userEmail:""
    
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    
    
    
  }

  login(e) {
    this.getScores()
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
      let email = this.state.email 
      this.props.passEmail(email)
      

      
  }

  signup(e) {
   this.getScores()
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }
  getScores = () => {
    let database = Firebase.database();
    var ref = database.ref("Userinfo");
    ref.on("value", this.getData, this.errData);

  };



  getData = (data) => {
    let scores = data.val();
    let keys = Object.keys(scores);
    let k = keys;
   
    let names = scores.name;
  
    for (let i = 0; i < keys.length; i++) {
       k = keys[i];
    
      names = scores[k].name;
     
      
      
    }
    this.setState({ userEmail: names });
    console.log(names, "we in log-in")
    
   
    //passing firebase data to parent APP and then to LIST so it can render
  
    let userEmail = this.state.userEmail
    
    this.props.fireBaseData(userEmail)

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
          
            <small id="emailHelp" class="form-text text-muted">
              
            </small>
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
