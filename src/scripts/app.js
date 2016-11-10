import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/lifeCycle/Container.js';

ReactDOM.render(
  <Container />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
