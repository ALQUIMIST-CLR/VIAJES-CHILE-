
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

// Codigo tooltip para redes sociales

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
