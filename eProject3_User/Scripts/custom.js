﻿jQuery(document).ready(function () {
    $("#mixitup-grid").mixItUp();
    $(".filter-options li:first-child a").addClass("active");
    $(".mobile-background-nav .has-submenu").on("click", function (d) {
        d.preventDefault();
        var c = $(this);
        if (c.next().hasClass("menu-show")) {
            c.next().removeClass("menu-show");
            c.next().slideUp(350)
        } else {
            c.parent().parent().find("li .dropdown").removeClass("menu-show");
            c.parent().parent().find("li .dropdown").slideUp(350);
            c.next().toggleClass("menu-show");
            c.next().slideToggle(350)
        }
    });

    $(".mobile-menu-close i").on("click", function () {
        $(".mobile-background-nav").removeClass("in")
    });

    $("#humbarger-icon").on("click", function (c) {
        c.preventDefault();
        $(".mobile-background-nav").toggleClass("in")
    });
    (function (c) {
        c.fn.menumaker = function (e) {
            var d = c(this),
                f = c.extend({
                    format: "dropdown",
                    sticky: false
                }, e);
            return this.each(function () {
                c(this).find(".button").on("click", function () {
                    c(this).toggleClass("menu-opened");
                    var i = c(this).next("ul");
                    if (i.hasClass("open")) {
                        i.slideToggle().removeClass("open")
                    } else {
                        i.slideToggle().addClass("open");
                        if (f.format === "dropdown") {
                            i.find("ul").show()
                        }
                    }
                });
                d.find("li ul").parent().addClass("has-sub");
                var g;
                g = function () {
                    d.find(".has-sub").prepend('<span class="submenu-button"></span>');
                    d.find(".submenu-button").on("click", function () {
                        c(this).toggleClass("submenu-opened");
                        if (c(this).siblings("ul").hasClass("open")) {
                            c(this).siblings("ul").removeClass("open").slideToggle()
                        } else {
                            c(this).siblings("ul").addClass("open").slideToggle()
                        }
                    })
                };
                if (f.format === "multitoggle") {
                    g()
                } else {
                    d.addClass("dropdown")
                }
                if (f.sticky === true) {
                    d.css("position", "fixed")
                }
                var h;
                h = function () {
                    var i = 1000;
                    if (c(window).width() > i) {
                        d.find("ul").show()
                    }
                    if (c(window).width() <= i) {
                        d.find("ul").hide().removeClass("open")
                    }
                };
                h();
                return c(window).on("resize", h)
            })
        }
    })(jQuery);

    $("#easy-menu").menumaker({
        format: "multitoggle"
    });

    $(".upcommig-event-carousel").slick({
        dots: false,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-arrow-prev base-color"><i class="fa fa-angle-up"></i></div>',
        nextArrow: '<div class="slick-arrow-next base-color"><i class="fa fa-angle-down"></i></div>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
            }
        }]
    });

    $(".fund-testimonial-carousel").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }]
    });

    $(".client-carusel").slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false
            }
        }]
    });

    $(".about-us-carousel").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });

    $(".hide-search--dropdown").select2({
        minimumResultsForSearch: -1
    });

    $(".selectpicker").select2({});
    $(".pament-select").select2({
        tags: true,
        createTag: function (c) {
            return {
                id: c.term,
                text: c.term,
                newOption: true
            }
        },
        templateResult: function (d) {
            var c = $("<span></span>");
            c.text(d.text);
            if (d.newOption) {
                c.append(" <em>(new)</em>")
            }
            return c
        }
    });

    $(".gallery-item").colorbox({
        rel: "group4",
        slideshow: false,
        transition: "fade",
        onOpen: function () {
            $("body").addClass("popup-open")
        },
        onClosed: function () {
            $("body").removeClass("popup-open")
        }
    });
    if ($(".counter-item__count").length) {
        $(".counter-item__count").counterUp({
            delay: 10,
            time: 3000
        })
    }

    function a() {
        var j = $(".musica-counter-active");
        var h = j.length;
        for (var g = 0; g < h; g++) {
            var k = "#" + j[g].id,
                e = $(k).attr("data-value-year"),
                d = $(k).attr("data-value-month"),
                c = $(k).attr("data-value-day"),
                f = $(k).attr("data-value-zone");
            $(k).countdown({
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Mins", "Secs"],
                until: $.countdown.UTCDate(f, e, d, c),
                format: "dHMS",
                padZeroes: true
            })
        }
    }
    if ($(".musica-counter-active").length) {
        a()
    }
    $("#upcomming-event-carousel").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });
    $(".search-box a").on("click", function (c) {
        c.preventDefault();
        $(".top-search-input-wrap").addClass("show")
    });
    $(".top-search-input-wrap .top-search-overlay, .top-search-input-wrap .close-icon").on("click", function () {
        $(".top-search-input-wrap").removeClass("show")
    });
    $(window).on("load", function () {
        $(".preloader").fadeOut()
    });
    jQuery(window).on("scroll", function () {
        var f = $(window).height();

        function c() {
            var k = $(".progress-rate");
            var j = k.length;
            for (var h = 0; h < j; h++) {
                var l = "#" + k[h].id;
                var g = $(l).attr("data-value");
                $(l).css({
                    width: g + "%"
                })
            }
        }
        var e = $(".progress-item");
        if ((e).length) {
            var d = $(".progress-item").offset().top - f;
            if ($(window).scrollTop() > d) {
                c()
            }
        }
    });
    $(".swhicher-button button").on("click", function () {
        var c = $(this).attr("data-att");
        $('link[data-style="color-style"]').attr("href", "css/" + c + ".css");
        $(".logo a img, .footer-logo a img").attr("src", "images/" + c + "-logo.png")
    });
    $(".setting-button-wrapper .setting-button").on("click", function () {
        $(".color-shicher-wraper").toggleClass("show-color")
    });

    // Fixed navbar
    if ($(".main-menu-fixed").length) {
        var e = $(document);
        var d = $(".main-menu-fixed");
        var c = d.offset().top;
        e.on("scroll", function () {
            if (c < e.scrollTop()) {
                d.addClass("main-menu-fix-active")
            } else {
                d.removeClass("main-menu-fix-active")
            }
        })
    }
    if (!$(".main-menu-fixed").length) {
        $(".main-menu-area").removeClass("main-menu-fix-active")
    }
    // End Fixed navbar

    // Back-to-top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $("#toTop").addClass("backtop-top-show")
        } else {
            $("#toTop").removeClass("backtop-top-show")
        }
    });
    $("#toTop").on("click", function (c) {
        c.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    });
    // End Back-to-top button line

    if ($(".wow").length) {
        var b = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: false,
            live: true,
            callback: function (c) { },
            scrollContainer: true
        })
    }
    if ($(".lazy").length) {
        $(".lazy").lazy({
            effect: "fadeIn",
            beforeLoad: function (c) {
                console.log("start loading ");
                console.log(c);
                c.siblings(".loader").addClass("loder-hide")
            },
            onLoad: function (c) { }
        })
    }
});