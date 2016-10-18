import React from 'react';
import wedding from '../../../../config/wedding';
import glob from 'styles/app';

/**
  *
  * 404 Page
  *
  * @param
  *
  * @return {ReactComponent}
  */

const supportEmail = (
  <a href={`mailto:${wedding.email}?Subject=Page not found`} className={glob.email}>
    {wedding.email}
  </a>
);

export default () => (
  <div>
    <h1>404: Page Not Found</h1>
    <h4>
      Sorry, but this page
      <br />
      does not exist
    </h4>
    <h3>
      Try checking the URL for errors,
      <br />
      then refresh your browser.
    </h3>
    <p>
      If you are still experiencing problems,
      <br />please contact {supportEmail}
    </p>
  </div>
);
