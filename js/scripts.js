const galleyImgs = ["lady", "scene-1", "pencil-dog-1", "pencil-dog-2", "landscape-1", "landscape-2", "landscape-bw-1", "landscape-3", "pencil-dog-3", "landscape-4", "child-1", "child-2"]

const galleries = [
  {
    id: 1,
    galleryName: 'Animals',
    images: ['animals_1','animals_2','animals_3']
  },
  {
    id: 2,
    galleryName: 'Commissions',
    images: ['commissions_1','commissions_2','commissions_3','commissions_4','commissions_5','commissions_6','commissions_7','commissions_8','commissions_9','commissions_10']
  },
  {
    id: 3,
    galleryName: 'Landscapes',
    images: ['landscapes_1','landscapes_2','landscapes_3','landscapes_4','landscapes_5','landscapes_6','landscapes_7','landscapes_8','landscapes_9','landscapes_10','landscapes_11','landscapes_12','landscapes_13','landscapes_14','landscapes_15','landscapes_16','landscapes_17','landscapes_18','landscapes_19','landscapes_20','landscapes_21','landscapes_22','landscapes_23','landscapes_24','landscapes_25']
  },
  {
    id: 4,
    galleryName: 'Norfolk Landscapes',
    images: ['nflandscapes_0','nflandscapes_1','nflandscapes_2','nflandscapes_3']
  },
  {
    id: 5,
    galleryName: 'Pet Portraits',
    images: ['pets_1','pets_2','pets_3','pets_4','pets_5']
  },
  {
    id: 6,
    galleryName: 'Portraits',
    images: ['portraits_1','portraits_2','portraits_3','portraits_4']
  },
  {
    id: 7,
    galleryName: 'Pre Raphaelites',
    images: ['preraphaelites_1','preraphaelites_2','preraphaelites_3']
  },
  {
    id: 8,
    galleryName: 'Women',
    images: ['women_1','women_2','women_3','women_4','women_5','women_6']
  }
];

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

          if(gallery.images.indexOf(img) <= 6){
            classToShow = 'd-inline-block';
          }
          galleryTwo += '<div class="gallery__img-container '+classToShow+'" data-section="'+galleryLower+'">';
          galleryTwo += '<a class="lightbox__wrap" href="img/'+galleryLower+'/' + img + '.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">';
          galleryTwo += '<img  class="gallery__img__1" class="lightbox__wrap--img" src="img/'+galleryLower+'/' + img + '.jpg" alt="' + img + '"/>';
          if(index == 0){
          galleryTwo += '<div class="overlay">';
          galleryTwo +=   '<div class="overlay__text">';
          galleryTwo +=       '<div class="overlay__text--heading"><h2>'+gallery.galleryName+'</h2></div>';
          galleryTwo +=       '<div class="overlay__text--desc"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ad odit excepturi assumenda, id quod.</p></div>';
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



  // let galleryHtml = '';
  // //Go through gallery object
  // galleries.map(function(gallery, imdex){
  //   galleryLower = gallery.galleryName.toLowerCase();
  //   galleryLower = galleryLower.replace(" ","");
  //   counter = 0;
  //   //Go through image array in gallery obj
  //     gallery.images.map(function(img, index){
  //         if(index == 0){
  //           galleryHtml += '<div class="column-xs-12">';
  //         }else{
  //           if(gallery.images.length <= 3){
  //             galleryHtml += '<div class="column-xs-12 column-md-6">';
  //           }else{
  //             galleryHtml += '<div class="column-xs-12 column-md-4">';
  //           }
  //         }
  //
  //         // console.log();
  //
  //         classToShow = 'd-none';
  //
  //         if(gallery.images.indexOf(img) <= 3){
  //           classToShow = 'd-inline-block';
  //         }
  //         galleryHtml += '<figure class="gallery__img-container '+classToShow+'" data-section="'+galleryLower+'">';
  //         galleryHtml += '<a class="lightbox__wrap" href="img/'+galleryLower+'/' + img + '.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">';
  //         galleryHtml += '<img class="gallery__img__1" src="img/'+galleryLower+'/' + img + '.jpg" alt="' + img + '" />';
  //         galleryHtml += '</a>';
  //
  //
  //       if(index == 0){
  //         galleryHtml += '<figcaption class="gallery__img-content">';
  //         galleryHtml += '<h2 class="title">Smart Watch</h2>';
  //         galleryHtml += '<h3 class="category">Showcase</h3>';
  //         galleryHtml += '</figcaption>';
  //         galleryHtml += '<span class="gallery__img-content-hover">';
  //         galleryHtml += '<h2 class="title">Smart Watch</h2>';
  //         galleryHtml += '<h3 class="category">Showcase</h3>';
  //         galleryHtml += '</span>';
  //         galleryHtml += '</figure>';
  //       }
  //
  //       galleryHtml += '</div>';
  //
  //       counter = counter + 1;
  //
  //     });
  //     $('#'+galleryLower).html(galleryHtml);
  //     galleryHtml = '';
  // });

  // imgGallery = '';
  // galleyImgs.map(function(img, index) {
  //   imgGallery += '<div class="m-1 slide-up">';
  //   imgGallery += '<a class="lightbox__wrap" href="img/gallery/' + img + '.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">';
  //   imgGallery += '<img class="lightbox__wrap--img" src="img/gallery/' + img + '.jpg" alt="' + img + '"/>';
  //   imgGallery += '</a>';
  //   imgGallery += '</div>';
  // });
  //
  // $('.section-gallery__gallery').html(imgGallery);

  let swiperHtml = '';

  $.each(swiperContent, function(index, obj) {
    swiperHtml += '<div class="swiper-slide" style="background-image: url(img/' + obj.bgImg + '.jpg);" data-year="' + obj.year + '">';
    swiperHtml += '<div class="swiper-slide-content">';
    swiperHtml += '<span class="timeline-year">' + obj.year + '</span>';
    swiperHtml += '<h4 class="timeline-title">' + obj.date + '</h4>';
    swiperHtml += '<p class="timeline-text">' + obj.eventName + '</p>';
    swiperHtml += '</div>';
    swiperHtml += '</div>';
    // swiperHtml += '</div>';
  });

  $('.swiper-wrapper').html(swiperHtml);

  // Code By Webdevtrick ( https://webdevtrick.com )
  var timelineSwiper = new Swiper('.timeline .swiper-container', {
    direction: 'vertical',
    loop: false,
    speed: 1600,
    pagination: '.swiper-pagination',
    paginationBulletRender: function(swiper, index, className) {
      var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      768: {
        direction: 'horizontal',
      }
    }
  });

  const date = new Date();

  $('#year').html(date.getFullYear());

  //Handles scroll affect
  (function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

      var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

  })(jQuery);

  $(window).scroll(function(event) {

    $(".slide-up").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });

  });

  var win = $(window);
  var allMods = $(".slide-up");

  // Already visible modules
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.scroll(function(event) {

    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });

  });

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

  console.log(currentGall);

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
