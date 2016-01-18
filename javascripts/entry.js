require('../less/main.less');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var _ = require('underscore');

var divStyle = {
  background: 'url(../assets/background.jpg) repeat-x'
};

var Card = React.createClass({
  render: function() {
    var cardPic = classNames("card", this.props.card);
    return (<div className={cardPic}></div>);
  }
});

var ThreeCardLayout = React.createClass({
  render: function() {
    var row = [];
    for(var i=0; i<this.props.cards.length; i++) {
      var item = this.props.cards[i];
      row.push(<Card card={item} />);
    }
    return <div>{_.sample(row, 3)}</div>;
 }
});

var cardArray = ['the-hermit', 'the-fool', 'the-magician', 'the-high-priestess',
                 'strength', 'the-chariot', 'the-emperor', 'the-empress',
                 'the-hierophant', 'the-lovers'];

ReactDOM.render(<ThreeCardLayout cards={cardArray} />,
                document.getElementById('content'));

