import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromprops");
  //     return state;
  //   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[Persons.js] shouldComponentUpdate");
//     if (
//       nextProps.persons !== this.props.persons ||
//       nextProps.changed !== this.props.changed ||
//       nextProps.clicked !== this.props.clicked
//     ) {
//       return true;
//     }
//     return false;
//   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Perosns.js] getSnapShotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("[Perosns.js] componentDidUpdate");
    console.log("Snapshot is ", snapShot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering....");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
