import React, { Component } from 'react';
// import './App.css';
import classes from './App.css';
import Person from './Person/Person';
// import Radium , { StyleRoot } from 'radium';
// import styled from 'styled-components';

// const StyledButton = styled.button`
//   background-color : ${props => props.alt ? 'red': 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 'ghvv1', name: 'Max', age: 28 },
      { id: 'hvchgvg', name: 'Manu', age: 29 },
      { id : '24vuyuyj', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow});
  }

  render() {
    // const style = {
    //     backgroundColor : 'green',
    //     color: 'white',
    //     font: 'inherit',
    //     border: '1px solid blue',
    //     padding: '8px',
    //     cursor: 'pointer',
    //     ':hover': {
    //       backgroundColor: 'lightgreen',
    //       color: 'black'
    //     }
    // };

    let persons = null;

    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index) } 
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />;
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // }
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // classes will be red.
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); // classes will be bold 
    }
    
    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className = { assignedClasses.join(' ') }>This is really working!</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton> */}
        { persons }
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);

export default App;