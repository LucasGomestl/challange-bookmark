$(function(){
    $('.toggle').click(function(){
        $('.page-header').toggleClass('-mobile')
        $('.svg').toggleClass('-white')
        $('.toggle').toggleClass('-open')
        $('.main-wrapper').toggleClass('-margin')
    })
});