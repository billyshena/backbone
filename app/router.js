define([
    "lodash",
    "jquery",
    "backbone",
    "react",
    "jsx!modules/header/header",
    "JSXTransformer",
    "jsx"
], function(_, $, Backbone, React, Header, JSXTransformer, jsx) {


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

            React.render(<Header />, document.body);



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
