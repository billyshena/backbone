require.config({
  paths: {
    "underscore": "../bower_components/lodash/dist/lodash.underscore",
    "lodash": "../bower_components/lodash/dist/lodash",
    "template": "../bower_components/lodash-template-loader/loader",
    "jquery": "../bower_components/jquery/dist/jquery",
    "backbone": "../bower_components/backbone/backbone",
    "text": "../bower_components/requirejs-text/text",
    "react": "../bower_components/react/react-with-addons",
    "JSXTransformer": "../bower_components/jsx-requirejs-plugin/js/JSXTransformer",
    "jsx": "../bower_components/jsx-requirejs-plugin/js/jsx",
    "gsap": "../bower_components/gsap/src/minified/TweenMax"
  },

    shim: {
        'jquery' : {
            exports: '$'
        },
        'lodash' : {
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'lodash'],
            exports: 'Backbone'
        },
        'gsap' : {
            exports: 'TweenMax'
        },
        'mapbox' : {
            exports: 'L'
        },
        'slider' : {
            exports: 'S'
        },
        'react' : {
            exports: 'React'
        }
    },

  deps: ["main"]
});
