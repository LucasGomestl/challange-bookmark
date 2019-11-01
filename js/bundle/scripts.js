$(window).scroll(function () {
    const scrollPos = $(window).scrollTop();
    const extensionCardsPos = $('.extension-cards').offset().top  - window.innerHeight + 100;
    
    if(extensionCardsPos < scrollPos){
        $('.extension-cards').css('visibility', 'visible');
        $('.extension-cards').children().addClass('animated fadeInDown');
    }
});    ;$(function(){
    const questions = $('.question-component');

    questions.map(questionItem => {
        questions[questionItem].addEventListener('click', () => {
            let answer = $(questions[questionItem]).children('.answer');
            let icon = $(questions[questionItem]).children('.icon');
            
            answer.toggle("fast");
            icon.toggleClass('-rotate');
        });
    });
});;$(function(){
    const navUnderline = $('.navUnderline');
    const tab = $('.tabs-component').children();
    const featuresContent = $('.features-content');
    const illustrations = featuresContent.children('.features-illustration-container');


    illustrations.addClass('animated slideInLeft');
    illustrations.css('animation-duration', '.8s');

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
;$(function(){
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function invalidForm(){
        email.css("border", "1.5px solid hsl(0, 94%, 66%)");
        iconError.css("visibility","visible");

        feedback.css({
            "background-color": "hsl(0, 94%, 66%)",
            "margin-top": "-3px"
        });
    }
    
    function validForm(){
        feedback.text(message.validEmail);
        email.css("border", "1.5px solid hsl(141 ,100%, 36%)");
        iconError.css("visibility","hidden");

        feedback.css({
            "background-color": "hsl(141 ,100%, 36%)",
            "margin-top": "-3px"
        });
    }
    
    const btnSubmit = $('.submit'),
          iconError = $(".iconError"),
          feedback  = $(".feedback"),
          email = $(".email-form .input"),
          message = {
              empty: "Oh, don't forget to enter your email",
              invalidEmail: "Whoops, make sures it's an email",
              validEmail: "Your email was submited"
          };
          
    btnSubmit.click(function(){
        let emailValue = email.val();
    
        if(emailValue.length == 0){
            feedback.text(message.empty);
            invalidForm();

        }else if(!validateEmail(emailValue)){
            feedback.text(message.invalidEmail);
            invalidForm();
            
        }else{
            validForm();
        }
        return false
    });
});

;$(function(){
    $('.toggle').click(function(){
        $('.page-header').toggleClass('-mobile');
        $('.svg').toggleClass('-white');
        $('.toggle').toggleClass('-open');
        $('.main-wrapper').toggleClass('-margin');
    });

    $(window).on('resize', function(){
        if(window.innerWidth > 830){
            $('.page-header').removeClass('-mobile');
            $('.svg').removeClass('-white');
            $('.toggle').removeClass('-open');
            $('.main-wrapper').removeClass('-margin');
        }
    });
});;$(window).scroll(function(){const e=$(window).scrollTop();$(".extension-cards").offset().top-window.innerHeight+100<e&&($(".extension-cards").css("visibility","visible"),$(".extension-cards").children().addClass("animated fadeInDown"))}),$(function(){const e=$(".question-component");e.map(i=>{e[i].addEventListener("click",()=>{let s=$(e[i]).children(".answer"),n=$(e[i]).children(".icon");s.toggle("fast"),n.toggleClass("-rotate")})})}),$(function(){const e=$(".navUnderline"),i=$(".tabs-component").children(),s=$(".features-content"),n=s.children(".features-illustration-container");function t(n,t,o){e.css("left",o),i.map(e=>i[e].classList.remove("-active")),n.classList.add("-active"),s.map(e=>s[e].classList.remove("-show")),t.classList.add("-show")}n.addClass("animated slideInLeft"),n.css("animation-duration",".8s"),i[0].addEventListener("click",()=>t(i[0],s[0],"0%")),i[1].addEventListener("click",()=>t(i[1],s[1],"33.33%")),i[2].addEventListener("click",()=>t(i[2],s[2],"66.66%")),window.innerWidth<1100&&$(i[0].classList.add("-active"))}),$(function(){function e(){t.css("border","1.5px solid hsl(0, 94%, 66%)"),s.css("visibility","visible"),n.css({"background-color":"hsl(0, 94%, 66%)","margin-top":"-3px"})}const i=$(".submit"),s=$(".iconError"),n=$(".feedback"),t=$(".email-form .input"),o={empty:"Oh, don't forget to enter your email",invalidEmail:"Whoops, make sures it's an email",validEmail:"Your email was submited"};i.click(function(){let i=t.val();return 0==i.length?(n.text(o.empty),e()):!function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(i)?(n.text(o.invalidEmail),e()):(n.text(o.validEmail),t.css("border","1.5px solid hsl(141 ,100%, 36%)"),s.css("visibility","hidden"),n.css({"background-color":"hsl(141 ,100%, 36%)","margin-top":"-3px"})),!1})}),$(function(){$(".toggle").click(function(){$(".page-header").toggleClass("-mobile"),$(".svg").toggleClass("-white"),$(".toggle").toggleClass("-open"),$(".main-wrapper").toggleClass("-margin")}),$(window).on("resize",function(){window.innerWidth>830&&($(".page-header").removeClass("-mobile"),$(".svg").removeClass("-white"),$(".toggle").removeClass("-open"),$(".main-wrapper").removeClass("-margin"))})}),$(window).scroll(function(){const e=$(window).scrollTop();$(".extension-cards").offset().top-window.innerHeight+100<e&&($(".extension-cards").css("visibility","visible"),$(".extension-cards").children().addClass("animated fadeInDown"))}),$(function(){const e=$(".question-component");e.map(i=>{e[i].addEventListener("click",()=>{let s=$(e[i]).children(".answer"),n=$(e[i]).children(".icon");s.toggle("fast"),n.toggleClass("-rotate")})})}),$(function(){const e=$(".navUnderline"),i=$(".tabs-component").children(),s=$(".features-content"),n=s.children(".features-illustration-container");function t(n,t,o){e.css("left",o),i.map(e=>i[e].classList.remove("-active")),n.classList.add("-active"),s.map(e=>s[e].classList.remove("-show")),t.classList.add("-show")}n.addClass("animated slideInLeft"),n.css("animation-duration",".8s"),i[0].addEventListener("click",()=>t(i[0],s[0],"0%")),i[1].addEventListener("click",()=>t(i[1],s[1],"33.33%")),i[2].addEventListener("click",()=>t(i[2],s[2],"66.66%")),window.innerWidth<1100&&$(i[0].classList.add("-active"))}),$(function(){function e(){t.css("border","1.5px solid hsl(0, 94%, 66%)"),s.css("visibility","visible"),n.css({"background-color":"hsl(0, 94%, 66%)","margin-top":"-3px"})}const i=$(".submit"),s=$(".iconError"),n=$(".feedback"),t=$(".email-form .input"),o={empty:"Oh, don't forget to enter your email",invalidEmail:"Whoops, make sures it's an email",validEmail:"Your email was submited"};i.click(function(){let i=t.val();return 0==i.length?(n.text(o.empty),e()):!function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(i)?(n.text(o.invalidEmail),e()):(n.text(o.validEmail),t.css("border","1.5px solid hsl(141 ,100%, 36%)"),s.css("visibility","hidden"),n.css({"background-color":"hsl(141 ,100%, 36%)","margin-top":"-3px"})),!1})}),$(function(){$(".toggle").click(function(){$(".page-header").toggleClass("-mobile"),$(".svg").toggleClass("-white"),$(".toggle").toggleClass("-open"),$(".main-wrapper").toggleClass("-margin")}),$(window).on("resize",function(){window.innerWidth>830&&($(".page-header").removeClass("-mobile"),$(".svg").removeClass("-white"),$(".toggle").removeClass("-open"),$(".main-wrapper").removeClass("-margin"))})}),$(window).scroll(function(){const e=$(window).scrollTop();$(".extension-cards").offset().top-window.innerHeight+100<e&&($(".extension-cards").css("visibility","visible"),$(".extension-cards").children().addClass("animated fadeInDown"))}),$(function(){const e=$(".question-component");e.map(i=>{e[i].addEventListener("click",()=>{let s=$(e[i]).children(".answer"),n=$(e[i]).children(".icon");s.toggle("fast"),n.toggleClass("-rotate")})})}),$(function(){const e=$(".navUnderline"),i=$(".tabs-component").children(),s=$(".features-content"),n=s.children(".features-illustration-container");function t(n,t,o){e.css("left",o),i.map(e=>i[e].classList.remove("-active")),n.classList.add("-active"),s.map(e=>s[e].classList.remove("-show")),t.classList.add("-show")}n.addClass("animated slideInLeft"),n.css("animation-duration",".8s"),i[0].addEventListener("click",()=>t(i[0],s[0],"0%")),i[1].addEventListener("click",()=>t(i[1],s[1],"33.33%")),i[2].addEventListener("click",()=>t(i[2],s[2],"66.66%")),window.innerWidth<1100&&$(i[0].classList.add("-active"))}),$(function(){function e(){t.css("border","1.5px solid hsl(0, 94%, 66%)"),s.css("visibility","visible"),n.css({"background-color":"hsl(0, 94%, 66%)","margin-top":"-3px"})}const i=$(".submit"),s=$(".iconError"),n=$(".feedback"),t=$(".email-form .input"),o={empty:"Oh, don't forget to enter your email",invalidEmail:"Whoops, make sures it's an email",validEmail:"Your email was submited"};i.click(function(){let i=t.val();return 0==i.length?(n.text(o.empty),e()):!function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(i)?(n.text(o.invalidEmail),e()):(n.text(o.validEmail),t.css("border","1.5px solid hsl(141 ,100%, 36%)"),s.css("visibility","hidden"),n.css({"background-color":"hsl(141 ,100%, 36%)","margin-top":"-3px"})),!1})}),$(function(){$(".toggle").click(function(){$(".page-header").toggleClass("-mobile"),$(".svg").toggleClass("-white"),$(".toggle").toggleClass("-open"),$(".main-wrapper").toggleClass("-margin")}),$(window).on("resize",function(){window.innerWidth>830&&($(".page-header").removeClass("-mobile"),$(".svg").removeClass("-white"),$(".toggle").removeClass("-open"),$(".main-wrapper").removeClass("-margin"))})});