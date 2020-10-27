import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    // toggleButtonRef.current.click(); // doing here doesn't work because, render hasn't been completed.

    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //HTTP Request. 
        // setTimeout(() => {
        //     alert('saved data to cloud.');
        // }, 1000);

        toggleButtonRef.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };

    }, []);

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes will be red.
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes will be bold
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{ props.title }</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        ref={ toggleButtonRef }
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log In</button> }
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(cockpit);
