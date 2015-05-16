/** @jsx React.DOM */
define([
    'react'
], function (React) {

    var Header =  React.createClass({displayName: "Header",
      render: function() {
        return React.createElement("div", null, "Hello World ", this.props.name);
      }
    });

    return Header;

});
