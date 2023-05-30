$(document).ready(function(){

    $('.menu li').click(function(){
        $(this).toggleClass('active-1');
    });

    //aside
    $('.mobile-link').click(function(event){
        $('.aside').toggleClass('open');
        $('.dark').toggleClass('close');
    });
});