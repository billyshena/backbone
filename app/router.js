
define([
    "lodash",
    "jquery",
    "backbone",
    "react",
    "modules/header/header"

], function(_, $, Backbone, React, Header) {

    // Defining the application router.

    var Router = Backbone.Router.extend({

        history: [],

        // All Route
        routes: {
            "*path": "index"
        },


        // First function
        index: function() {

            var self = this;
            self.bind( "all", self.storeRoute );

            var model = new Backbone.Model({ title: 'Title displated with ReactJS' });
            React.render(new Header(model.toJSON()), document.body);
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
