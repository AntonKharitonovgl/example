 $(document).ready(function(){
   $(".menu__icon")
       .click(
          function()
          {
          	 $(".menu__links").toggle(600);
           }
        );
   });


$(function(){
  $('.w-slider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});


$(".example").vegas({
    slides: [
        { src: "images/piccoffee1.jpg" },
        { src: "images/piccoffee2.jpg" },
        { src: "images/piccoffee3.jpeg" }
        
    ]
});