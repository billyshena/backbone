var React = require('react');

var Header =  React.createClass({
  render: function() {
    return <div>Hello Wodd {this.props.name}</div>;
  }
});

module.exports = Header;


