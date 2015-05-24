var React = require('react');

var Header =  React.createClass({
  render: function() {
    return <div>Hello World {this.props.name}</div>;
  }
});

module.exports = Header;


