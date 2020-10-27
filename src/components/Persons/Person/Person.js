import React, { Component, Fragment } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  constructor(props){
    super(props);
    this.inputElementRef = React.createRef(); // Offered by React 16.3
  }

  static contextType = AuthContext; // introduced by react 16, this allows react to use context everywhwere in this file.

  componentDidMount(){
    // this.inputElement.focus(); // By this time inputElement(global ID) should have been set by render() method.
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {/* <AuthContext.Consumer>
        { (context) => context.authenticated ? <p> Authenticated </p> : <p> Please Log In </p> } // First way of of creating context
        </AuthContext.Consumer> */}
        { this.context.authenticated ? <p> Authenticated </p> : <p> Please Log In </p> }
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
