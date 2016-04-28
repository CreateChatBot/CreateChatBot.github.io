(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// import "html5shiv.js";

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
// var owlNavs = $("#testimonial-potraits"); // client's message
// var owlContents = $("#testimonial-contents"); // client's avatar
//
// owlContents.owlCarousel({
//    singleItem : true,
//    navigation: true,
//    navigationText: ['<img src="icons/angle-left.svg" class="inject-me icon-left">', '<img src="icons/angle-right.svg" class="inject-me icon-right">'],
//    pagination: false,
//    transitionStyle: 'goDown',
//    afterAction : syncPosition,
//    responsiveRefreshRate : 200,
//    autoPlay: 5000
// });
//
//
// owlNavs.owlCarousel({
//    pagination:false,
//    responsiveRefreshRate : 100,
//    afterInit : function(el){
//     el.find(".item").eq(0).addClass("active");
//    }
// });
//
// function syncPosition(el){
//    var current = this.currentItem;
//    $(owlNavs)
//       .find(".item")
//       .removeClass("active")
//       .eq(current)
//       .addClass("active")
//
//    if($(owlNavs).data("owlCarousel") !== undefined){
//       center(current)
//    }
// }
//
// $(owlNavs).on("click", ".owl-item", function(e){
//   e.preventDefault();
//   var number = $(this).data("owlItem");
//   owlContents.trigger("owl.goTo",number);
// });
//
// function center(number){
//   var sync2visible = owlNavs.data("owlCarousel").owl.visibleItems;
//   var num = number;
//   var found = false;
//   for(var i in sync2visible){
//     if(num === sync2visible[i]){
//       var found = true;
//     }
//   }
//
//   if(found===false){
//     if(num>sync2visible[sync2visible.length-1]){
//       owlNavs.trigger("owl.goTo", num - sync2visible.length+2)
//     }else{
//       if(num - 1 === -1){
//         num = 0;
//       }
//       owlNavs.trigger("owl.goTo", num);
//     }
//   } else if(num === sync2visible[sync2visible.length-1]){
//     owlNavs.trigger("owl.goTo", sync2visible[1])
//   } else if(num === sync2visible[0]){
//     owlNavs.trigger("owl.goTo", num-1)
//   }
// }



/******************** SCREENSHOTS SLIDER ********************/
// var mySwiper = new Swiper ('.swiper-container', {
//    slidesPerView: 3,
//    centeredSlides: true,
//    paginationClickable: true,
//    pagination: '.swiper-pagination',
//    spaceBetween: 90,
//    nextButton: '.swiper-button-next',
//    prevButton: '.swiper-button-prev'
// });



/******************** LIGHTBOX ********************/
// $('.lightbox').nivoLightbox();



/******************** RECENT BLOG - GALLERY IMAGES ********************/
// $('.post-image-gallery .owl-carousel').owlCarousel({
//    singleItem: true
// });



/******************** SCROLL REVEAL ********************/
/* window.sr = new scrollReveal(); */


/******************** SVG INJECTION ********************/


// Elements to inject
 var mySVGsToInject = document.querySelectorAll('img.inject-me');

 // Do the injection
 SVGInjector(mySVGsToInject);

});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBpbXBvcnQgXCJodG1sNXNoaXYuanNcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cInVzZSBzdHJpY3RcIjtcblxuLyoqKioqKioqKioqKioqKioqKioqIE5BVkJBUiBBTklNQVRJT04gICoqKioqKioqKioqKioqKioqKioqL1xuaWYgKCBtYXRjaE1lZGlhKCAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KScgKS5tYXRjaGVzICkge1xuICAgdmFyIHNjcm9sbFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCksXG4gICAgICBhbmltYXRpb25FbmRQb3MgPSAxNTAsIC8vQXQgdGhlIHBvaW50IGJhY2tncm91bmQgYWRkXG4gICAgICBhbmltYXRpb25Qcm9wID0gJCgnLm5hdmJhci10b3AnKTsgLy9XcmFwZXJcblxuICAgaWYoc2Nyb2xsUG9zID4gYW5pbWF0aW9uRW5kUG9zKSB7XG4gICAgICBhbmltYXRpb25Qcm9wLmFkZENsYXNzKCdzY3JvbGxpbmcnKTtcbiAgIH1cblxuICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgc2Nyb2xsUG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgICAgaWYoIHNjcm9sbFBvcyA+IGFuaW1hdGlvbkVuZFBvcyApIHtcbiAgICAgICAgIGFuaW1hdGlvblByb3AuYWRkQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGFuaW1hdGlvblByb3AucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgfVxuICAgfSk7XG59XG5cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IE5BVkJBUiBTVFlMRSBGSVhFRCBMRUZUXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuaWYgKCBtYXRjaE1lZGlhKCAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KScgKS5tYXRjaGVzICkge1xuICAgdmFyIHNjcm9sbFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG4gICB2YXIgbGVmdE5hdiA9ICQoJy5uYXZiYXItZml4ZWQtbGVmdCcpO1xuXG4gICAkKCcjbmF2YmFyLWxlZnQtc3dpdGNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG4gICAgICBsZWZ0TmF2LmFkZENsYXNzKCd0b2dnbGUtbmF2Jyk7XG4gICB9KTtcblxuICAgbGVmdE5hdi5vbignY2xpY2snLCAnbGknLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuICAgICAgbGVmdE5hdi5yZW1vdmVDbGFzcygndG9nZ2xlLW5hdicpO1xuICAgfSk7XG5cbiAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgIGlmKCBzY3JvbGxQb3MgPiA0MDAgKSB7XG4gICAgICAgICBsZWZ0TmF2LnJlbW92ZUNsYXNzKCd0b2dnbGUtbmF2Jyk7XG4gICAgICB9XG4gICB9KTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBOQVZCQVIgQ09MTEFQU0UgT04gQ0xJQ0sgKioqKioqKioqKioqKioqKioqKiovXG4kKCcubmF2YmFyLW5hdicpLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cbiAgICQoJy5uYXZiYXItY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogVEVTVElNT05JQUwgU1lOQyBXSVRIIENMSUVOVFMgKioqKioqKioqKioqKioqKioqKiovXG4vLyB2YXIgb3dsTmF2cyA9ICQoXCIjdGVzdGltb25pYWwtcG90cmFpdHNcIik7IC8vIGNsaWVudCdzIG1lc3NhZ2Vcbi8vIHZhciBvd2xDb250ZW50cyA9ICQoXCIjdGVzdGltb25pYWwtY29udGVudHNcIik7IC8vIGNsaWVudCdzIGF2YXRhclxuLy9cbi8vIG93bENvbnRlbnRzLm93bENhcm91c2VsKHtcbi8vICAgIHNpbmdsZUl0ZW0gOiB0cnVlLFxuLy8gICAgbmF2aWdhdGlvbjogdHJ1ZSxcbi8vICAgIG5hdmlnYXRpb25UZXh0OiBbJzxpbWcgc3JjPVwiaWNvbnMvYW5nbGUtbGVmdC5zdmdcIiBjbGFzcz1cImluamVjdC1tZSBpY29uLWxlZnRcIj4nLCAnPGltZyBzcmM9XCJpY29ucy9hbmdsZS1yaWdodC5zdmdcIiBjbGFzcz1cImluamVjdC1tZSBpY29uLXJpZ2h0XCI+J10sXG4vLyAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbi8vICAgIHRyYW5zaXRpb25TdHlsZTogJ2dvRG93bicsXG4vLyAgICBhZnRlckFjdGlvbiA6IHN5bmNQb3NpdGlvbixcbi8vICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZSA6IDIwMCxcbi8vICAgIGF1dG9QbGF5OiA1MDAwXG4vLyB9KTtcbi8vXG4vL1xuLy8gb3dsTmF2cy5vd2xDYXJvdXNlbCh7XG4vLyAgICBwYWdpbmF0aW9uOmZhbHNlLFxuLy8gICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlIDogMTAwLFxuLy8gICAgYWZ0ZXJJbml0IDogZnVuY3Rpb24oZWwpe1xuLy8gICAgIGVsLmZpbmQoXCIuaXRlbVwiKS5lcSgwKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbi8vICAgIH1cbi8vIH0pO1xuLy9cbi8vIGZ1bmN0aW9uIHN5bmNQb3NpdGlvbihlbCl7XG4vLyAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudEl0ZW07XG4vLyAgICAkKG93bE5hdnMpXG4vLyAgICAgICAuZmluZChcIi5pdGVtXCIpXG4vLyAgICAgICAucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbi8vICAgICAgIC5lcShjdXJyZW50KVxuLy8gICAgICAgLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4vL1xuLy8gICAgaWYoJChvd2xOYXZzKS5kYXRhKFwib3dsQ2Fyb3VzZWxcIikgIT09IHVuZGVmaW5lZCl7XG4vLyAgICAgICBjZW50ZXIoY3VycmVudClcbi8vICAgIH1cbi8vIH1cbi8vXG4vLyAkKG93bE5hdnMpLm9uKFwiY2xpY2tcIiwgXCIub3dsLWl0ZW1cIiwgZnVuY3Rpb24oZSl7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgdmFyIG51bWJlciA9ICQodGhpcykuZGF0YShcIm93bEl0ZW1cIik7XG4vLyAgIG93bENvbnRlbnRzLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLG51bWJlcik7XG4vLyB9KTtcbi8vXG4vLyBmdW5jdGlvbiBjZW50ZXIobnVtYmVyKXtcbi8vICAgdmFyIHN5bmMydmlzaWJsZSA9IG93bE5hdnMuZGF0YShcIm93bENhcm91c2VsXCIpLm93bC52aXNpYmxlSXRlbXM7XG4vLyAgIHZhciBudW0gPSBudW1iZXI7XG4vLyAgIHZhciBmb3VuZCA9IGZhbHNlO1xuLy8gICBmb3IodmFyIGkgaW4gc3luYzJ2aXNpYmxlKXtcbi8vICAgICBpZihudW0gPT09IHN5bmMydmlzaWJsZVtpXSl7XG4vLyAgICAgICB2YXIgZm91bmQgPSB0cnVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy9cbi8vICAgaWYoZm91bmQ9PT1mYWxzZSl7XG4vLyAgICAgaWYobnVtPnN5bmMydmlzaWJsZVtzeW5jMnZpc2libGUubGVuZ3RoLTFdKXtcbi8vICAgICAgIG93bE5hdnMudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bSAtIHN5bmMydmlzaWJsZS5sZW5ndGgrMilcbi8vICAgICB9ZWxzZXtcbi8vICAgICAgIGlmKG51bSAtIDEgPT09IC0xKXtcbi8vICAgICAgICAgbnVtID0gMDtcbi8vICAgICAgIH1cbi8vICAgICAgIG93bE5hdnMudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bSk7XG4vLyAgICAgfVxuLy8gICB9IGVsc2UgaWYobnVtID09PSBzeW5jMnZpc2libGVbc3luYzJ2aXNpYmxlLmxlbmd0aC0xXSl7XG4vLyAgICAgb3dsTmF2cy50cmlnZ2VyKFwib3dsLmdvVG9cIiwgc3luYzJ2aXNpYmxlWzFdKVxuLy8gICB9IGVsc2UgaWYobnVtID09PSBzeW5jMnZpc2libGVbMF0pe1xuLy8gICAgIG93bE5hdnMudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bS0xKVxuLy8gICB9XG4vLyB9XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogU0NSRUVOU0hPVFMgU0xJREVSICoqKioqKioqKioqKioqKioqKioqL1xuLy8gdmFyIG15U3dpcGVyID0gbmV3IFN3aXBlciAoJy5zd2lwZXItY29udGFpbmVyJywge1xuLy8gICAgc2xpZGVzUGVyVmlldzogMyxcbi8vICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuLy8gICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcbi8vICAgIHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuLy8gICAgc3BhY2VCZXR3ZWVuOiA5MCxcbi8vICAgIG5leHRCdXR0b246ICcuc3dpcGVyLWJ1dHRvbi1uZXh0Jyxcbi8vICAgIHByZXZCdXR0b246ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xuLy8gfSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogTElHSFRCT1ggKioqKioqKioqKioqKioqKioqKiovXG4vLyAkKCcubGlnaHRib3gnKS5uaXZvTGlnaHRib3goKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBSRUNFTlQgQkxPRyAtIEdBTExFUlkgSU1BR0VTICoqKioqKioqKioqKioqKioqKioqL1xuLy8gJCgnLnBvc3QtaW1hZ2UtZ2FsbGVyeSAub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuLy8gICAgc2luZ2xlSXRlbTogdHJ1ZVxuLy8gfSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogU0NST0xMIFJFVkVBTCAqKioqKioqKioqKioqKioqKioqKi9cbi8qIHdpbmRvdy5zciA9IG5ldyBzY3JvbGxSZXZlYWwoKTsgKi9cblxuXG4vKioqKioqKioqKioqKioqKioqKiogU1ZHIElOSkVDVElPTiAqKioqKioqKioqKioqKioqKioqKi9cblxuXG4vLyBFbGVtZW50cyB0byBpbmplY3RcbiB2YXIgbXlTVkdzVG9JbmplY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuaW5qZWN0LW1lJyk7XG5cbiAvLyBEbyB0aGUgaW5qZWN0aW9uXG4gU1ZHSW5qZWN0b3IobXlTVkdzVG9JbmplY3QpO1xuXG59KTtcbiJdfQ==
