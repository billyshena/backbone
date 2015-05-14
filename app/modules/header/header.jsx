/** @jsx React.DOM */
define([
    'react'
], function (React) {

    var HelloMessage = React.createClass({
      render: function() {
        return <div>Hello World {this.props.name}</div>;
      }
    });

    React.render(<HelloMessage />, document.body);

});