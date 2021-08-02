$(function () {
	'use strict';
	// Navbar Scroll 
    // $(window).scroll(function () {
    //     var scroll = $(this).scrollTop();
    //     console.log(scroll)
    //     if (scroll > 200) {
    //         $('.nav').addClass('navbar-fixed-top');
    //     } else {
    //         $('.nav').removeClass('navbar-fixed-top');
    //     }
    // });

    $(document).on('click','.search_btn',function(){
      $('.search_group').addClass('slide');
    })

    $(document).on('click','.search_group i.fa-close',function(){
      $('.search_group').removeClass('slide');
    })

    //Smooth Scroll To Div 
    $('#nav_links li a').click(function (e) {
      if($(this).attr('data-value')){
        e.preventDefault();
      }
      console.log('test')
      $('html, body').animate({
          scrollTop: $('#' + $(this).data('value')).offset().top - 60
      }, 1000);
  });

  // To change view style
  $(document).on('click','.views li',function(){
    var type = $(this).attr('class');
    localStorage.setItem('view',type);
    $(this).addClass('active').siblings().removeClass('active');
    if(type === 'grid'){
      $('.items').removeClass('list').addClass('grid');
    }else{
      $('.items').removeClass('grid').addClass('list');
    }
  })
  $(document).ready(function(){
    var view = localStorage.getItem('view');
    console.log(view)
    if(view != null && view != '' && view != 'undefined'){
      if(view === 'grid'){
        $('.views li.grid').addClass('active');
        $('.views li.list').removeClass('active');
      }else{
        $('.views li.list').addClass('active');
        $('.views li.grid').removeClass('active');
      }
      $('.items').removeClass('grid').addClass(view);
    }
  })
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

setInterval(function(){
    showSlides(slideIndex += -1);
}, 5000000)

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}