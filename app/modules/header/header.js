var React = require('react');

var Header =  React.createClass({displayName: "Header",
  render: function() {
    return React.createElement("div", null, "Hello Worldd ", this.props.name);
  }
});

console.log('heredddddd');

module.exports = Header;


