// wow = new WOW({
//     boxClass:     'wow',      
//     animateClass: 'animated', 
//     offset:       0,          
//     mobile:       false,       
//     live:         true        
// })
// wow.init();

function sliders() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true
    });

    $('.cat--unit__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.cat--unit__nav'
    });
    $('.cat--unit__nav').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.cat--unit__for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
}

sliders();

$(function(){
    $('.open--modal, .write--btn, .write-btn').on('click', function(){
        var modal = $(this).attr('data-modal');
        $(modal).fadeIn();
        return false;
    });
    $('.modal .close, .modal__layer').on('click', function(){
        $(this).parents('.modal').fadeOut();
        return false;
    });

    $('.col--time').on('click', function(){
        if ($('.col--time ul').is(':visible')) {
            $('.col--time ul').slideUp();
            $('.col--time .more-btn').removeClass('open');
        } else {
            $('.col--time ul').slideDown();
            $('.col--time .more-btn').addClass('open');
        }
        return false;
    });

    $('.col--phone .more-btn').on('click', function(){
        if ($('.col--phone ul').is(':visible')) {
            $('.col--phone ul').slideUp();
            $('.col--phone .more-btn').removeClass('open');
        } else {
            $('.col--phone ul').slideDown();
            $('.col--phone .more-btn').addClass('open');
        }
        return false;
    });

    $('.langs').on('click', function(){
        $('.langs ul').slideToggle();
        $('.langs .more-btn').toggleClass('open');
        return false;
    });


    $('.nav--btn').on('click', function(){
        if ($('header .nav').is(':visible')) {
            $('header .nav').slideUp();
            $(this).removeClass('open');
        } else {
            $('header .nav').slideDown();
            $(this).addClass('open');
        }
        $(document).bind('touchstart', function(e){
            if(!(e.target).closest('header .nav')){
                $('header .nav').slideUp();
                $('.nav--btn').removeClass('open');
            }
            e.stopPropagation();
        })
        return false;
    });

    $('.phone--btn').on('click', function(){
        if ($('header .hts').is(':visible')) {
            $('header .hts').slideUp();
            $(this).removeClass('open');
        } else {
            $('header .hts').slideDown();
            $(this).addClass('open');
        }
        $(document).bind('touchstart', function(e){
            if(!(e.target).closest('header .hts')){
                $('header .hts').slideUp();
                $('.phone--btn').removeClass('open');
            }
            e.stopPropagation();
        })
        return false;
    });
    
    $('[class="tel"]').inputmask('+7 (999) 999-99-99');
});

$(window).on("load",function(e){
    if ($(window).width() <= '1024'){
        $('header .submenu > a').on('click', function(){
            $(this).next().slideToggle();
            return false;
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').slideUp();
        });
    } else {
        $('header .submenu > a').on('mouseover', function(){
            $(this).next().slideDown(250);
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').slideUp(250);
        });
    }
});

// $(function(){
//     $('.btn--up').bind('click.smoothscroll',function (e) {
//         e.preventDefault();
//         var target = this.hash,
//         $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//             }, 1000, 'swing', function () {
//             window.location.hash = target;
//         });
//     });

//     $(window).scroll(function(){
//         var bo = $(this).scrollTop();
//         var a = $(".btn--up").css('opacity')
//         if ( bo >= 200 && a == 0) {$(".btn--up").stop().animate({'opacity':'1'},400)};
//         if ( bo < 200 && a == 1) {$(".btn--up").stop().animate({'opacity':'0'},400)};
//     });
// });
