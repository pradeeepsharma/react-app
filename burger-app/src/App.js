import React, { Component } from 'react';

import {Person} from './Person/Person';
import './Person/person.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      outputOne: "",
      persons: [
        { id: '23455', name: 'Max', age: '31' },
        { id: '23456', name: 'Tax', age: '26' },
        { id: '23457', name: 'Saz', age: '41' }
      ]
    }

  };
  componentDidMount(){
    fetch('https://swapi.co/api/people/').then(results=>{
        return results.json();
    }).then(data=>{
      this.setState({persons:data.results})
      data.results.map((elem)=>{
        console.log(elem)
      })
      // Object.keys(data).map(element=>{
      //     console.log(element.name);
      //   })
    })
}
  inputHandler = (event) => {
    const userInput = event.target.value;
    this.setState({ userInput: userInput })
  };
  clickHandler = () => {
    this.setState({ outputOne: this.state.userInput })
  };

  iterateSome = () => {
    let value = "";
    this.state.persons.forEach(person => {
      value = person.name;
    })
    return value;
  };

  render() {
      return (
      <div className="App">
        {this.state.persons.map(element => {
          return <Person name={element.name} age={element.age} id={element.id} />
        })
        }
      </div>
    )
  }
}

export default App;
