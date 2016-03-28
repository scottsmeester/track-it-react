var React = require('react'),
    ReactDOM = require('react-dom');
// import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
