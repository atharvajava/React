import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Indside Constructor',props)
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }
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
    console.log('[App.js] Inside Render') 
    let persons=null;

    if (this.state.showPersons){
      persons=<Persons 
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangeHandler} />;
    }

    return (
      <div className={classes.App}>
      <button onClick={()=>{this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit 
      appTitle={this.props.title}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler}/>
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
