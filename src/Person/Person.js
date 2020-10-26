import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';
// import styled from 'styled-components';

// const StyledDiv = styled.div`
//       width: 60%;
//       margin: 16px auto;
//       border: 1px solid #eee;
//       box-shadow: 0 2px 3px #ccc;
//       padding: 16px;
//       text-align: center;

//       @media (min-width: 500){
//               width: 450px;
//       }
//   `; // this is already a react component returned by styled.div method call

const person = ( props ) => {
    const style = {
      '@media(min-width: 500px)' : {
        width: '450px'
      }
    };

    return (
      <div className={classes.Person} style={style}>
        {/* // <StyledDiv> */}
        <p onClick = {props.click} >
          I'm {props.name} and I am {props.age} Years Old!
        </p>
        <p>{props.children}</p>
        <input type="text" onChange= { props.changed } value= { props.name }/>
        </div>
      // </StyledDiv> 
    );
};

export default person;