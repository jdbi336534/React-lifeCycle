import React from 'react';

export default React.createClass({
  render() {
    let items = this.props.items;
    let itemHTML = items.map((listItem, i) => {
      return <li key={i}>{listItem}</li>
    });

    return (
      <div>
        <ul>{itemHTML}</ul>
        <button onClick={this.props.onClick}>New Item</button>
      </div>
    )
  }
});
