$(function() {


	$(".toggle-mnu").on('click', function() {
	  $(this).toggleClass("on");
	  $("#mobMenu").toggleClass('on');
	  return false;
	});

	$('.submenu').on('click', function(){
		$(this).toggleClass("on");
		$(this).find('ul').slideToggle();
	});


  $('.members-slider').slick({
  //centerMode: true,
  lazyLoad: 'ondemand',
  //centerPadding: '60px',
  slidesToShow: 3,
  infinite: false,
  prevArrow: '<button id="prev" type="button"></button>',
  nextArrow: '<button id="next" type="button"></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        autoplay: true,
  		autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
  		autoplaySpeed: 2000,
      }
    }
  ]
});


  $('.news-slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  infinite: false,
  dots: true,
  arrows: false
});


    $('img.lazy, .lazyload').Lazy({
        effect: "fadeIn",
        threshold: 50,
        effectTime: 500,
    });

$('img.lazy').on('load', function() {
    $('.header-padding').css('padding-top', $(".header").outerHeight() + 'px');
});


  function yandexMap(id = '') {
	var o,
	    club1Placemark;

	ymaps.ready(function() {
	    o = new ymaps.Map(id, {
	        center: [43.129552, 131.888898],
	        zoom: 17
	    }), club1Placemark = new ymaps.Placemark([43.129552, 131.888898], {
	        balloonContentHeader: '<span class="balloonBody">Ассоциация Застройщиков Владивостокской Городской Агломерации</span>',
	        balloonContentBody: '<span class="balloonBody">Владивосток, Красного знамени проспект, д.3, оф. 3, эт. 7 </span>',
	        balloonContentFooter: '<span class="balloonFooter"></span>',
	        hintContent: ""
	    }, {
	        iconLayout: "default#image",
	        iconImageHref: "/img/location.svg",
	        iconImageSize: [47, 56],
	        iconImageOffset: [-21, -55]
	    });

	    o.geoObjects.add(club1Placemark);
	    o.controls.remove("default");
	});
}


var marker = true;

function count() {
    // function code here ...
    marker = false;
}

$(document).scroll(function () {
	var scrollBottom = $(window).scrollTop() + $(window).height();
    yes = $(".footer").offset().top;
    if(scrollBottom > yes){
    	if ( marker ) {
    		yandexMap('map');
            count();
        }
    }

});

if($('.contacts-page-map').length > 0) {
	yandexMap('pageMap');	
}

});


$(window).on('load', function(){
	$('html, body').animate({ scrollTop: 1000 }, 'slow');
});