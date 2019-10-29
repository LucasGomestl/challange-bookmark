$(function(){
    $('.toggle').click(function(){
        $('.page-header').toggleClass('-mobile')
        $('.svg').toggleClass('-white')
        $('.toggle').toggleClass('-open')
        $('.main-wrapper').toggleClass('-margin')
    })

    $(window).on('resize', function(){
        if(window.innerWidth > 830){
            $('.page-header').removeClass('-mobile')
            $('.svg').removeClass('-white')
            $('.toggle').removeClass('-open')
            $('.main-wrapper').removeClass('-margin')
        }
    });
});