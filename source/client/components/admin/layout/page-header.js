import React from 'react';

/**
  *
  * The page header for admin site
  *
  * @param {String} title
  *
  * @return {ReactComponent}
  */

export default (props) => (
  <div className="page-header">
    <h1>{props.title}</h1>
  </div>
);
