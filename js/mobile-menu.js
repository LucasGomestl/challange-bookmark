$(function(){
    $('.toggle').click(function(){
        $('.page-header').toggleClass('-mobile')
        $('.page-menu').toggleClass('-active')
        $('.svg').toggleClass('-white')
        $('.toggle').toggleClass('-open')
    })
});