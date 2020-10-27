import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  login: () => {}, // this is just added to get better auto completion across different components if I want to use this context values across components.
});

export default authContext;