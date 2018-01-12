import React , { Component } from 'react';
import Person from './Person/Person'
class Persons extends Component {
    constructor(props){
        super(props);
        console.log('[Persons.js] Inside Constructor',props)
    }
    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()')
      }
    
      componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()')
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update App.js] Inside shouldComponentUpdate()',nextProps, nextState)
        //return true;
        return nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.persons ||
        nextProps.clicked !== this.props.click;
      }
    
      componentWillUpdate(nextProps, nextState){
          console.log('[Update App.js] Inside componentWillUpdate()',nextProps,nextState)
      }
    
      componentDidUpdate(){
          console.log('[Update App.js] Inside componentDidUpdate()')
      }
      
    render() {
        console.log('[Persons.js] Inside render()')
        return this.props.persons.map((person, index) => {
            return <Person 
            click={this.props.clicked.bind(this,index)}
            //click={() => props.clicked(index)}
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event) => this.props.changed(event, person.id)}/>
          });
    }
}

export default Persons;
