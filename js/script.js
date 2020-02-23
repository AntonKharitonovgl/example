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


var modal = document.querySelector("#modal"),
        modalOverlay = document.querySelector("#modal-overlay"),
        closeButton = document.querySelector("#close-button"),
        openButton = document.querySelector("#open-button");

  closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });

  openButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });
