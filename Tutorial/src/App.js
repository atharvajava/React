import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:1,name:"Atharva",age:26},
      { id:2,name:"Ram",age:22},
      { id:3,name:"Hari",age:16}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[{ name:newName,age:22}]
    })
  }

  nameChangeHandler = (event, id) =>{
    const personIndex= this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person= {
      ...this.state.persons[personIndex]
    };
    //const person= Object.assign({}, this.state.persons[personIndex])
    person.name= event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex]= person;
    
    this.setState({
      persons:persons
    })
  }

  togglePersonsHandler= () =>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonsHandler=(personIndex) => {
    //always update state in an immutable fashion by making the copy of original one
    //const persons= this.state.persons.slice();
    const persons= [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }
  render() {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    let persons=null;
    if (this.state.showPersons){
      persons= (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={this.deletePersonsHandler.bind(this,index)}
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={(event) => this.nameChangeHandler(event, person.id)}/>
        })}
        </div>
      )
      style.backgroundColor = 'blue';
      style.color= 'white'
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Dashboard</h1>
        <p className={classes.join(' ')}> Testing my react app </p>
        <button style={style} onClick={this.togglePersonsHandler}>Show Persons</button>
        { 
          //this.state.showPersons?
            persons
          //: null
        }
      </div>
    );
  }
}

export default App;
