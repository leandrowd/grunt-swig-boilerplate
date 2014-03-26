/**
 * Global Configuration
 *
 * This is the place where you configure globally accessible libraries and paths
 * This file is being required by main.js
 */

'use strict';


var paths = {
    crossroads: '../bower_components/crossroads.js/dist/crossroads.min',
    jquery: '../bower_components/jquery/jquery.min',
    jquerymigrate: '../bower_components/jquery/jquery-migrate.min',
    signals: '../bower_components/js-signals/dist/signals.min'
};

// If file is required by node, export paths only
if (typeof module === 'object' && module && typeof module.exports === 'object') {
    module.exports = paths;
} else {
    // If it's required by require.js, execute configuration function
    if (typeof define === 'function' && define.amd) {
        require.config({
            waitSeconds: 0,
            baseUrl: '/assets/js/',
            paths: paths,
            shim: {
                jquerymigrate: {
                    deps: ['jquery'],
                    exports: '$'
                },
                crossroads: {
                    deps: ['signals']
                }
            }
        });
    }
}
