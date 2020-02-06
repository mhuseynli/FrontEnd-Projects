$(document).ready(function () {
    // header
    $(".home-menu").click(function() {
        $(".menu-item").removeClass("active");
    });
    //navbar
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("header").css("box-shadow", "0 0 10px 0 rgba(0,0,0,.1)")
        }
        else {
            $("header").css("box-shadow", "none")
        }
    })
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $(".header-about").css("box-shadow", "0 0 10px 0 rgba(0,0,0,.1)")
            $(".header-about").css("background", "white")
        }
        else {
            $(".header-about").css("box-shadow", "none")
        }
    })
    //owl
    $(".client-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $(".candidate-carousel").owlCarousel({
        loop: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    // counter
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 9000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    // tabmenu
    $(".tablinks").click(function (e) {
        e.preventDefault();
        $(".tabcontent").removeClass("active")
        $(".tablinks").removeClass("active")
        var href = $(this).attr("href")
        $(href).addClass("active")
        $(this).addClass("active")

    })
})
