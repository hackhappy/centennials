/*$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.load, .hr_box, .hr_box_two');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });
  */

$(document).ready(function() {
    // set panels equal to window size
    setPanelSize();

    $(window).resize(function(){
        setPanelSize();
    });

     // function to set panels to window size and constrain video
    function setPanelSize(){
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var num = $("#menu li").length;
        var windowWidthColor = $('.color').width();
        var windowWidthBrain = $('.brain').width();
        var windowWidthtextBox = $('.item_text_box').width();
        var windowWidthFirst = $('.first_item img').width();
        var arBag = $('.ar_bag').width();
        var arCard = $('.ar_cards').width();

        //calculate whether the video is too tall for the space
        //resize video and panel

        $('.ar_bag').css({'margin-top': - ((arBag / 1920) * 554) / 2 + 'px' });
        $('.er_head iframe').css({'height': windowHeight - 70 + 'px' });
        $('.ar_cards').css({'margin-bottom': - ((arCard / 1920) * 785) / 2 + 'px' });
        $('#home_head_top').css({ 'height': windowHeight + 'px' });
        $('.logo_new_wrap').css({ 'height': windowHeight - 75 + 'px' });
        $('#myiFrame').css({ 'height': windowHeight - 68 + 'px' });
        $('#myiFrameMobile').css({ 'height': windowHeight - 68 + 'px' });
        //$('.masha').css({ 'line-height': windowWidthFirst / 4 * 3 + 'px' });
        $('.site_view').css({ 'height': windowHeight + 'px' });
        $('.row.work').css({ 'min-height': windowHeight + 'px' });
        $('.row.blog').css({ 'min-height': windowHeight + 'px' });
        $('.text').css({'padding-top':windowHeight/2-40+'px'});
        $('.item_text_box').css({'width': windowWidth + 'px'});
        $('.color').css({'height':windowWidthColor +'px'});
        $('.first_item .col-lg-6').css({'padding-top':(windowWidthFirst / 4 * 3 - 195) /2 +'px'});
        //calculate whether the video is too tall for the space
        //resize video and panel
        if (windowWidth < 769){
          $('.sh_logo_box').css({'height': windowHeight +'px'});
          $('.st_slide_wrap').css({'height': windowHeight +'px'});
          $('.ar_top').css({'height': windowHeight + 'px'});
          $('#menu').css({'height': windowHeight - 80 + 'px'});
          $('#menu').css({'padding-top': ( windowHeight - ( 56 * num) ) / 2 - 40  + 'px'});
          $(document).on("scroll", function() {

          	if($(document).scrollTop()>50) {
          		$(".adv_wrap, header").addClass("up");
          	} else {
          		$(".adv_wrap, header").removeClass("up");
          	}

          });
        } else {
          $('.sh_logo_box').css({'height': windowHeight - 80 +'px'});
          $('.st_slide_wrap').css({'height': windowHeight - 80 +'px'});
          $('.ar_top').css({'height': windowHeight - 80 +'px'});
          $('#menu').css({'height': 50 + 'px'});
          $('#menu').css({'padding-top': 0 + 'px'});
          $(document).on("scroll", function() {

          	if($(document).scrollTop()>50) {
          		$(".adv_wrap, header").addClass("braind");
          	} else {
          		$(".adv_wrap, header").removeClass("braind");
          	}

          });
        }

    }
});


$(function() {
			$('.desktop').on('click', function(e) {
				 $(".desktop_frame").addClass("prew");
			});

      $('.mobile').on('click', function(e) {
				 $(".mobile_frame").addClass("prew");
			});

      $('.wrap_btn').on('click', function(e) {
				 $(".new_page_info ").toggleClass("active");
			});

      $('.iframe_btn').on('click', function(e) {
				 $(".live_iframe").removeClass("prew");
			});

      $('#menu_close').on('click', function(e) {
				 $("#menu, #menu_close, body").toggleClass("up");
         $("header, .adv_wrap").addClass("up");
			});

      $('.adv_close').on('click', function(e) {
				 $(".adv_wrap, header").toggleClass("up");
			});

      $('.oder_filt').on('click', function(e) {
				 $(".item.cit").addClass("cit_hide");
			});

			$('.contact_two').on('click', function(e) {
        $(".contact_two").addClass("active");
        $(".contact_one").removeClass("active");
        $("#map").addClass("active");
        $("#mapTwo").addClass("active");
        $(".contact_box").addClass("active");
			});

      $('.contact_one').on('click', function(e) {
         $(".contact_one").addClass("active");
        $(".contact_two").removeClass("active");
        $("#map").removeClass("active");
        $("#mapTwo").removeClass("active");
        $(".contact_box").removeClass("active");
      });

      $('.main_filt').on('click', function(e) {
         $(".item.cit.cit_hide").removeClass("cit_hide");
      });

      $('.map_oppen, .map_close').on('click', function(e) {
         $("#map_box").toggleClass("oppen_map");
      });

});

$(document).ready(function(){

  $("#scroll_down span").click(function() {
    $('html, body').stop(true, true).animate({
        scrollTop: $(".container").offset().top + 10
    }, 1000)
  });
    });

$(document).ready(function () {
    $(".item .more").hover(
    function () {
        $(this).parent().parent().parent().addClass("box_hover");
    }, function () {
        $(this).parent().parent().parent().removeClass("box_hover");
    });
});


$(document).ready(function(){

  $(".scroll").click(function() {
    $('html, body').stop(true, true).animate({
        scrollTop: $(".container").offset().top
    }, 1000)
  });
    });

    $(document).ready(function(){

      $("#go_to").click(function() {
        $('html, body').stop(true, true).animate({
            scrollTop: $("body").offset().top
        }, 1000)
      });
        });

$(function(){
	$('.row.work').mixItUp();
  $('.row.blog').mixItUp();
});


$(document).ready(function(){
  $('.home_slider').bxSlider({
    auto: true,

  });

  $('#slider2').bxSlider({
    auto: true,
    mode: 'vertical',
  });

$('#slider1').bxSlider({
    auto: true,
    mode: 'vertical',
  });
});
