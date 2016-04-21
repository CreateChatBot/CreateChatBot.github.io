// import TweenMax from 'TweenMax'
// import View from './views/view'

$(document).ready(function() {
"use strict";

/******************** NAVBAR ANIMATION  ********************/
if ( matchMedia( 'only screen and (min-width: 768px)' ).matches ) {
   var scrollPos = $(this).scrollTop(),
      animationEndPos = 150, //At the point background add
      animationProp = $('.navbar-top'); //Wraper

   if(scrollPos > animationEndPos) {
      animationProp.addClass('scrolling');
   }

   $(document).scroll(function() {
      scrollPos = $(this).scrollTop();

      if( scrollPos > animationEndPos ) {
         animationProp.addClass('scrolling');
      } else {
         animationProp.removeClass('scrolling');
      }
   });
}



/*
|----------------------------------------------------------------------------
| NAVBAR STYLE FIXED LEFT
|----------------------------------------------------------------------------
*/

if ( matchMedia( 'only screen and (min-width: 768px)' ).matches ) {
   var scrollPos = $(this).scrollTop();
   var leftNav = $('.navbar-fixed-left');

   $('#navbar-left-switch').on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
      leftNav.addClass('toggle-nav');
   });

   leftNav.on('click', 'li', function(event) {
      /* Act on the event */
      leftNav.removeClass('toggle-nav');
   });

   $(document).scroll(function() {
      if( scrollPos > 400 ) {
         leftNav.removeClass('toggle-nav');
      }
   });
}



/******************** NAVBAR COLLAPSE ON CLICK ********************/
$('.navbar-nav').on('click', 'a', function(event) {
   /* Act on the event */
   $('.navbar-collapse').collapse('hide');
});



/******************** TESTIMONIAL SYNC WITH CLIENTS ********************/
var owlNavs = $("#testimonial-potraits"); // client's message
var owlContents = $("#testimonial-contents"); // client's avatar

owlContents.owlCarousel({
   singleItem : true,
   navigation: true,
   navigationText: ['<img src="icons/angle-left.svg" class="inject-me icon-left">', '<img src="icons/angle-right.svg" class="inject-me icon-right">'],
   pagination: false,
   transitionStyle: 'goDown',
   afterAction : syncPosition,
   responsiveRefreshRate : 200,
   autoPlay: 5000
});


owlNavs.owlCarousel({
   pagination:false,
   responsiveRefreshRate : 100,
   afterInit : function(el){
    el.find(".item").eq(0).addClass("active");
   }
});

function syncPosition(el){
   var current = this.currentItem;
   $(owlNavs)
      .find(".item")
      .removeClass("active")
      .eq(current)
      .addClass("active")

   if($(owlNavs).data("owlCarousel") !== undefined){
      center(current)
   }
}

$(owlNavs).on("click", ".owl-item", function(e){
  e.preventDefault();
  var number = $(this).data("owlItem");
  owlContents.trigger("owl.goTo",number);
});

function center(number){
  var sync2visible = owlNavs.data("owlCarousel").owl.visibleItems;
  var num = number;
  var found = false;
  for(var i in sync2visible){
    if(num === sync2visible[i]){
      var found = true;
    }
  }

  if(found===false){
    if(num>sync2visible[sync2visible.length-1]){
      owlNavs.trigger("owl.goTo", num - sync2visible.length+2)
    }else{
      if(num - 1 === -1){
        num = 0;
      }
      owlNavs.trigger("owl.goTo", num);
    }
  } else if(num === sync2visible[sync2visible.length-1]){
    owlNavs.trigger("owl.goTo", sync2visible[1])
  } else if(num === sync2visible[0]){
    owlNavs.trigger("owl.goTo", num-1)
  }
}



/******************** SCREENSHOTS SLIDER ********************/
var mySwiper = new Swiper ('.swiper-container', {
   slidesPerView: 3,
   centeredSlides: true,
   paginationClickable: true,
   pagination: '.swiper-pagination',
   spaceBetween: 90,
   nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev'
});



/******************** LIGHTBOX ********************/
$('.lightbox').nivoLightbox();



/******************** RECENT BLOG - GALLERY IMAGES ********************/
$('.post-image-gallery .owl-carousel').owlCarousel({
   singleItem: true
});



/******************** SCROLL REVEAL ********************/
/* window.sr = new scrollReveal(); */




/******************** SVG INJECTION ********************/
// Elements to inject
 var mySVGsToInject = document.querySelectorAll('img.inject-me');

 // Do the injection
 SVGInjector(mySVGsToInject);

});
