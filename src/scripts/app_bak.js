import React from 'react';
import ReactDOM from 'react-dom';

import MyButtonController from './flux/components/MyButtonController.jsx';

ReactDOM.render(
  <MyButtonController />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
