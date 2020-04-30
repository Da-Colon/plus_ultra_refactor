import React from 'react';

const Error = props => (
  <div {...props}>
    <div className="error">
      <i className="fas fa-exclamation-circle mr-2" /> {props.children}
    </div>
    <div >
    </div>
  </div>
);

export default Error;