

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
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});
