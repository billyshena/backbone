
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;


var Router = require('./router');
var router = new Router();

// Trigger the initial route and enable HTML5 History API support, set the
// root folder to '/' by default.  Change in app.js.
Backbone.history.start({ pushState: true });

