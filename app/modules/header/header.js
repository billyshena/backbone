var React = require('react');

var Header =  React.createClass({displayName: "Header",
  render: function() {
    return React.createElement("div", null, "Hello Wodd ", this.props.name);
  }
});
console.log('ok');

module.exports = Header;


