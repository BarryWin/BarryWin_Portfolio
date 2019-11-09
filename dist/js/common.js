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
            $('.arrow, .upper-links:before')[0].style.left = 'calc(50% - 175px)';
        } else {
            $('.overlay').fadeOut(500);
            sideNav[0].style.width = "0";
            $('body, .upper-links').not('#mySidenav').css({
                'paddingRight': "0",
            });
            $('.burger')[0].style.marginRight = "0";
            $('.triangle1')[0].style.width = '100%';
            $('.arrow')[0].style.left = '50%';
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
        $('.arrow')[0].style.left = '50%';
    });

//owl-carousel
    $(".owl-carousel").owlCarousel({
        items: 2,
        center: true,
        loop: true,
        margin: 60,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            600: {
                items: 4
            }
        }
    });

//scrollDown
    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination}, 1000)
    });

//skills-animation
//     var skill_html = $(".html").offset().top;
//     var skill_css = $(".css").offset().top;
//     // var skill_js = $(".js").offset().top;
//     var skill_jq = $(".jq").offset().top;
//     var skill_boot = $(".boot").offset().top;
//     var skill_php = $(".php").offset().top;
//     $(document).scroll(function () {
//         if ($(document).scrollTop() + $(window).height() > skill_html){
//             $('.html').animate({'width': '90%'},1400,"swing");
//         }
//         if($(document).scrollTop() + $(window).height() > skill_css){
//             $('.css').animate({'width': '80%'},1400,"swing");
//         }
//         if($(document).scrollTop() + $(window).height() > skill_boot){
//             $('.boot').animate({'width': '50%'},1400,"swing");
//         }
//         if($(document).scrollTop() + $(window).height() > skill_jq){
//             $('.jq').animate({'width': '60%'},1400,"swing");
//         }
//         // if($(document).scrollTop() + $(window).height() > skill_js){
//         //     $('.js').animate({'width': '40%'},1400,"swing");
//         // }
//         if($(document).scrollTop() + $(window).height() > skill_php){
//             $('.php').animate({'width': '20%'},1400,"swing");
//         }
//     });

//circle-progress-bar

    const circles = $('.progress-ring-circle');
    const radius = circles.attr('r');
    const circumference = 2 * Math.PI * radius;

    circles.css('strokeDasharray', `0 ${circumference}`);

    // circles.style.strokeDashoffset = - circumference;

    function setProgress(percent, circleClass) {
        const circle = $(`.${circleClass}`);
        const offset = circumference - percent / 100 * circumference;
        // circle.style.strokeDashoffset = offset - circumference;
        circle.css('strokeDasharray', `${circumference - offset} ${offset}`)
    }

    var skillsTop = $("#circle-skills").offset().top;
    $(document).scroll(function () {
        if ($(document).scrollTop() + $(window).height() > skillsTop) {
            setProgress(95, 'html');
            setProgress(80, 'css');
            setProgress(70, 'js');
            setProgress(60, 'boot');
            setProgress(30,'php')
        }
    });


//particleJS plugin
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 1121.6780303333778
                }
            },
            "color": {
                "value": "#876264"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 7,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ccc",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    })
});