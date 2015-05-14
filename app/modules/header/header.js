/** @jsx React.DOM */
define([
    'react'
], function (React) {

    var HelloMessage = React.createClass({displayName: "HelloMessage",
      render: function() {
        return React.createElement("div", null, "Hello World ", this.props.name);
      }
    });

    React.render(React.createElement(HelloMessage, null), document.body);

});