/*global $, jQuery, alert*/
$(document).ready(function () {
    'use strict';

	$('.carousel').carousel({
		interval: 7000
	});

	$("html").niceScroll({
    	cursorcolor:'#f00',
    	cursorwidth:10
    });

	$('.gear-check').click(function () {
		$('.option-box .color-box').slideToggle(1000);
	});

	// change theme color
	var colorLi = $('.option-box ul li');

	colorLi.eq(0).css("backgroundColor", "#E41B17").end().
        eq(1).css("backgroundColor", "#E426D5").end()
	    .eq(2).css("backgroundColor", "#009AAF").end()
	    .eq(3).css("backgroundColor", "#FFd500");

	colorLi.click(function () {
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));
	});
    
    window.onload = function () {
	    $("body").css("overflow", "auto");
        $(".loading-overlay").fadeOut(1000, function () {
            $(".loading-overlay").remove();
        });
    };

    $(window).scroll(function () {
		var scrollToTop =  $('.scroll-to-top');

		if ($(window).scrollTop() >= 1000) {
		    scrollToTop.fadeIn(400);
		} else {
            scrollToTop.fadeOut(400);
        }
    });


    $('.scroll-to-top').on('click', function (event) {

        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});



