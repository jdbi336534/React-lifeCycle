'use strict';

import React from 'react';

class CommentForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log('提交表单');
  }

  handleClick(event) {
    let author = this.refs.author.value,
        content = this.refs.content.value;

    this.props.onCommentSubmit({author, content});
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
        <div className="yo-list yo-list-a">
          <label className="item item-input">
            <input type="text" className="yo-input flex" placeholder="用户名" ref="author" />
          </label>
          <label className="item item-input">
            <textarea className="yo-input flex" placeholder="留言" ref="content"></textarea>
          </label>
          <label>
            <button onClick={this.handleClick.bind(this)} className="yo-btn yo-btn-l">发表评论</button>
          </label>
        </div>
      // </form>
    )
  }
}

export { CommentForm as default };
