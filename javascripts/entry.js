require('../less/main.less');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var divStyle = {
  background: 'url(../assets/background.jpg) repeat-x'
};

var Card = React.createClass({
  render: function() {
    var cardPic = classNames("card", this.props.card);
    return (<div className={cardPic}></div>);
  }
});

var Layout = React.createClass({
  render: function() {
    var row = [];
    for(var i=0; i<this.props.cards.length; i++) {
      var item = this.props.cards[i];
      row.push(<Card card={item} />);
    }
    return <div>{row}</div>;
 }
});

ReactDOM.render(<Layout cards={['the-hermit', 'the-fool', 'the-magician']} />,
                document.getElementById('content'));

