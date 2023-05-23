$(document).ready(function(){


    //main-1
    $('.bugar-menu li a').click(function(){
        $(this).addClass('active-2').parent().siblings().find('a').removeClass('active-2');
    });
    //main-3
    $('.main-3 .search .pure-form button').click(function(){
        $(this).toggleClass('active-3');
        $('.main-3 .search .pure-form input').toggleClass('active-4');
    });
    $('.cart button').click(function(){
        $(this).toggleClass('active-5');
    });

    //main-4
    $(' .main-4 .goods button').click(function(){
        $(this).toggleClass('active-6');
        
    });
});