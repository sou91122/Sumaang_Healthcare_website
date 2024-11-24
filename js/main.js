$( document ).ready(function() {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

      // Menu-on-hover-area-start //
      $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

 // Menu-on-hover-area-end //

 // Dropdown-area-start //
    $('.dropdown-menu a.dropdown-toggle').click(function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
    });
// Dropdown-area-end //

// sticky-header-area-start //
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.topmain').addClass("sticky");
    } else {
        $('.topmain').removeClass("sticky");
    }
});
// sticky-header-area-end //

// scroll-to-top-area-start //
var scrollTop = $(".scrollTop");
$(window).scroll(function () {
$(this).scrollTop() > 100 ? $(scrollTop).css("opacity", "1") : $(scrollTop).css("opacity", "0")
  }),
$(scrollTop).click(function () {
return $("html, body").animate({
  scrollTop: 0
   }, 800),
  !1
});
  
// scroll-to-top-area-end //

// testimonials-slider-area-start //
if ($('.owl-carousel.testimonials-slider').length > 0) {
    $('.owl-carousel.testimonials-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}
// testimonials-slider-area-end //

// gallery-owl-carousel-area-start //
$('.event-carousel').owlCarousel({
    center: true,
    items: 4,
    margin: 10,
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    dotsSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        500: {
            items: 2,
        },
        1200: {
            items: 4
        }
    }
});
// gallery-owl-carousel-area-end //



   // lightbox-area-start //
   $('.gallery-lightbox').simpleLightbox();
   // lightbox-area-end //


   // partners-brand-area-start // 
if ($('.owl-carousel.partners-slider').length > 0) {
    $('.owl-carousel.partners-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },

            550: {
                items: 2
            },
            700: {
                items: 3
            },
            1200: {
                items: 5
            },
            1400: {
                items: 5
            }
        }
    })
}

// partners-brand-area-end // 

// gallery-single-page-area-start //
         $(document).ready(function() {
            $('.gallerysection').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                },
                gallery: {
                    enabled: true
                },
               
                
            });
        });
// gallery-single-page-area-end //



});

// packages-scrollbar-area-start //
document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.querySelectorAll('.scroll-container'), {
        className: "os-theme-dark",
        resize: "none",
        sizeAutoCapable: true,
        paddingAbsolute: true,
        scrollbars: {
            visibility: "auto",
            autoHide: "leave",
            autoHideDelay: 800,
            dragScrolling: true,
            clickScrolling: true,
            touchSupport: true,
            snapHandle: false
        }
    });
});

// packages-scrollbar-area-end //