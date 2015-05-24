
var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var Header = require('./modules/header/header.jsx');


var Router = Backbone.Router.extend({

    history: [],

    // All Route
    routes: {
        "home": "home",
        "*path": "index"

    },


    // Store all the routes for the history (when prev button is fired in the browser)
    initialize: function() {

        var self = this;
        self.bind( "all", self.storeRoute );

    },


    index: function() {

        React.render(React.createElement(Header, { name: 'Default message' }), document.getElementById('main'));

    },


    // Example function fired when visiting /home url
    home: function() {
        console.log('say hi');
    },


    // Save route
    storeRoute : function() {
        var self = this;
        self.currentView = Backbone.history.fragment;
        self.history.push(self.currentView);
    },



    // Render view asked
    render: function(module, submodule) {



    },


    // Default error function
    error: function() {

        console.log('404');

    }



});

module.exports = Router;
