$(document).ready(function(){


    //main-1-menu
    $('.bugar-menu li a').click(function(){
        $(this).addClass('active-2').parent().siblings().find('a').removeClass('active-2');
    });
    //main-3-search
    $('.main-3-search .search .pure-form button').click(function(){
        $(this).toggleClass('active-3');
        $('.main-3-search .search .pure-form input').toggleClass('active-4');
    });
    $('.cart button').click(function(){
        $(this).toggleClass('active-5');
    });

    //main-4-goods
    $(' .main-4-goods .goods button').click(function(){
        $(this).toggleClass('active-6');
        
    });

    //heart點擊後變實心
    $('.heart a').click(function(event){
        event.preventDefault();
        $(this).toggleClass('active-7')
    })
});