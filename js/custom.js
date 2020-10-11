(function($) {

  new WOW().init();

  jQuery(window).load(function() {
    $('#intro').fadeOut(3000);
    setInterval(function () {
      $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
      })
    }, 1000);
    setTimeout(function () {
      $("body").removeClass("gradient");
    }, 3000)
  });


  //jQuery to collapse the navbar on scroll
  // $(window).scroll(function() {
  //   if ($(".navbar").offset().top > 50) {
  //     $(".navbar-fixed-top").addClass("top-nav-collapse");
  //   } else {
  //     $(".navbar-fixed-top").removeClass("top-nav-collapse");
  //   }
  // });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {

    $('.navbar-nav li a').on('click', function(event) {

      if ($(this).is('a:not([href^="#"])') || $(this).attr("href") == '#') {
        return;
      }
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

    $('.page-scroll a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

  });
	
	var navMain = $(".navbar-collapse");
	navMain.on("click", "a:not([data-toggle])", null, function () {
	   navMain.collapse('hide');
	});

  $("#liza-disp").click(function () {
    $("#liza-body").toggleClass("hidden");
    $("#liza-disp").toggleClass("fa-angle-up");
    $("#liza-disp").toggleClass("fa-angle-down");
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    })
  });
  $("#natalie-disp").click(function () {
    $("#natalie-body").toggleClass("hidden");
    $("#natalie-disp").toggleClass("fa-angle-up");
    $("#natalie-disp").toggleClass("fa-angle-down");
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    })
  });

  if (window.location.hash === '#liza') {
    $("#liza-body").removeClass("hidden");
    $("#liza-disp").toggleClass("fa-angle-up");
    $("#liza-disp").toggleClass("fa-angle-down");
  }

  if (window.location.hash === '#natalia') {
    $("#natalie-body").removeClass("hidden");
    $("#natalie-disp").toggleClass("fa-angle-up");
    $("#natalie-disp").toggleClass("fa-angle-down");
  }

})(jQuery);
