$(document).ready(function(){

    $('.menu li').click(function(){
        $(this).addClass('active-1').siblings().removeClass('active-1');
    });
});
