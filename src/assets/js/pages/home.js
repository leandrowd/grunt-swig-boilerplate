/**
 * Home Page Configuration
 */

'use strict';

define(['jquery'], function ($) {
    var module = {};

    /**
     * Initialize this module.
     */
    module.init = function() {
        //TODO: change for the real preloader
        $('.progress-bar').animate({
            width: '100%'
        }, 1000, function () {
            $('#intro').addClass('animate');
            $('#start, #home').show();
        });
    };

    return module;
});
