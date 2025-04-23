(function ($) {
    "use strict";

    // Variables de color primarias
    const primaryColor = '#3498db';
    const secondaryColor = '#2c3e50';

    // Activar/desactivar Loader
    $(window).on('load', function () {
        $('.loader-wrapper').fadeOut('slow');
        
        // Inicializar los carruseles inmediatamente después de cargar la página
        initCarousels();
    });

    // Función para inicializar todos los carruseles
    function initCarousels() {
        // Testimonial carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 25,
            dots: true,
            loop: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
        
        console.log("Carrusel de testimonios inicializado");
    }

    // Navbar on scrolling
    var navbar = $(".navbar");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            navbar.addClass("fixed-top shadow-sm");
            navbar.removeClass("py-3");
        } else {
            navbar.removeClass("shadow-sm");
            navbar.addClass("py-3");
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Suavizar navegación por anclas
    $('a.smooth-scroll').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Botón de volver arriba
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Inicializar la navegación activa por scroll
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.navbar',
        offset: 51
    });

    // Skills
    $(window).scroll(function () {
        $('.skill-progress .progress-bar').each(function () {
            if ($(this).isInViewport()) {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            }
        });
    });

    // Verificar si un elemento está en el viewport
    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Inicializar lightbox para imágenes
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    // Actualizar año en copyright
    $('#year').text(new Date().getFullYear());

})(jQuery);

