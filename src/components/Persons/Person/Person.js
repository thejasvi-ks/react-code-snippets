import React, { Component, Fragment } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      // <Aux>
      <Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} Years Old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      {/* // </Aux> */}
      </Fragment>
    );
  }
}

export default Person;
