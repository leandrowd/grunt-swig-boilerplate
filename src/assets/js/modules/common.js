/**
 * Common Modules
 */

'use strict';

define(['jquery', 'easing', 'modules/form-register-interest', 'modules/gallery'], function ($, ease, formRegisterInterest, gallery) {
    var module = {};

    module.init = function () {
        this.bindExternalLinks();
        this.stickyMenu();
        this.initFormInterest();
        this.initGallery();
        this.socialPopups();
        this.loadVideo();
        this.goToForm();
    };

    module.initFormInterest = function (){
        formRegisterInterest.init();
    };
    
    module.socialPopups = function(){
		$('.social-toolbar a').on('click',function(e){
		    var url = $(this).attr('href');
		    window.open(url, '', 'width=600,height=400');
		    e.preventDefault();
		});
    };
    
    module.loadVideo = function(){
	    $('.show-video').fancybox();
    };

    module.initGallery = function() {
        gallery.init();
    };
    
    module.goToForm = function(){
	    $('.register-link').on('click',function(e){
	        e.preventDefault();
	        ease = 0;
	        $('html,body').stop().animate({ scrollTop: $('#register-interest').offset().top }, 1000, 'easeInOutExpo');
	    });
    };

    module.stickyMenu = function () {
        var $win = $(window),
            $body = $('body'),
            mainNav = $('#main-nav'),
            mainNavPositionTop = mainNav.is(':visible') ? mainNav.offset().top : -1;

        var stickyNav = function(){
            if(mainNavPositionTop === -1) {
                mainNavPositionTop = mainNav.offset().top;
            }

            var scrollTop = $win.scrollTop();

            if (scrollTop > mainNavPositionTop) {
                mainNav.addClass('sticky');
                $body.addClass('topbar-fixed');

            } else {
                mainNav.removeClass('sticky');
                $body.removeClass('topbar-fixed');
            }
        };

        $win.on('scroll', stickyNav);
    };

    module.bindExternalLinks = function () {
        $('[rel=external]').attr('target', '_blank');
    };

    return module;
});
