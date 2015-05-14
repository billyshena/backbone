
define([
    "lodash",
    "jquery",
    "backbone",
    "react"

], function(_, $, Backbone, React) {


    // Defining the application router.

    var Router = Backbone.Router.extend({

        history: [],

        // All Route
        routes: {
            "*path": "index"
        },


        // First function
        index: function() {
            console.log('initialize');
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


        // Error
        error: function() {

            console.log('404');

        }



    });

    return Router;

});
