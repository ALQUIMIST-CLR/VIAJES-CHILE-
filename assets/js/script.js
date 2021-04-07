// Código método polyfill para smoothscroll del navegador y secciones
let buttons = document.querySelectorAll('a');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget.getAttribute('href');

      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Código para inicio de carusel con Javascript
$(document).ready(function(){
      // Activate Carousel
   $("#carouselExampleControls").carousel();
      // Enable Carousel Indicators
   $(".carousel-item active").click(function(){
       $("#carouselExampleControls").carousel(0);
   });
   $(".carousel-item 1").click(function(){
       $("#carouselExampleControls").carousel(1);
   });
   $(".carousel-item 2").click(function(){
       $("#carouselExampleControls").carousel(2);
   });
      // Enable Carousel Controls
   $(".carousel-control-prev").click(function(){
     $("#carouselExampleControls").carousel("prev");
  });
   $(".carousel-control-next").click(function(){
     $("#carouselExampleControls").carousel("next");
   });
});

// Código para activar tooltip a favicons
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
