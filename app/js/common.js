$(document).ready(function () {

//rightMenu
    var sideNav = $('#mySidenav');
    var burger = $('.burger');
    burger.click(function () {
        $(this).toggleClass('burgerActive');
        if (sideNav[0].style.width !== "350px") {
            $('.overlay').fadeIn(500);
            sideNav.get(0).style.width = "350px";
            $('body, .upper-links').not('#mySidenav').css({
                'paddingRight': "350px",
            });
            $('.triangle1')[0].style.width = 'calc(100% - 350px)';
            burger[0].style.marginRight = "350px";
        } else {
            $('.overlay').fadeOut(500);
            sideNav[0].style.width = "0";
            $('body, .upper-links').not('#mySidenav').css({
                'paddingRight': "0",
            });
            $('.burger')[0].style.marginRight = "0";
            $('.triangle1')[0].style.width = '100%';
        }
    });
    $('.overlay').click(function () {
        $('.overlay').fadeOut(500);
        sideNav[0].style.width = "0";
        $('body, .upper-links').not('#mySidenav').css({
            'paddingRight': "0",
        });
        burger[0].style.marginRight = "0";
        burger.toggleClass('burgerActive');
        $('.triangle1')[0].style.width = '100%';
    });

//owl-carousel
        $(".owl-carousel").owlCarousel({
            items:2,
            center: true,
            loop:true,
            margin:60,
            nav:true,
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:true,
            responsive:{
                600:{
                    items:2
                }
            }
        });



});

