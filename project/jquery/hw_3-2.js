$(document).ready(function(){

    $('.menu li a').click(function(){
        $(this).addClass('active-1').parent().siblings().find('a').removeClass('active-1');
    });
});