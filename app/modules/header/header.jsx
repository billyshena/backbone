var React = require('react');

var Header =  React.createClass({
  render: function() {
    return <div>Hello Wodd {this.props.name}</div>;
  }
});
console.log('ok');

module.exports = Header;


