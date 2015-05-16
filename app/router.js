define([
    "lodash",
    "jquery",
    "backbone",
    "react",
    "modules/header/header"
], function(_, $, Backbone, React, Header) {

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

            React.render(React.createElement(Header, {name: 'Billy Shen'}), document.getElementById('main'));

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

    return Router;

});
