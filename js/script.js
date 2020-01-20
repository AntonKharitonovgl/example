 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

 $(document).ready(function(){

   $(".menu__icon")
       .click(
          function()
          {
            $(".menu__mobile").toggle(600);
           }
        );
 
});