var React = require('react');

var Header =  React.createClass({displayName: "Header",
  render: function() {
    return React.createElement("div", null, "Hello Wo ", this.props.name);
  }
});


module.exports = Header;


