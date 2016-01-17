require('../less/main.less');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var divStyle = {
  background: 'url(../assets/background.jpg) repeat-x'
};

var Card = React.createClass({
  render: function() {
    return (<div className="card">{this.props.card}</div>);
  }
});

var Layout = React.createClass({
  render: function() {
    var row = [];
    // this.props.cards.forEach(function(card)) {
      row.push(Card);
    // }
    React.render(row, document.getElementById('cards'));
  }
});

ReactDOM.render(<Card card={'the-fool'} />, document.getElementById('content'));
