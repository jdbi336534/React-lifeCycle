'use strict';

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {data: []};

    // setInterval(() => this.getComments(), 5000);
  }

  handleCommentSubmit(comment) {
    let comments = this.state.data,
        newComments = comments.concat(comment);

    this.setState({data: newComments});
  }

  getComments() {
    fetch(this.props.url).then(response => response.json())
      .then(data => {
        this.setState({data: data});
      })
      .catch(e => console.log('Oops, error', e));
  }

  render() {
    return (
      <div className='m-index'>
        <h1>评论</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}

export { CommentBox as default };
