$(document).ready(function () {

//rightMenu
    var sideNav = $('#mySidenav');
    $('.burger').click(function () {
        $(this).toggleClass('burgerActive');
        if (sideNav[0].style.width !== "350px") {
            $('.overlay').fadeIn(500);
            sideNav.get(0).style.width = "350px";
            $('body, .upper-links').not('#mySidenav').css({
                'paddingRight': "350px",
            });
            $('.burger')[0].style.marginRight = "350px";
        } else {
            $('.overlay').fadeOut(500);
            sideNav[0].style.width = "0";
            $('body, .upper-links').not('#mySidenav').css({
                'paddingRight': "0",
            });
            $('.burger')[0].style.marginRight = "0";
        }
    });
    $('.overlay').click(function () {
        $('.overlay').fadeOut(500);
        sideNav[0].style.width = "0";
        $('body, .upper-links').not('#mySidenav').css({
            'paddingRight': "0",
        });
        $('.burger')[0].style.marginRight = "0";
        $('.burger').toggleClass('burgerActive');
    })

});

