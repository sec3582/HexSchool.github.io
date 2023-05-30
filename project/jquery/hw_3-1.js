$(document).ready(function(){

    $('.menu li a').click(function(){
        $(this).toggleClass('active-1');
    });

    //aside
    $('.mobile-link').click(function(event){
        $('.aside').toggleClass('open');
        $('.dark').toggleClass('close');
    });
});