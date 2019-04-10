import React, { Component } from 'react';
import {UserInput} from './User/UserInput'; 
import UserOutput from './User/UserOuput'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {userInput:"", outputOne:""}

  };
  inputHandler=(event)=>{
    const userInput = event.target.value;
    this.setState({userInput:userInput})
  };
  clickHandler=()=>{
     this.setState({outputOne:this.state.userInput})
  };
  render() {
    return (
      <div className="App">
        <UserInput inputHandler={this.inputHandler}/>
        <UserOutput name2={this.state.outputOne} clickHandler={this.clickHandler}/>
       
      </div>
    );
  }
}

export default App;
