$(window).scroll(function () {
    const scrollPos = $(window).scrollTop();
    const extensionCardsPos = $('.extension-cards').offset().top  - window.innerHeight + 100;
    
    if(extensionCardsPos < scrollPos){
        $('.extension-cards').css('visibility', 'visible')
        $('.extension-cards').children().addClass('animated fadeInDown')
    }
});    