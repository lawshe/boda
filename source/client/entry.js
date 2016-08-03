import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root';

const rootElement = document.getElementById('root');

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <AppContainer><Root /></AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootEle = require('./containers/Root').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer><RootEle /></AppContainer>,
      rootElement
    );
  });
}
