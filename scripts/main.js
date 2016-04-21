(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ1R3ZWVuTWF4J1xuLy8gaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3cy92aWV3J1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiO1xuXG4vKioqKioqKioqKioqKioqKioqKiogTkFWQkFSIEFOSU1BVElPTiAgKioqKioqKioqKioqKioqKioqKiovXG5pZiAoIG1hdGNoTWVkaWEoICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJyApLm1hdGNoZXMgKSB7XG4gICB2YXIgc2Nyb2xsUG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKSxcbiAgICAgIGFuaW1hdGlvbkVuZFBvcyA9IDE1MCwgLy9BdCB0aGUgcG9pbnQgYmFja2dyb3VuZCBhZGRcbiAgICAgIGFuaW1hdGlvblByb3AgPSAkKCcubmF2YmFyLXRvcCcpOyAvL1dyYXBlclxuXG4gICBpZihzY3JvbGxQb3MgPiBhbmltYXRpb25FbmRQb3MpIHtcbiAgICAgIGFuaW1hdGlvblByb3AuYWRkQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgfVxuXG4gICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICBzY3JvbGxQb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICAgICBpZiggc2Nyb2xsUG9zID4gYW5pbWF0aW9uRW5kUG9zICkge1xuICAgICAgICAgYW5pbWF0aW9uUHJvcC5hZGRDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYW5pbWF0aW9uUHJvcC5yZW1vdmVDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICB9XG4gICB9KTtcbn1cblxuXG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBOQVZCQVIgU1RZTEUgRklYRUQgTEVGVFxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmlmICggbWF0Y2hNZWRpYSggJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCknICkubWF0Y2hlcyApIHtcbiAgIHZhciBzY3JvbGxQb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICAgdmFyIGxlZnROYXYgPSAkKCcubmF2YmFyLWZpeGVkLWxlZnQnKTtcblxuICAgJCgnI25hdmJhci1sZWZ0LXN3aXRjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuICAgICAgbGVmdE5hdi5hZGRDbGFzcygndG9nZ2xlLW5hdicpO1xuICAgfSk7XG5cbiAgIGxlZnROYXYub24oJ2NsaWNrJywgJ2xpJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cbiAgICAgIGxlZnROYXYucmVtb3ZlQ2xhc3MoJ3RvZ2dsZS1uYXYnKTtcbiAgIH0pO1xuXG4gICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICBpZiggc2Nyb2xsUG9zID4gNDAwICkge1xuICAgICAgICAgbGVmdE5hdi5yZW1vdmVDbGFzcygndG9nZ2xlLW5hdicpO1xuICAgICAgfVxuICAgfSk7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogTkFWQkFSIENPTExBUFNFIE9OIENMSUNLICoqKioqKioqKioqKioqKioqKioqL1xuJCgnLm5hdmJhci1uYXYnKS5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG4gICAkKCcubmF2YmFyLWNvbGxhcHNlJykuY29sbGFwc2UoJ2hpZGUnKTtcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIFRFU1RJTU9OSUFMIFNZTkMgV0lUSCBDTElFTlRTICoqKioqKioqKioqKioqKioqKioqL1xudmFyIG93bE5hdnMgPSAkKFwiI3Rlc3RpbW9uaWFsLXBvdHJhaXRzXCIpOyAvLyBjbGllbnQncyBtZXNzYWdlXG52YXIgb3dsQ29udGVudHMgPSAkKFwiI3Rlc3RpbW9uaWFsLWNvbnRlbnRzXCIpOyAvLyBjbGllbnQncyBhdmF0YXJcblxub3dsQ29udGVudHMub3dsQ2Fyb3VzZWwoe1xuICAgc2luZ2xlSXRlbSA6IHRydWUsXG4gICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgbmF2aWdhdGlvblRleHQ6IFsnPGltZyBzcmM9XCJpY29ucy9hbmdsZS1sZWZ0LnN2Z1wiIGNsYXNzPVwiaW5qZWN0LW1lIGljb24tbGVmdFwiPicsICc8aW1nIHNyYz1cImljb25zL2FuZ2xlLXJpZ2h0LnN2Z1wiIGNsYXNzPVwiaW5qZWN0LW1lIGljb24tcmlnaHRcIj4nXSxcbiAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgdHJhbnNpdGlvblN0eWxlOiAnZ29Eb3duJyxcbiAgIGFmdGVyQWN0aW9uIDogc3luY1Bvc2l0aW9uLFxuICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlIDogMjAwLFxuICAgYXV0b1BsYXk6IDUwMDBcbn0pO1xuXG5cbm93bE5hdnMub3dsQ2Fyb3VzZWwoe1xuICAgcGFnaW5hdGlvbjpmYWxzZSxcbiAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZSA6IDEwMCxcbiAgIGFmdGVySW5pdCA6IGZ1bmN0aW9uKGVsKXtcbiAgICBlbC5maW5kKFwiLml0ZW1cIikuZXEoMCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICB9XG59KTtcblxuZnVuY3Rpb24gc3luY1Bvc2l0aW9uKGVsKXtcbiAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50SXRlbTtcbiAgICQob3dsTmF2cylcbiAgICAgIC5maW5kKFwiLml0ZW1cIilcbiAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgLmVxKGN1cnJlbnQpXG4gICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIilcblxuICAgaWYoJChvd2xOYXZzKS5kYXRhKFwib3dsQ2Fyb3VzZWxcIikgIT09IHVuZGVmaW5lZCl7XG4gICAgICBjZW50ZXIoY3VycmVudClcbiAgIH1cbn1cblxuJChvd2xOYXZzKS5vbihcImNsaWNrXCIsIFwiLm93bC1pdGVtXCIsIGZ1bmN0aW9uKGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciBudW1iZXIgPSAkKHRoaXMpLmRhdGEoXCJvd2xJdGVtXCIpO1xuICBvd2xDb250ZW50cy50cmlnZ2VyKFwib3dsLmdvVG9cIixudW1iZXIpO1xufSk7XG5cbmZ1bmN0aW9uIGNlbnRlcihudW1iZXIpe1xuICB2YXIgc3luYzJ2aXNpYmxlID0gb3dsTmF2cy5kYXRhKFwib3dsQ2Fyb3VzZWxcIikub3dsLnZpc2libGVJdGVtcztcbiAgdmFyIG51bSA9IG51bWJlcjtcbiAgdmFyIGZvdW5kID0gZmFsc2U7XG4gIGZvcih2YXIgaSBpbiBzeW5jMnZpc2libGUpe1xuICAgIGlmKG51bSA9PT0gc3luYzJ2aXNpYmxlW2ldKXtcbiAgICAgIHZhciBmb3VuZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYoZm91bmQ9PT1mYWxzZSl7XG4gICAgaWYobnVtPnN5bmMydmlzaWJsZVtzeW5jMnZpc2libGUubGVuZ3RoLTFdKXtcbiAgICAgIG93bE5hdnMudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bSAtIHN5bmMydmlzaWJsZS5sZW5ndGgrMilcbiAgICB9ZWxzZXtcbiAgICAgIGlmKG51bSAtIDEgPT09IC0xKXtcbiAgICAgICAgbnVtID0gMDtcbiAgICAgIH1cbiAgICAgIG93bE5hdnMudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bSk7XG4gICAgfVxuICB9IGVsc2UgaWYobnVtID09PSBzeW5jMnZpc2libGVbc3luYzJ2aXNpYmxlLmxlbmd0aC0xXSl7XG4gICAgb3dsTmF2cy50cmlnZ2VyKFwib3dsLmdvVG9cIiwgc3luYzJ2aXNpYmxlWzFdKVxuICB9IGVsc2UgaWYobnVtID09PSBzeW5jMnZpc2libGVbMF0pe1xuICAgIG93bE5hdnMudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bS0xKVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogU0NSRUVOU0hPVFMgU0xJREVSICoqKioqKioqKioqKioqKioqKioqL1xudmFyIG15U3dpcGVyID0gbmV3IFN3aXBlciAoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgc2xpZGVzUGVyVmlldzogMyxcbiAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcbiAgIHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgc3BhY2VCZXR3ZWVuOiA5MCxcbiAgIG5leHRCdXR0b246ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgIHByZXZCdXR0b246ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogTElHSFRCT1ggKioqKioqKioqKioqKioqKioqKiovXG4kKCcubGlnaHRib3gnKS5uaXZvTGlnaHRib3goKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBSRUNFTlQgQkxPRyAtIEdBTExFUlkgSU1BR0VTICoqKioqKioqKioqKioqKioqKioqL1xuJCgnLnBvc3QtaW1hZ2UtZ2FsbGVyeSAub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgc2luZ2xlSXRlbTogdHJ1ZVxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogU0NST0xMIFJFVkVBTCAqKioqKioqKioqKioqKioqKioqKi9cbi8qIHdpbmRvdy5zciA9IG5ldyBzY3JvbGxSZXZlYWwoKTsgKi9cblxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIFNWRyBJTkpFQ1RJT04gKioqKioqKioqKioqKioqKioqKiovXG4vLyBFbGVtZW50cyB0byBpbmplY3RcbiB2YXIgbXlTVkdzVG9JbmplY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuaW5qZWN0LW1lJyk7XG5cbiAvLyBEbyB0aGUgaW5qZWN0aW9uXG4gU1ZHSW5qZWN0b3IobXlTVkdzVG9JbmplY3QpO1xuXG59KTtcbiJdfQ==
