import React from "react";

// const withClass = (props) => (
//   <div className={props.classes}>{props.children}</div> // first form of HOC
// );

const withClass = (WrappedComponent, className) => { // normal JS Function. which returns a functional component
  return (props) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClass;
