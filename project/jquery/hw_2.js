$(document).ready(function(){

    $('.top a').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},700);
    });

    $('.menu >li > a').click(function(event){
        event.preventDefault();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();

        $(this).toggleClass('active1');
        $(this).parent().siblings().find('a').removeClass('active1');  
    });

  
});

