
(function() {
 
    "use strict";
   
    var toggles = document.querySelectorAll(".c-hamburger");
   
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
   
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
  
  var button = $('.c-hamburger');
  var menu = $('.mobileMenu');
    button.on('click', function(){
      
        if(menu.hasClass('hideMenu')){
          menu.removeClass('hideMenu')
        }
        else{
          menu.addClass('hideMenu')
        }
  
  
     
    })
  
  
  $(window).resize(function(){
    if($(this).width() < 1112){
      menu.addClass('hideMenu');
       $('.c-hamburger').removeClass('is-active');
    }
  });
        
    
  var bestItem = $('.bestEquipment__items__item')
  var bestItemOverlay = $('.bestEquipment__items__item__overlay');
  var childrenItem = $(this).children('.bestEquipment__items__item__overlay')
  bestItem.hover(function(){
  
   if($(this).children('.bestEquipment__items__item__overlay').hasClass('activeOverlay')){
    $(this).children().removeClass('activeOverlay')
   
   }
   else{
    $(this).children().addClass('activeOverlay');
    
   }

 })

 

  
 $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  pogination:true,
  nav : true,
  navText: ["",""],
  autoplay:true,
  autoplayTimeout: 3000,
  autoplayHoverPause:true,
 
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})

//Слайдер видео
$('.video__slider__items').owlCarousel({
  items:1,
  merge:true,
  loop:true,
  margin:10,
  video:true,
  lazyLoad:true,
  center:true,
  autoplay:false,
  responsive:{
      480:{
          items:2
      },
      600:{
          items:3
      }
  }
})

$('.owl-video-play-icon').on('click', function(){
  $(this).parent().parent().find('.video__overlay').remove();
})

$('.showRightPanle').on('click', function(){
  if($('.rightNav').hasClass('showRightPanel')){
    $('.rightNav').removeClass('showRightPanel')
    $(this).removeClass('showButton')
    $(this).children('button').text('Показать меню')
  }
  else{
    $('.rightNav').addClass('showRightPanel')
    $(this).addClass('showButton')
    $(this).children('button').text('Скрыть меню')
  }
  
})

$('#phone').on('click', function(){
  if($('.overlayForm').hasClass('hide')){
    $('.overlayForm').removeClass('hide')
  }
  else{
    $('.overlayForm').addClass('hide')
  }
})

$('.overlayFormIn').on('click', function(){
  $('.overlayForm').addClass('hide')
})
   
  })();