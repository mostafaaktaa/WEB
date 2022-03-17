$(function () {
    'use strict';

	$('.about1 ul li a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show');
	});

	 // 002 scroll to element
    $(".navbar ul li a").click(function (e) {

          e.preventDefault();

          $('html, body').animate({
          scrollTop: $('#'+$(this).data('scroll')).offset().top+1
          },1000);

      });

    $('.navbar ul li a').click(function () {

         $('.navbar ul li a').siblings().removeClass('active');

          $('.navbar ul li a').parent().addClass('active').siblings().removeClass('active');

      });

     $(window).scroll(function () {
  // 005 sync navbar link with sections
        $('.block').each(function () {

            if ($(window).scrollTop() > $(this).offset().top) {

                var blockID=$(this).attr('id');

                $('.navbar a').removeClass('active');

                $('.navbar li a[data-scroll="'+blockID+'"]').addClass('active');

              }

            });

      });

});