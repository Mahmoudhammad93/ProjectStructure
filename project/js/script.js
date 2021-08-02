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
      e.preventDefault();
      console.log('test')
      $('html, body').animate({
          scrollTop: $('#' + $(this).data('value')).offset().top - 80
      }, 1000);
  });
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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