$(function(){
    const navUnderline = $('.navUnderline');
    const button0 = $('.tabs-component>li[data-key=0]');
    const button1 = $('.tabs-component>li[data-key=1]');
    const button2 = $('.tabs-component>li[data-key=2]');

    const features0 = $('.features-content[data-key=0]')
    const features1 = $('.features-content[data-key=1]')
    const features2 = $('.features-content[data-key=2]')

    button0.click(function(){
        //Move the nav underline
        navUnderline.css('left', '0%');

        //Show selected content and hide others
        features0.addClass('-show')
        features1.removeClass('-show')
        features2.removeClass('-show')

        //Make the tab active and unselect others
        $(button0.addClass('-active'))
        $(button1.removeClass('-active'))
        $(button2.removeClass('-active'))
    
    });
    button1.click(function(){
        navUnderline.css('left', '33.33%');

        features1.addClass('-show')
        features2.removeClass('-show')
        features0.removeClass('-show')
        
        $(button1.addClass('-active'))
        $(button2.removeClass('-active'))
        $(button0.removeClass('-active'))
        
       
    });
    button2.click(function(){
        
        navUnderline.css('left', '66.66%');

        features2.addClass('-show')
        features0.removeClass('-show')
        features1.removeClass('-show')
    
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
