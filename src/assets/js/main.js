/**
 * Main application
 *
 * This is main entry-point for JS logic
 * In this place lie everything regarding every aspect of JS
 *
 * commonModules.init() load and execute common.js module where is configuration of all modules used on every page of the show
 *
 * crossroad is library which allows us to dynamically load proper modules basing on routing we create
 * url: http://millermedeiros.github.io/crossroads.js
 *
 * There're 2 ways of adding new routes:
 *
 * crossroads.addRoute('String/RegExp to match', function() {
 *     require([dependencies], function(dependencies references) {
 *         // loaded modules initialization
 *     });
 * });
 *
 * or
 *
 * var somePage = crossroads.addRoute('String/RegExp to match');
 * somePage.matched.add(function() {
 *     require([dependencies], function(dependencies references) {
 *         // loaded modules initialization
 *     });
 * }, optionalContext);
 *
 * Available options:
 * - named variables surrounded by "{}" that will be evaluated and passed to handlers as parameters
 *     The pattern "{foo}/{bar}" will match "lorem/ipsum-dolor" but won't match "lorem/ipsum-dolor/sit"
 * - optional segments surrounded by "::"
 *   The pattern "news/:foo:/:bar:" will match "news", "news/123" and "news/123/asd"
 * - "rest" segments (ending with *) which can match multiple segments
 *   The pattern "{foo}/:bar*:" will match news "news/123", "news/123/bar", "news/123/lorem/ipsum"
 */

'use strict';

require(['config'], function () {
    require(['modules/common'], function (commonModules) {
        commonModules.init();
    });

    require(['crossroads'], function (crossroads) {
        crossroads.addRoute('/', function () {
            require(['pages/home'], function (home) {
                home.init();
            });
        });

        crossroads.parse(window.location.pathname);
    });
});
