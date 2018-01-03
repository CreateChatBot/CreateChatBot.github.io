(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/cosy/Documents/02Projects/CreateChatBot.github.io/src/scripts/main.js":[function(require,module,exports){
'use strict';

// import SVGInjector from '../../bower_components/svg-injector-2/svg-injector.js';

$(document).ready(function () {
   "use strict";

   /******************** NAVBAR ANIMATION  ********************/

   if (matchMedia('only screen and (min-width: 768px)').matches) {
      var scrollPos = $(this).scrollTop(),
          animationEndPos = 150,
          //At the point background add
      animationProp = $('.navbar-top'); //Wraper

      if (scrollPos > animationEndPos) {
         animationProp.addClass('scrolling');
      }

      $(document).scroll(function () {
         scrollPos = $(this).scrollTop();

         if (scrollPos > animationEndPos) {
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

   if (matchMedia('only screen and (min-width: 768px)').matches) {
      var scrollPos = $(this).scrollTop();
      var leftNav = $('.navbar-fixed-left');

      $('#navbar-left-switch').on('click', function (event) {
         event.preventDefault();
         /* Act on the event */
         leftNav.addClass('toggle-nav');
      });

      leftNav.on('click', 'li', function (event) {
         /* Act on the event */
         leftNav.removeClass('toggle-nav');
      });

      $(document).scroll(function () {
         if (scrollPos > 400) {
            leftNav.removeClass('toggle-nav');
         }
      });
   }

   /******************** NAVBAR COLLAPSE ON CLICK ********************/
   // $('.navbar-nav').on('click', 'a', function(event) {
   //     Act on the event 
   //    $('.navbar-collapse').collapse('hide');
   // });


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

   // Replaces all existing SVG images on the DOM with inline SVGs: 


   var mySVGsToInject = document.querySelectorAll('img.inject-me');

   // Do the injection
   SVGInjector(mySVGsToInject);
});

},{}]},{},["/home/cosy/Documents/02Projects/CreateChatBot.github.io/src/scripts/main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7QUFDN0I7O0FBRUE7O0FBQ0EsT0FBSyxXQUFZLG9DQUFaLEVBQW1ELE9BQXhELEVBQWtFO0FBQy9ELFVBQUksWUFBWSxFQUFFLElBQUYsRUFBUSxTQUFSLEVBQWhCO0FBQUEsVUFDRyxrQkFBa0IsR0FEckI7QUFBQSxVQUMwQjtBQUN2QixzQkFBZ0IsRUFBRSxhQUFGLENBRm5CLENBRCtELENBRzFCOztBQUVyQyxVQUFHLFlBQVksZUFBZixFQUFnQztBQUM3Qix1QkFBYyxRQUFkLENBQXVCLFdBQXZCO0FBQ0Y7O0FBRUQsUUFBRSxRQUFGLEVBQVksTUFBWixDQUFtQixZQUFXO0FBQzNCLHFCQUFZLEVBQUUsSUFBRixFQUFRLFNBQVIsRUFBWjs7QUFFQSxhQUFJLFlBQVksZUFBaEIsRUFBa0M7QUFDL0IsMEJBQWMsUUFBZCxDQUF1QixXQUF2QjtBQUNGLFVBRkQsTUFFTztBQUNKLDBCQUFjLFdBQWQsQ0FBMEIsV0FBMUI7QUFDRjtBQUNILE9BUkQ7QUFTRjs7QUFHRDs7Ozs7O0FBTUEsT0FBSyxXQUFZLG9DQUFaLEVBQW1ELE9BQXhELEVBQWtFO0FBQy9ELFVBQUksWUFBWSxFQUFFLElBQUYsRUFBUSxTQUFSLEVBQWhCO0FBQ0EsVUFBSSxVQUFVLEVBQUUsb0JBQUYsQ0FBZDs7QUFFQSxRQUFFLHFCQUFGLEVBQXlCLEVBQXpCLENBQTRCLE9BQTVCLEVBQXFDLFVBQVMsS0FBVCxFQUFnQjtBQUNsRCxlQUFNLGNBQU47QUFDQTtBQUNBLGlCQUFRLFFBQVIsQ0FBaUIsWUFBakI7QUFDRixPQUpEOztBQU1BLGNBQVEsRUFBUixDQUFXLE9BQVgsRUFBb0IsSUFBcEIsRUFBMEIsVUFBUyxLQUFULEVBQWdCO0FBQ3ZDO0FBQ0EsaUJBQVEsV0FBUixDQUFvQixZQUFwQjtBQUNGLE9BSEQ7O0FBS0EsUUFBRSxRQUFGLEVBQVksTUFBWixDQUFtQixZQUFXO0FBQzNCLGFBQUksWUFBWSxHQUFoQixFQUFzQjtBQUNuQixvQkFBUSxXQUFSLENBQW9CLFlBQXBCO0FBQ0Y7QUFDSCxPQUpEO0FBS0Y7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlBO0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBOztBQUdBOztBQUdBOzs7QUFHQyxPQUFJLGlCQUFpQixTQUFTLGdCQUFULENBQTBCLGVBQTFCLENBQXJCOztBQUVDO0FBQ0EsZUFBWSxjQUFaO0FBRUQsQ0E5S0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IFNWR0luamVjdG9yIGZyb20gJy4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvc3ZnLWluamVjdG9yLTIvc3ZnLWluamVjdG9yLmpzJztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cInVzZSBzdHJpY3RcIjtcblxuLyoqKioqKioqKioqKioqKioqKioqIE5BVkJBUiBBTklNQVRJT04gICoqKioqKioqKioqKioqKioqKioqL1xuaWYgKCBtYXRjaE1lZGlhKCAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KScgKS5tYXRjaGVzICkge1xuICAgdmFyIHNjcm9sbFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCksXG4gICAgICBhbmltYXRpb25FbmRQb3MgPSAxNTAsIC8vQXQgdGhlIHBvaW50IGJhY2tncm91bmQgYWRkXG4gICAgICBhbmltYXRpb25Qcm9wID0gJCgnLm5hdmJhci10b3AnKTsgLy9XcmFwZXJcblxuICAgaWYoc2Nyb2xsUG9zID4gYW5pbWF0aW9uRW5kUG9zKSB7XG4gICAgICBhbmltYXRpb25Qcm9wLmFkZENsYXNzKCdzY3JvbGxpbmcnKTtcbiAgIH1cblxuICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgc2Nyb2xsUG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgICAgaWYoIHNjcm9sbFBvcyA+IGFuaW1hdGlvbkVuZFBvcyApIHtcbiAgICAgICAgIGFuaW1hdGlvblByb3AuYWRkQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGFuaW1hdGlvblByb3AucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgfVxuICAgfSk7XG59XG5cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IE5BVkJBUiBTVFlMRSBGSVhFRCBMRUZUXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuaWYgKCBtYXRjaE1lZGlhKCAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KScgKS5tYXRjaGVzICkge1xuICAgdmFyIHNjcm9sbFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG4gICB2YXIgbGVmdE5hdiA9ICQoJy5uYXZiYXItZml4ZWQtbGVmdCcpO1xuXG4gICAkKCcjbmF2YmFyLWxlZnQtc3dpdGNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG4gICAgICBsZWZ0TmF2LmFkZENsYXNzKCd0b2dnbGUtbmF2Jyk7XG4gICB9KTtcblxuICAgbGVmdE5hdi5vbignY2xpY2snLCAnbGknLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuICAgICAgbGVmdE5hdi5yZW1vdmVDbGFzcygndG9nZ2xlLW5hdicpO1xuICAgfSk7XG5cbiAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgIGlmKCBzY3JvbGxQb3MgPiA0MDAgKSB7XG4gICAgICAgICBsZWZ0TmF2LnJlbW92ZUNsYXNzKCd0b2dnbGUtbmF2Jyk7XG4gICAgICB9XG4gICB9KTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBOQVZCQVIgQ09MTEFQU0UgT04gQ0xJQ0sgKioqKioqKioqKioqKioqKioqKiovXG4vLyAkKCcubmF2YmFyLW5hdicpLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBBY3Qgb24gdGhlIGV2ZW50IFxuLy8gICAgJCgnLm5hdmJhci1jb2xsYXBzZScpLmNvbGxhcHNlKCdoaWRlJyk7XG4vLyB9KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBURVNUSU1PTklBTCBTWU5DIFdJVEggQ0xJRU5UUyAqKioqKioqKioqKioqKioqKioqKi9cbi8vIHZhciBvd2xOYXZzID0gJChcIiN0ZXN0aW1vbmlhbC1wb3RyYWl0c1wiKTsgLy8gY2xpZW50J3MgbWVzc2FnZVxuLy8gdmFyIG93bENvbnRlbnRzID0gJChcIiN0ZXN0aW1vbmlhbC1jb250ZW50c1wiKTsgLy8gY2xpZW50J3MgYXZhdGFyXG4vL1xuLy8gb3dsQ29udGVudHMub3dsQ2Fyb3VzZWwoe1xuLy8gICAgc2luZ2xlSXRlbSA6IHRydWUsXG4vLyAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuLy8gICAgbmF2aWdhdGlvblRleHQ6IFsnPGltZyBzcmM9XCJpY29ucy9hbmdsZS1sZWZ0LnN2Z1wiIGNsYXNzPVwiaW5qZWN0LW1lIGljb24tbGVmdFwiPicsICc8aW1nIHNyYz1cImljb25zL2FuZ2xlLXJpZ2h0LnN2Z1wiIGNsYXNzPVwiaW5qZWN0LW1lIGljb24tcmlnaHRcIj4nXSxcbi8vICAgIHBhZ2luYXRpb246IGZhbHNlLFxuLy8gICAgdHJhbnNpdGlvblN0eWxlOiAnZ29Eb3duJyxcbi8vICAgIGFmdGVyQWN0aW9uIDogc3luY1Bvc2l0aW9uLFxuLy8gICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlIDogMjAwLFxuLy8gICAgYXV0b1BsYXk6IDUwMDBcbi8vIH0pO1xuLy9cbi8vXG4vLyBvd2xOYXZzLm93bENhcm91c2VsKHtcbi8vICAgIHBhZ2luYXRpb246ZmFsc2UsXG4vLyAgICByZXNwb25zaXZlUmVmcmVzaFJhdGUgOiAxMDAsXG4vLyAgICBhZnRlckluaXQgOiBmdW5jdGlvbihlbCl7XG4vLyAgICAgZWwuZmluZChcIi5pdGVtXCIpLmVxKDApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuLy8gICAgfVxuLy8gfSk7XG4vL1xuLy8gZnVuY3Rpb24gc3luY1Bvc2l0aW9uKGVsKXtcbi8vICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50SXRlbTtcbi8vICAgICQob3dsTmF2cylcbi8vICAgICAgIC5maW5kKFwiLml0ZW1cIilcbi8vICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuLy8gICAgICAgLmVxKGN1cnJlbnQpXG4vLyAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbi8vXG4vLyAgICBpZigkKG93bE5hdnMpLmRhdGEoXCJvd2xDYXJvdXNlbFwiKSAhPT0gdW5kZWZpbmVkKXtcbi8vICAgICAgIGNlbnRlcihjdXJyZW50KVxuLy8gICAgfVxuLy8gfVxuLy9cbi8vICQob3dsTmF2cykub24oXCJjbGlja1wiLCBcIi5vd2wtaXRlbVwiLCBmdW5jdGlvbihlKXtcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICB2YXIgbnVtYmVyID0gJCh0aGlzKS5kYXRhKFwib3dsSXRlbVwiKTtcbi8vICAgb3dsQ29udGVudHMudHJpZ2dlcihcIm93bC5nb1RvXCIsbnVtYmVyKTtcbi8vIH0pO1xuLy9cbi8vIGZ1bmN0aW9uIGNlbnRlcihudW1iZXIpe1xuLy8gICB2YXIgc3luYzJ2aXNpYmxlID0gb3dsTmF2cy5kYXRhKFwib3dsQ2Fyb3VzZWxcIikub3dsLnZpc2libGVJdGVtcztcbi8vICAgdmFyIG51bSA9IG51bWJlcjtcbi8vICAgdmFyIGZvdW5kID0gZmFsc2U7XG4vLyAgIGZvcih2YXIgaSBpbiBzeW5jMnZpc2libGUpe1xuLy8gICAgIGlmKG51bSA9PT0gc3luYzJ2aXNpYmxlW2ldKXtcbi8vICAgICAgIHZhciBmb3VuZCA9IHRydWU7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICBpZihmb3VuZD09PWZhbHNlKXtcbi8vICAgICBpZihudW0+c3luYzJ2aXNpYmxlW3N5bmMydmlzaWJsZS5sZW5ndGgtMV0pe1xuLy8gICAgICAgb3dsTmF2cy50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtIC0gc3luYzJ2aXNpYmxlLmxlbmd0aCsyKVxuLy8gICAgIH1lbHNle1xuLy8gICAgICAgaWYobnVtIC0gMSA9PT0gLTEpe1xuLy8gICAgICAgICBudW0gPSAwO1xuLy8gICAgICAgfVxuLy8gICAgICAgb3dsTmF2cy50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtKTtcbi8vICAgICB9XG4vLyAgIH0gZWxzZSBpZihudW0gPT09IHN5bmMydmlzaWJsZVtzeW5jMnZpc2libGUubGVuZ3RoLTFdKXtcbi8vICAgICBvd2xOYXZzLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBzeW5jMnZpc2libGVbMV0pXG4vLyAgIH0gZWxzZSBpZihudW0gPT09IHN5bmMydmlzaWJsZVswXSl7XG4vLyAgICAgb3dsTmF2cy50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtLTEpXG4vLyAgIH1cbi8vIH1cblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBTQ1JFRU5TSE9UUyBTTElERVIgKioqKioqKioqKioqKioqKioqKiovXG4vLyB2YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyICgnLnN3aXBlci1jb250YWluZXInLCB7XG4vLyAgICBzbGlkZXNQZXJWaWV3OiAzLFxuLy8gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4vLyAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiB0cnVlLFxuLy8gICAgcGFnaW5hdGlvbjogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4vLyAgICBzcGFjZUJldHdlZW46IDkwLFxuLy8gICAgbmV4dEJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuLy8gICAgcHJldkJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLXByZXYnXG4vLyB9KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBMSUdIVEJPWCAqKioqKioqKioqKioqKioqKioqKi9cbi8vICQoJy5saWdodGJveCcpLm5pdm9MaWdodGJveCgpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIFJFQ0VOVCBCTE9HIC0gR0FMTEVSWSBJTUFHRVMgKioqKioqKioqKioqKioqKioqKiovXG4vLyAkKCcucG9zdC1pbWFnZS1nYWxsZXJ5IC5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4vLyAgICBzaW5nbGVJdGVtOiB0cnVlXG4vLyB9KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBTQ1JPTEwgUkVWRUFMICoqKioqKioqKioqKioqKioqKioqL1xuLyogd2luZG93LnNyID0gbmV3IHNjcm9sbFJldmVhbCgpOyAqL1xuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBTVkcgSU5KRUNUSU9OICoqKioqKioqKioqKioqKioqKioqL1xuXG5cbi8vIFJlcGxhY2VzIGFsbCBleGlzdGluZyBTVkcgaW1hZ2VzIG9uIHRoZSBET00gd2l0aCBpbmxpbmUgU1ZHczogXG5cblxuIHZhciBteVNWR3NUb0luamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5pbmplY3QtbWUnKTtcblxuICAvLyBEbyB0aGUgaW5qZWN0aW9uXG4gIFNWR0luamVjdG9yKG15U1ZHc1RvSW5qZWN0KTtcblxufSk7XG4iXX0=
