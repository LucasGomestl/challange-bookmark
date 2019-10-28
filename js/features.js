$(function(){
    const underline = $('.underline');
    const button0 = $('.tabs-component>li[data-key=0]');
    const button1 = $('.tabs-component>li[data-key=1]');
    const button2 = $('.tabs-component>li[data-key=2]');

    button0.click(function(){
        underline.css('left', '0%')
    })
    button1.click(function(){
        underline.css('left', '33.3%')
    })
    button2.click(function(){
        underline.css('left', '66.66%')
    })

})
