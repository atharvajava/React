import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name:"Atharva",age:28}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[{ name:newName,age:22}]
    })
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons:[{ name: event.target.value, age:22 }]
    })
  }

  render() {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Dashboard</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Atharva')}>Switch Name</button>
        <Person name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Karamchand')}
        changed={this.nameChangeHandler}>My Hobbies: Dancing</Person>
      </div>
    );
  }
}

export default App;
