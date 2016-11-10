'use strict';

import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div>
        <div className="comment">
          <span>{this.props.author}</span>
          <span>{this.props.date}</span>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export { Comment as default };
