import React from 'react';
import ButtonActions from '../actions/ButtonActions';
import MyButton from './MyButton.jsx';
import ListStore from '../stores/ListStore';

export default React.createClass({
  getInitialState() {
    return {
      items: ListStore.getAll()
    }
  },

  componentDidMount() {
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      items: ListStore.getAll()
    })
  },

  createNewItem(event) {
    ButtonActions.addNewItem('new item');
  },

  render() {
    return (
      <MyButton items={this.state.items} onClick={this.createNewItem} />
    )
  }
});
