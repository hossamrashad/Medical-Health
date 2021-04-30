(function ($) {
    "use strict";
    $(document).ready(function () {

        $(".animsition").animsition({

            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            unSupportCss: ['animation-duration',
                '-webkit-animation-duration',
                '-o-animation-duration'
            ],
            //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body'
        });

        //Stick navigation on scroll
        var navHeight = $('#main_navbar').offset().top;
        FixMegaNavbar(navHeight);
        $(window).on('scroll', function () {
            FixMegaNavbar(navHeight);
        });

        function FixMegaNavbar(navHeight) {
            if (!$('#main_navbar ').hasClass('navbar-fixed-bottom')) {
                if ($(window).scrollTop() > navHeight) {
                    $('#main_navbar ').addClass('navbar-fixed-top')
                    $('body').css({
                        'margin-top': $('#main_navbar ').height() + 'px'
                    });

                    if ($('#main_navbar ').parent('div').hasClass('container')) $('#main_navbar ').children('div').addClass('container').removeClass('container-fluid');
                    else if ($('#main_navbar ').parent('div').hasClass('container-fluid')) $('#main_navbar ').children('div').addClass('container-fluid').removeClass('container');
                } else {
                    $('#main_navbar ').removeClass('navbar-fixed-top');
                    $('#main_navbar ').children('div').addClass('container-fluid').removeClass('container');
                    $('body').css({
                        'margin-top': ''
                    });
                }
            }
        }

        // Date picker
        $('#dp, #dp2').datepicker()


        /**    add image to the elemenet via data atribute and class="bg-image"
         *****************************************************/
        $(".bg-image").css('background', function () {
            var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
            return bg;
        });
        // cover data image
        $(".bg-image").css("background-size", "cover");

        // Accordion icon change
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hidden.bs.collapse', function () {
            $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });

        // embed responsive video vith class below
        $(".responsive-video").fitVids();

        // Contact form sumbit
        $('#contactform').submit(function () {

            var action = $(this).attr('action');

            $("#message").slideUp(750, function () {
                $('#message').hide();

                $('#submit')
                    .after('<img src="assets/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        name: $('#name').val(),
                        phone: $('#phone').val(),
                        subject: $('#subject').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function (data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function () {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');

                    }
                );

            });

            return false;
        });

        var owl = $("#owl-demo");

        owl.owlCarousel({
            items: 3, //3 items above 1000px browser width
            itemsDesktop: [1000, 3], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2],
            pagination: false

        });

        // Custom Navigation Events
        $(".carousel-next").click(function () {
            owl.trigger('owl.next');
        })
        $(".carousel-prev").click(function () {
            owl.trigger('owl.prev');
        });

        $('#owl-slider-1 , #owl-slider-2').owlCarousel({

            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });

        $('.fullsize-slider').revolution({
            delay: 1000,
            startwidth: 1170,
            startheight: 620,
            hideThumbs: 10,
            hideTimerBar: "on",
            fullWidth: "off",
            fullScreen: "off",
            touchenabled: "off",
            onHoverStop: "on",
            fullScreenOffsetContainer: "",
            navigationType: "bullet",
            navigationArrows: "solo",
            navigationStyle: "preview4",
            keyboardNavigation: "on",
            hideCaptionAtLimit: "320",

            parallax: "scroll",
            parallaxBgFreeze: "on",
            parallaxLevels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140]

        });

        /**    Activate tooltips
         *************************************************** **/

        jQuery('[data-toggle~="tooltip"]').tooltip({
            container: 'body'
        });

        /**    Activate popovers
         *************************************************** **/

        jQuery('[data-toggle~="popover"]').popover({
            container: 'body'
        });

    });

    $('#contactform').submit(function () {

        var action = $(this).attr('action');

        $("#message").slideUp(750, function () {
            $('#message').hide();

            $('#submit')
                .after('<img src="images/loader.gif" class="loader" />')
                .attr('disabled', 'disabled');

            $.post(action, {
                    name: $('#name').val(),
                    phone: $('#phone').val(),
                    subject: $('#subject').val(),
                    comments: $('#comments').val(),
                    verify: $('#verify').val()
                },
                function (data) {
                    document.getElementById('message').innerHTML = data;
                    $('#message').slideDown('slow');
                    $('#contactform').fadeOut('slow', function () {
                        $(this).remove()
                    });
                    $('#submit').removeAttr('disabled');
                    if (data.match('success') != null) $('#contactform').slideUp('slow');

                }
            );

        });

        return false;

    });


    $(window).load(function () {
        $(document).on('click', '.navbar .dropdown-menu', function (e) {
            e.stopPropagation();
        })
    });


})(jQuery); // strict