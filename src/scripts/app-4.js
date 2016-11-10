import "../styles/usage/page/app.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute, Redirect } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">首页</Link>
          <Link to="/tv" query={{orderBy: 'date'}}>电视</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

class TV extends React.Component {
  constructor(props){
    super(props);

    console.log(this.props.location.query);
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

class Show extends React.Component {
  render() {
    return (
      <h3>节目 {this.props.params.id}</h3>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>首页内容</div>
    )
  }
}

class ShowIndex extends React.Component {
  render() {
    return (
      <div>电视节目列表</div>
    )
  }
}

function handleEnter() {
  console.log('进入');
}

function handleLeave() {
  console.log('离开')
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="tv" component={TV}>
        <IndexRoute component={ShowIndex} />
        <Route path="/shows/:id" component={Show} onEnter={handleEnter} onLeave={handleLeave} />
        <Redirect from="shows/:id" to="/shows/:id" />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
