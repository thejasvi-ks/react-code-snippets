import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
 
    const [personsState, setPersonsState ] = useState({ // it always returns two elements (prev state object and a method to set new state.)
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Ratan", age: 26 },
      ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
      setPersonsState({
        persons: [
          { name: "Tks", age: 28 },
          { name: "Manu", age: 29 },
          { name: "Ratan", age: 19 },
        ]
      });
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p> Hello Wolrd</p>
        <button onClick = { switchNameHandler } >Switch Name</button>
        <Person name = { personsState.persons[0].name } age= { personsState.persons[0].age }/>
        <Person name = { personsState.persons[1].name } age= { personsState.persons[1].age }> My Hobbies: Racing </Person>
        <Person name = { personsState.persons[2].name } age= { personsState.persons[2].age }/>
      </div>
    );
    // return React.createElement('div',{ className: 'App' }, React.createElement('h1', null, 'I\'m a React App Too'));
}

export default App;

// state = {
//   persons : [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: 'Ratan', age: 26 },
//   ],
//   otherState: 'Xyz'
// }

// switchNameHandler = () => {
//   // console.log('Was Clicked!');
//   // personsState.persons[0].name = 'thejasviks'; // Don't do this.
//   this.setState({
//     persons: [
//       { name: "Tks", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Ratan", age: 19 },
//     ],
//   });
// }
