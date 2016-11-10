import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/basic/layout';

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);

if (module.hot) {
  module.hot.accept();
}
