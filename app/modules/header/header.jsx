/** @jsx React.DOM */
define([
    'react'
], function (React) {

    var Header =  React.createClass({
      render: function() {
        return <div>Hello World {this.props.name}</div>;
      }
    });

    return Header;



});