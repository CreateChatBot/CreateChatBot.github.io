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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGltcG9ydCBcImh0bWw1c2hpdi5qc1wiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiO1xuXG4vKioqKioqKioqKioqKioqKioqKiogTkFWQkFSIEFOSU1BVElPTiAgKioqKioqKioqKioqKioqKioqKiovXG5pZiAoIG1hdGNoTWVkaWEoICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJyApLm1hdGNoZXMgKSB7XG4gICB2YXIgc2Nyb2xsUG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKSxcbiAgICAgIGFuaW1hdGlvbkVuZFBvcyA9IDE1MCwgLy9BdCB0aGUgcG9pbnQgYmFja2dyb3VuZCBhZGRcbiAgICAgIGFuaW1hdGlvblByb3AgPSAkKCcubmF2YmFyLXRvcCcpOyAvL1dyYXBlclxuXG4gICBpZihzY3JvbGxQb3MgPiBhbmltYXRpb25FbmRQb3MpIHtcbiAgICAgIGFuaW1hdGlvblByb3AuYWRkQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgfVxuXG4gICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICBzY3JvbGxQb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICAgICBpZiggc2Nyb2xsUG9zID4gYW5pbWF0aW9uRW5kUG9zICkge1xuICAgICAgICAgYW5pbWF0aW9uUHJvcC5hZGRDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYW5pbWF0aW9uUHJvcC5yZW1vdmVDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICB9XG4gICB9KTtcbn1cblxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgTkFWQkFSIFNUWUxFIEZJWEVEIExFRlRcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG5pZiAoIG1hdGNoTWVkaWEoICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJyApLm1hdGNoZXMgKSB7XG4gICB2YXIgc2Nyb2xsUG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgIHZhciBsZWZ0TmF2ID0gJCgnLm5hdmJhci1maXhlZC1sZWZ0Jyk7XG5cbiAgICQoJyNuYXZiYXItbGVmdC1zd2l0Y2gnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cbiAgICAgIGxlZnROYXYuYWRkQ2xhc3MoJ3RvZ2dsZS1uYXYnKTtcbiAgIH0pO1xuXG4gICBsZWZ0TmF2Lm9uKCdjbGljaycsICdsaScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG4gICAgICBsZWZ0TmF2LnJlbW92ZUNsYXNzKCd0b2dnbGUtbmF2Jyk7XG4gICB9KTtcblxuICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgaWYoIHNjcm9sbFBvcyA+IDQwMCApIHtcbiAgICAgICAgIGxlZnROYXYucmVtb3ZlQ2xhc3MoJ3RvZ2dsZS1uYXYnKTtcbiAgICAgIH1cbiAgIH0pO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIE5BVkJBUiBDT0xMQVBTRSBPTiBDTElDSyAqKioqKioqKioqKioqKioqKioqKi9cbiQoJy5uYXZiYXItbmF2Jykub24oJ2NsaWNrJywgJ2EnLCBmdW5jdGlvbihldmVudCkge1xuICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuICAgJCgnLm5hdmJhci1jb2xsYXBzZScpLmNvbGxhcHNlKCdoaWRlJyk7XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBURVNUSU1PTklBTCBTWU5DIFdJVEggQ0xJRU5UUyAqKioqKioqKioqKioqKioqKioqKi9cbi8vIHZhciBvd2xOYXZzID0gJChcIiN0ZXN0aW1vbmlhbC1wb3RyYWl0c1wiKTsgLy8gY2xpZW50J3MgbWVzc2FnZVxuLy8gdmFyIG93bENvbnRlbnRzID0gJChcIiN0ZXN0aW1vbmlhbC1jb250ZW50c1wiKTsgLy8gY2xpZW50J3MgYXZhdGFyXG4vL1xuLy8gb3dsQ29udGVudHMub3dsQ2Fyb3VzZWwoe1xuLy8gICAgc2luZ2xlSXRlbSA6IHRydWUsXG4vLyAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuLy8gICAgbmF2aWdhdGlvblRleHQ6IFsnPGltZyBzcmM9XCJpY29ucy9hbmdsZS1sZWZ0LnN2Z1wiIGNsYXNzPVwiaW5qZWN0LW1lIGljb24tbGVmdFwiPicsICc8aW1nIHNyYz1cImljb25zL2FuZ2xlLXJpZ2h0LnN2Z1wiIGNsYXNzPVwiaW5qZWN0LW1lIGljb24tcmlnaHRcIj4nXSxcbi8vICAgIHBhZ2luYXRpb246IGZhbHNlLFxuLy8gICAgdHJhbnNpdGlvblN0eWxlOiAnZ29Eb3duJyxcbi8vICAgIGFmdGVyQWN0aW9uIDogc3luY1Bvc2l0aW9uLFxuLy8gICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlIDogMjAwLFxuLy8gICAgYXV0b1BsYXk6IDUwMDBcbi8vIH0pO1xuLy9cbi8vXG4vLyBvd2xOYXZzLm93bENhcm91c2VsKHtcbi8vICAgIHBhZ2luYXRpb246ZmFsc2UsXG4vLyAgICByZXNwb25zaXZlUmVmcmVzaFJhdGUgOiAxMDAsXG4vLyAgICBhZnRlckluaXQgOiBmdW5jdGlvbihlbCl7XG4vLyAgICAgZWwuZmluZChcIi5pdGVtXCIpLmVxKDApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuLy8gICAgfVxuLy8gfSk7XG4vL1xuLy8gZnVuY3Rpb24gc3luY1Bvc2l0aW9uKGVsKXtcbi8vICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50SXRlbTtcbi8vICAgICQob3dsTmF2cylcbi8vICAgICAgIC5maW5kKFwiLml0ZW1cIilcbi8vICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuLy8gICAgICAgLmVxKGN1cnJlbnQpXG4vLyAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbi8vXG4vLyAgICBpZigkKG93bE5hdnMpLmRhdGEoXCJvd2xDYXJvdXNlbFwiKSAhPT0gdW5kZWZpbmVkKXtcbi8vICAgICAgIGNlbnRlcihjdXJyZW50KVxuLy8gICAgfVxuLy8gfVxuLy9cbi8vICQob3dsTmF2cykub24oXCJjbGlja1wiLCBcIi5vd2wtaXRlbVwiLCBmdW5jdGlvbihlKXtcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICB2YXIgbnVtYmVyID0gJCh0aGlzKS5kYXRhKFwib3dsSXRlbVwiKTtcbi8vICAgb3dsQ29udGVudHMudHJpZ2dlcihcIm93bC5nb1RvXCIsbnVtYmVyKTtcbi8vIH0pO1xuLy9cbi8vIGZ1bmN0aW9uIGNlbnRlcihudW1iZXIpe1xuLy8gICB2YXIgc3luYzJ2aXNpYmxlID0gb3dsTmF2cy5kYXRhKFwib3dsQ2Fyb3VzZWxcIikub3dsLnZpc2libGVJdGVtcztcbi8vICAgdmFyIG51bSA9IG51bWJlcjtcbi8vICAgdmFyIGZvdW5kID0gZmFsc2U7XG4vLyAgIGZvcih2YXIgaSBpbiBzeW5jMnZpc2libGUpe1xuLy8gICAgIGlmKG51bSA9PT0gc3luYzJ2aXNpYmxlW2ldKXtcbi8vICAgICAgIHZhciBmb3VuZCA9IHRydWU7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICBpZihmb3VuZD09PWZhbHNlKXtcbi8vICAgICBpZihudW0+c3luYzJ2aXNpYmxlW3N5bmMydmlzaWJsZS5sZW5ndGgtMV0pe1xuLy8gICAgICAgb3dsTmF2cy50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtIC0gc3luYzJ2aXNpYmxlLmxlbmd0aCsyKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgaWYobnVtIC0gMSA9PT0gLTEpe1xuLy8gICAgICAgICBudW0gPSAwO1xuLy8gICAgICAgfVxuLy8gICAgICAgb3dsTmF2cy50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtKTtcbi8vICAgICB9XG4vLyAgIH0gZWxzZSBpZihudW0gPT09IHN5bmMydmlzaWJsZVtzeW5jMnZpc2libGUubGVuZ3RoLTFdKXtcbi8vICAgICBvd2xOYXZzLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBzeW5jMnZpc2libGVbMV0pXG4vLyAgIH0gZWxzZSBpZihudW0gPT09IHN5bmMydmlzaWJsZVswXSl7XG4vLyAgICAgb3dsTmF2cy50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtLTEpXG4vLyAgIH1cbi8vIH1cblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBTQ1JFRU5TSE9UUyBTTElERVIgKioqKioqKioqKioqKioqKioqKiovXG4vLyB2YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyICgnLnN3aXBlci1jb250YWluZXInLCB7XG4vLyAgICBzbGlkZXNQZXJWaWV3OiAzLFxuLy8gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4vLyAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiB0cnVlLFxuLy8gICAgcGFnaW5hdGlvbjogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4vLyAgICBzcGFjZUJldHdlZW46IDkwLFxuLy8gICAgbmV4dEJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuLy8gICAgcHJldkJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLXByZXYnXG4vLyB9KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBMSUdIVEJPWCAqKioqKioqKioqKioqKioqKioqKi9cbi8vICQoJy5saWdodGJveCcpLm5pdm9MaWdodGJveCgpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIFJFQ0VOVCBCTE9HIC0gR0FMTEVSWSBJTUFHRVMgKioqKioqKioqKioqKioqKioqKiovXG4vLyAkKCcucG9zdC1pbWFnZS1nYWxsZXJ5IC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4vLyAgICBzaW5nbGVJdGVtOiB0cnVlXG4vLyB9KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBTQ1JPTEwgUkVWRUFMICoqKioqKioqKioqKioqKioqKioqL1xuLyogd2luZG93LnNyID0gbmV3IHNjcm9sbFJldmVhbCgpOyAqL1xuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBTVkcgSU5KRUNUSU9OICoqKioqKioqKioqKioqKioqKioqL1xuLy8gRWxlbWVudHMgdG8gaW5qZWN0XG4gdmFyIG15U1ZHc1RvSW5qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmluamVjdC1tZScpO1xuXG4gLy8gRG8gdGhlIGluamVjdGlvblxuIFNWR0luamVjdG9yKG15U1ZHc1RvSW5qZWN0KTtcblxufSk7XG4iXX0=
