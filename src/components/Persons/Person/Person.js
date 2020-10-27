import React, { Component, Fragment } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {

  constructor(props){
    super(props);
    this.inputElementRef = React.createRef(); // Offered by React 16.3
  }
  componentDidMount(){
    // this.inputElement.focus(); // By this time inputElement(global ID) should have been set by render() method.
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        { this.props.isAuthenticated ? <p> Authenticated </p> ? <p> Please Log In </p> }
      {/* <Fragment> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} Years Old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          type="text"
          // ref = {(inputEl) => { this.inputElement = inputEl }} // This approach only works in class based coponents. This is first way of creating refs.
          ref = { this.inputElementRef }
          onChange={this.props.changed} 
          value={this.props.name}
        />
       </Aux>
      ///* </Fragment> // Aux alternative built into react. */
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
