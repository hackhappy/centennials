/**
 * Created by david on 7/10/2017.
 */
/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff"
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
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.2,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#222",
            "opacity": 0.6,
            "width": 4
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
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
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
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
});

function open_img()
{
	
}


document.onscroll = function(){
    var body = document.getElementsByTagName('body')[0];
    var logo = document.getElementsByClassName('logo')[0];
    if(body.scrollTop > 50)
	{
		$('.h-part-1').css('width', 'calc(50% - 40px)');
		$('.h-part-2').css('width', 'calc(50% - 40px)');
		$('.logo').addClass('in-header');
		$('.header').css('background-color', 'black')
		$('.header').find('.menu-item').css('color', 'white');
		$('.header').css('box-shadow', '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3)');
	}
	else
	{
		$('.logo').removeClass('in-header');
		$('.h-part-1').css('width', '50%');
		$('.h-part-2').css('width', '50%');
		$('.header').css('background-color', 'transparent')
		$('.header').find('.menu-item').css('color', 'white')
		$('.header').css('box-shadow', '0 0 0 0');
	}
};

//$(document).ready(function(){
//	$('.galery-image').click(function(){
//		var url = $(this).css('background-image');
//		$('.img-popup').css('background-image', url);
//		$('.img-popup').show();
//		$('body').css('overflow', 'hidden');
//	})
//	$('.ip-close').click(function(){
//		$('.img-popup').hide();
//		$('body').css('overflow', 'auto');
//	})
//})

//document.onscroll = function() {
//    var body = document.getElementsByClassName('body')[0];
//    var bc-logo = document.getElementsByClassName('bc-logo'[0]);
//    if (logo.scrollTop>70) {
//        $('.logo').removeClass('in-header');
//    }
//}
//
