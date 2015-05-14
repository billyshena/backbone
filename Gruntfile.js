module.exports = function(grunt) {
    "use strict";

    //Load module Rewrite URL
    var modRewrite = require('connect-modrewrite');

    grunt.initConfig({
        // Wipe out previous builds and test reporting.
        clean: ["dist/", "test/reports"],

        // Run your source code through JSHint's defaults.
        jshint: {
            all : ["app/**/*.js"],
            options: {
                smarttabs: true
            }
        },


        react: {
            jsx: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/modules',
                        src: [ '**/*.jsx' ],
                        dest: 'app/modules',
                        ext: '.js'
                    }
                ]
            }
        },

        // This task uses James Burke's excellent r.js AMD builder to take all
        // modules and concatenate them into a single file.
        requirejs: {
            release: {
                options: {
                    mainConfigFile: "app/main.js",
                    generateSourceMaps: true,

                    // insertRequire: ["main"],
                    out: "dist/source.min.js",
                    optimize: "uglify2",

                    // Since we bootstrap with nested `require` calls this option allows
                    // R.js to find them.
                    findNestedDependencies: true,

                    // Include a minimal AMD implementation shim.
                    name: "almond",

                    // Setting the base url to the distribution directory allows the
                    // Uglify minification process to correctly map paths for Source
                    // Maps.
                    baseUrl: "dist/app",

                    // Wrap everything in an IIFE.
                    wrap: true,

                    // Do not preserve any license comments when working with source
                    // maps.  These options are incompatible.
                    preserveLicenseComments: false
                }
            }
        },

        // This task simplifies working with CSS inside Backbone Boilerplate
        // projects.  Instead of manually specifying your stylesheets inside the
        // HTML, you can use `@imports` and this task will concatenate only those
        // paths.
        styles: {
            // Out the concatenated contents of the following styles into the below
            // development file path.
            "dist/styles.css": {
                // Point this to where your `index.css` file is location.
                src: "app/styles/index.css",

                // The relative path to use for the @imports.
                paths: ["app/styles"],

                // Rewrite image paths during release to be relative to the `img`
                // directory.
                forceRelative: "/app/img/"
            }
        },


        // Minfiy the distribution CSS.
        cssmin: {
            release: {
                files: {
                    "dist/styles.min.css": ["dist/styles.css"]
                }
            }
        },

        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {                         // Dictionary of files
                    'app/styles/styles.css': 'app/styles/scss/styles.scss'      // 'destination': 'source'
                }
            }
        },

        processhtml: {
            release: {
                files: {
                    "dist/index.html": ["index.html"]
                }
            }
        },

        // Move vendor and app logic during a build.
        copy: {
            release: {
                files: [
                    {
                        src: ["app/**"],
                        dest: "dist/"
                    },
                    {
                        src: "vendor/**",
                        dest: "dist/"
                    },
                    {
                        src:"*.png",
                        dest:"dist/"
                    }
                ]
            }
        },

        compress: {
            release: {
                options: {
                    archive: "dist/source.min.js.gz"
                },

                files: ["dist/source.min.js"]
            }
        },


        watch: {
            scripts: {
                files: ['app/**/**/*.js', 'app/**/**/*.jsx', 'app/styles/**/*.scss', 'app/**/*.html', 'index.html'],
                tasks: ['jshint', 'react', 'sass'],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    open: true,
                    // Fix route #
                    middleware: function(connect, options) {
                        var middlewares;
                        middlewares = [];
                        middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));
                        options.base.forEach(function(base) {
                            return middlewares.push(connect["static"](base));
                        });
                        return middlewares;
                    }
                }
            }
        }
    });



    // Grunt contribution tasks.
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks("grunt-bbb-requirejs");
    grunt.loadNpmTasks("grunt-bbb-styles");
    grunt.loadNpmTasks("grunt-react");

    // When running the default Grunt command, just lint the code.
    grunt.registerTask("default", [
        "clean",
        "processhtml",
        "copy",
        "requirejs",
        "styles",
        "cssmin",
        "jshint"
    ]);

    // Start server
    grunt.registerTask("server", [
        "connect",
        "watch"
    ]);
};