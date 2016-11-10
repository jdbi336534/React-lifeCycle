'user strict';

import "../styles/usage/page/app.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/comment/CommentBox';

import './libs/es5-sham';
import './libs/es5-shim';
import './libs/es6-promise.js';
import './libs/fetch-detector';
import './libs/fetch';
import './libs/fetch-jsonp';

// let comments = [
//   {
//     author: '彭展',
//     content: '今天霾真大',
//     date: '5分钟前'
//   },
//   {
//     author: '白雪公主',
//     content: '咱别出去了吧',
//     date: '3分钟前'
//   }
// ];

ReactDOM.render(
  // <CommentBox data={comments}/>,
  <CommentBox url="./comments.json"></CommentBox>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
