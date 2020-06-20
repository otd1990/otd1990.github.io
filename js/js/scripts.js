const swiperContent = [{
    year: 2005,
    date: "June 2005",
    eventName: "Art Foundation End of Year Show- Buckingham Chilterns University College",
    bgImg: "norfolklandscapes/nflandscapes_0"
  },
  {
    year: 2006,
    date: "June 2006",
    eventName: "HND Fine Art Exhibition- Sussex Art House, Brighton",
    bgImg: "women/women_2"
  },
  {
    year: 2007,
    date: "June 2007",
    eventName: "Fine Art HND Final Show - City College Brighton and Hove",
    bgImg: "petportraits/pets_1"
  }
];

$(document).ready(function() {

wheresHeader();

  $(window).scroll(function(){
    wheresHeader();
  });

  let galleryTwo = '';
  galleries.map(function(gallery, imdex){
    galleryLower = gallery.galleryName.toLowerCase();
    galleryLower = galleryLower.replace(" ","");
    counter = 0;
    if(imdex == 0){
      displayOptions = 'style="display:grid;"';
      active = 'active';
    }else{
      displayOptions = 'style="display:none;"';
      active = 'hidden';
    }

    if(gallery.images.length <= 3){
      galleryTwo += '<div id="'+galleryLower+'_1" class="gallery__grid gallery__grid--1 '+active+'" '+displayOptions+'>';
    }else{
      galleryTwo += '<div id="'+galleryLower+'_1" class="gallery__grid gallery__grid--2 '+active+'" '+displayOptions+'>';
    }
      gallery.images.map(function(img, index){
        // console.log(img);
        if(index == 0){
          galleryTwo += '<div class="primary gallery__img--'+index+'">';
        }else{
          // if(gallery.images.length <= 3){
            galleryTwo += '<div class="secondary gallery__img--'+index+'">';
          // }else{
          //   galleryTwo += '<div class="column-xs-12 column-md-4 gallery__img--'+index+'">';
          // }
        }

          classToShow = 'd-none';

          if(gallery.images.indexOf(img) <= 8){
            classToShow = 'd-inline-block';
          }
          galleryTwo += '<div class="gallery__img-container '+classToShow+'" data-section="'+galleryLower+'">';
          galleryTwo += '<a class="lightbox__wrap" href="images/'+galleryLower+'/' + img.name + '.jpg" data-lightbox="example-set" data-title="'+img.description+'">';
          galleryTwo += '<img  class="gallery__img__1" class="lightbox__wrap--img" src="images/'+galleryLower+'/' + img.name + '.jpg" alt="' + img.name + '"/>';
          if(index == 0){
          galleryTwo += '<div class="overlay">';
          galleryTwo +=   '<div class="overlay__text">';
          galleryTwo +=       '<div class="overlay__text--heading"><h2>'+gallery.galleryName+'</h2></div>';
          galleryTwo +=       '<div class="overlay__text--desc"><p>View All</p></div>';
          galleryTwo +=   '</div>';
          galleryTwo += '</div>';
        }
          galleryTwo += '</a>';
          galleryTwo += '</div>';
          galleryTwo += '</div>'
      });
      galleryTwo += '</div>';
      $('#galleryWrapper').html(galleryTwo);
      // galleryTwo = '';
  });


  // let swiperHtml = '';
  //
  // $.each(swiperContent, function(index, obj) {
  //   swiperHtml += '<div class="swiper-slide" style="background-image: url(img/' + obj.bgImg + '.jpg);" data-year="' + obj.year + '">';
  //   swiperHtml += '<div class="swiper-slide-content">';
  //   swiperHtml += '<span class="timeline-year">' + obj.year + '</span>';
  //   swiperHtml += '<h4 class="timeline-title">' + obj.date + '</h4>';
  //   swiperHtml += '<p class="timeline-text">' + obj.eventName + '</p>';
  //   swiperHtml += '</div>';
  //   swiperHtml += '</div>';
  //   // swiperHtml += '</div>';
  // });
  //
  // $('.swiper-wrapper').html(swiperHtml);
  //
  // // Code By Webdevtrick ( https://webdevtrick.com )
  // var timelineSwiper = new Swiper('.timeline .swiper-container', {
  //   direction: 'vertical',
  //   loop: false,
  //   speed: 1600,
  //   pagination: '.swiper-pagination',
  //   paginationBulletRender: function(swiper, index, className) {
  //     var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
  //     return '<span class="' + className + '">' + year + '</span>';
  //   },
  //   paginationClickable: true,
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev',
  //   breakpoints: {
  //     768: {
  //       direction: 'horizontal',
  //     }
  //   }
  // });

  const date = new Date();

  $('#year').html(date.getFullYear());

  // //Handles scroll affect
  // (function($) {
  //
  //   /**
  //    * Copyright 2012, Digital Fusion
  //    * Licensed under the MIT license.
  //    * http://teamdf.com/jquery-plugins/license/
  //    *
  //    * @author Sam Sehnert
  //    * @desc A small plugin that checks whether elements are within
  //    *     the user visible viewport of a web browser.
  //    *     only accounts for vertical position, not horizontal.
  //    */
  //
  //   $.fn.visible = function(partial) {
  //
  //     var $t = $(this),
  //       $w = $(window),
  //       viewTop = $w.scrollTop(),
  //       viewBottom = viewTop + $w.height(),
  //       _top = $t.offset().top,
  //       _bottom = _top + $t.height(),
  //       compareTop = partial === true ? _bottom : _top,
  //       compareBottom = partial === true ? _top : _bottom;
  //
  //     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  //
  //   };
  //
  // })(jQuery);

  // $(window).scroll(function(event) {
  //
  //   $(".slide-up").each(function(i, el) {
  //     var el = $(el);
  //     if (el.visible(true)) {
  //       el.addClass("come-in");
  //     }
  //   });
  //
  // });

  // var win = $(window);
  // var allMods = $(".slide-up");
  //
  // // Already visible modules
  // allMods.each(function(i, el) {
  //   var el = $(el);
  //   if (el.visible(true)) {
  //     el.addClass("already-visible");
  //   }
  // });

  // win.scroll(function(event) {
  //
  //   allMods.each(function(i, el) {
  //     var el = $(el);
  //     if (el.visible(true)) {
  //       el.addClass("come-in");
  //     }
  //   });
  //
  // });

//smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});

function showGallery(gallery){
  // console.log(gallery);

  currentGall = '';

  $('.gallery__grid').each(function(){
    if($(this).hasClass('active')){
      currentGall = $(this).attr('id');
    }
  });

  // console.log(currentGall);

  $('#'+currentGall).addClass('hidden').removeClass('active');
  $('#'+currentGall).fadeOut();

  $('#'+gallery+'_1').addClass('active').removeClass('hidden');
  $('#'+gallery+'_1').fadeIn();
}

function wheresHeader(){


      var vertScrollPos = window.scrollY;
      var headerHeight = document.getElementById('headerSection').offsetHeight;

      if(vertScrollPos > headerHeight){
        // headerHeight.children[0].classList.add('bg-dark');
        document.getElementById('headerSection').children[0].classList.add('bg-dark');
      }else{
        document.getElementById('headerSection').children[0].classList.remove('bg-dark');
      }
}
