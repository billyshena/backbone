var React = require('react');

var Header =  React.createClass({displayName: "Header",
  render: function() {
    return React.createElement("div", null, "Hello Woooodedzdezdzrlddd ", this.props.name);
  }
});


module.exports = Header;


