
$(window).on('scroll', function(){
  var scroll_depth = $(window).scrollTop();
    buffer = 500;
    
    $('.overlay').each(function(){
        var this_offset = $(this).offset().top;
        
        if (scroll_depth + buffer > this_offset){
            $(this).addClass('visible');
            // code to show text in a popover goes here!
            console.log($(this).data("text"))
        } else {
            $(this).removeClass('visible');
        }
    })
})


$(document).ready(function(){
       $(window).bind('scroll', function() {
       var navHeight = $( window ).height() - 50;
             if ($(window).scrollTop() > navHeight) {
                 $('.navbar').addClass('fixed');
             }
             else {
                 $('.navbar').removeClass('fixed');
             };
        });
   };
