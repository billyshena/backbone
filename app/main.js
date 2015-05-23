
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var socketIOClient = require('socket.io-client');
var sailsIOClient = require('sails.io.js');
var io = sailsIOClient(socketIOClient);
io.sails.url = 'http://localhost:1337';


io.socket.on('connect',function(){
    console.log('connected');
    io.socket.on('okok', function(data){
        console.log('got new data');
        console.log(data);

    });
});


io.socket.get('http://localhost:1337/auth/test', function(data){
    console.log('DONE');
    console.log(data);
});



var Router = require('./router');
var router = new Router();

// Trigger the initial route and enable HTML5 History API support, set the
// root folder to '/' by default.  Change in app.js.
Backbone.history.start({ pushState: true });

