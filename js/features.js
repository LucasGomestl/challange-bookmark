$(function(){
    const navUnderline = $('.navUnderline');
    const tab = $('.tabs-component').children();
    const featuresContent = $('.features-content');
    const illustrations = featuresContent.children('.features-illustration-container');


    illustrations.addClass('animated slideInLeft');
    illustrations.css('animation-duration', '.8s')

    function transitions (selectedTab, selectedContent, navUnderlinePosition){
        //Move the navUnderline that is only visible on desktop layout
        navUnderline.css('left', navUnderlinePosition);

        //On mobile layout, each tab has a border bottom. Only the selected one is visible
        tab.map(tabItem => tab[tabItem].classList.remove('-active'));
        selectedTab.classList.add('-active');

        //Hide all features contents and then show the selected one
        featuresContent.map(feature => featuresContent[feature].classList.remove('-show'));
        selectedContent.classList.add('-show');
    }

    //Calls transitions function to each tab
    tab[0].addEventListener('click', () => transitions(tab[0], featuresContent[0], '0%'));
    tab[1].addEventListener('click', () => transitions(tab[1], featuresContent[1], '33.33%'));
    tab[2].addEventListener('click', () => transitions(tab[2], featuresContent[2], '66.66%'));

    //When the page is load, verify if the window width is smaller than 1100px
    //if true, the first tab will be active
    if(window.innerWidth < 1100){
        $(tab[0].classList.add('-active'));
    }
});
