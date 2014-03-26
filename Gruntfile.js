module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'src/'
                }
            },
            production: {
                options: {
                    port: 9000,
                    base: 'www/',
                    keepalive: true
                }
            }
        },

        watch: {
            server: {
                options: {
                    livereload: true
                },
                files: ['Gruntfile.js', 'src/assets/scss/**/*', 'src/assets/js/**/*', 'src/assets/img/**/*', 'swig/**/**'],
                tasks: ['jshint', 'swig:development', 'sass:server']
            }
        },
        /* jshint camelcase: false */
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                title: 'Swig Boilerplate'
            }
        },
        /* jshint camelcase: true */
        jshint: {
            files: ['Gruntfile.js', 'src/assets/js/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
                ignores: ['src/assets/js/vendor/**']
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: './src/assets/js/',
                    name: '../bower_components/almond/almond',
                    include: ['main'],
                    insertRequire: ['main'],
                    paths: require('./src/assets/js/config'),
                    out: './www/assets/dist/main.js',
                    findNestedDependencies: true,
                    optimize: 'uglify2',
                    preserveLicenseComments: false,
                    wrap: {
                        start: '(function () {',
                        end: '}).call(this);'
                    }
                }
            }
        },

        sass: {
            server: {
                files: {
                    'src/assets/css/main.css': 'src/assets/scss/main.scss'
                },
                options: {
                    outputStyle: 'nested'
                }
            },
            build: {
                files: {
                    'www/assets/dist/main.css': 'src/assets/scss/main.scss'
                },
                options: {
                    outputStyle: 'compressed'
                }
            }
        },

        swig: {
            development: {
                init: {
                    autoescape: true
                },
                dest: 'src',
                src: ['swig/*.swig'],
                generateSitemap: true,
                generateRobotstxt: true,
                siteUrl: 'http://localhost:8000',
                production: false,
                // fb_appid: 'xxxxxxxFB',
                // ga_account_id: 'xxxxxxxxGA',
                /* jshint camelcase: false */
                robots_directive: 'Disallow /',
                sitemap_priorities: {
                    'index.html': '1.0'
                }
            },
            production: {
                init: {
                    autoescape: true
                },
                dest: 'www',
                src: ['swig/*.swig'],
                generateSitemap: true,
                generateRobotstxt: true,
                siteUrl: 'http://localhost:9000',
                production: true,
                // fb_appid: 'xxxxxxxFB',
                // ga_account_id: 'xxxxxxxxGA',
                /* jshint camelcase: false */
                robots_directive: 'Disallow /',
                sitemap_priorities: {
                    'index.html': '1.0'
                }
            }
        },

        imagemin: {
            all: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['src/assets/img/**/**/*.png', 'src/assets/img/**/**/*.jpg'],
                    dest: './',
                }]
            }
        },

        copy: {
            main: {
                files: [
                    // copy modernizr
                    {expand: false, src: 'src/assets/js/vendor/modernizr.js', dest: 'www/assets/js/vendor/modernizr.js', filter: 'isFile'},
                    // copy images
                    {expand: true, cwd:'src/assets/img/', src: ['**/*'], dest: 'www/assets/img/', filter: 'isFile'},
                    // copy fonts
                    {expand: true, cwd:'src/assets/fonts/', src: ['**/*'], dest: 'www/assets/fonts/'}
                ]
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-swig');

    grunt.registerTask('default', ['jshint', 'sass:server', 'connect:server', 'swig:development','watch:server']);
    grunt.registerTask('build', ['jshint', 'requirejs:compile', 'sass:build', 'swig:production', 'imagemin', 'copy:main', 'connect:production']);

};
