import React from 'react';
import ReactDOM from 'react-dom';

import LifeCycle from './lifeCycle.js';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: Math.random() * 100
    }
  }

  propsChange() {
    this.setState({
      num: Math.random() * 100
    })
  }

  setLifeCycleState() {
    this.refs.rLifeCycle.setTheState();
  }

  forceLifeCycleUpdate() {
    this.refs.rLifeCycle.forceItUpdate();
  }

  unmountLifeCycle() {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
  }

  parentForceUpdate() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <button onClick={this.propsChange.bind(this)}>propsChange</button>
        <button onClick={this.setLifeCycleState.bind(this)}>setState</button>
        <button onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</button>
        <button onClick={this.unmountLifeCycle.bind(this)}>unmount</button>
        <button onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</button>
        <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
      </div>
    )
  }
}
