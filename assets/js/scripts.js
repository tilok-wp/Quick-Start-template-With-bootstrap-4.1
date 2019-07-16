(function($) {
    
    "use strict";

    //Hide Preloader
	$(window).on('load', function() {
		$('.preloader-area').delay(200).fadeOut(500);
	});

    // Menu toggleClass(Show Mobile Menu)
    $('.manubar-toggler').on('click', function () {
        $('.main-menu').toggleClass('show');
        $('.menu-right').toggleClass('show');
        $(this).toggleClass('show');
    });















    $("section").click(function(){
        $(".mobile-menu").removeClass('show');
    });

    // Menu toggleClass(Show Dropdown Menu)
    $('.has-children').on('click', function () {
        $(this).toggleClass('has-children-show', 1000)
    });

    // Menu toggleClass(Fixed Top Menu)
    $(function() {
        var header = $(".header-area");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 200) {
                header.addClass("header-fixed");
            } else {
                header.removeClass("header-fixed");
            }
        });
    });

    // Scroll Top Icon Show & Hide
    $(function() {
        var myWindowScroll = 800;
        $(window).scroll(function() {    
            if ($(window).scrollTop() > myWindowScroll) {
                $("a.to-top").fadeIn("slow");
            } else {
                $("a.to-top").fadeOut("slow");
            }
        });
    });

    // Search-form add/remove class
    $(".icons__search i").click(function(){
        $(".icons__search").toggleClass("icons__search-show");
    });

    $("section").click(function(){
        $(".icons__search").removeClass("icons__search-show");
    });

    // Menu active class
    $(".main-menu ul li").click(function(){
        $('.main-menu ul li').removeClass("active");
        $(this).addClass("active");
    });

    // Menu Smooth-scroll
    $(document).ready(function(){
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').animate({
                'scrollTop': $target.offset().top-85
            }, 1000, 'swing');
        });
    });

    // Back To Top
    $("a.to-top").on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })

    //magnificPopup
    $('.video-popup').magnificPopup({
        type:'iframe'
    });

    //counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //owlCarousel
    $(".testimonial_carousel").owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:6000,
        responsiveClass:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
                
            }
        }
    });


})(jQuery);