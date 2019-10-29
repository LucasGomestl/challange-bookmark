$(function(){
    const navUnderline = $('.navUnderline');
    const button0 = $('.tabs-component>li[data-key=0]');
    const button1 = $('.tabs-component>li[data-key=1]');
    const button2 = $('.tabs-component>li[data-key=2]');

    button0.click(function(){
        
        navUnderline.css('left', '0%');
    
        $(button0.addClass('-active'))
        $(button1.removeClass('-active'))
        $(button2.removeClass('-active'))
    
    });
    button1.click(function(){
        navUnderline.css('left', '33.33%');
        
        $(button1.addClass('-active'))
        $(button2.removeClass('-active'))
        $(button0.removeClass('-active'))
        
       
    });
    button2.click(function(){
        
        navUnderline.css('left', '66.66%');
    
        $(button2.addClass('-active'))
        $(button0.removeClass('-active'))
        $(button1.removeClass('-active'))
    
    });

    //When the page is load, verify if the window width is less than 1100px
    //if it is, the first button will be active
    if(window.innerWidth < 1100){
        $(button0.addClass('-active'))
    }
});
