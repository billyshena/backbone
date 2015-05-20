
var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var Header = require('./modules/header/header');

var Router = Backbone.Router.extend({
    history: [],

    // All Route
    routes: {
        "*path": "index"
    },


    // Index: Home page
    index: function() {

        var self = this;
        self.bind( "all", self.storeRoute );

        React.render(React.createElement(Header, { name: 'Billy Shen' }), document.getElementById('main'));

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
