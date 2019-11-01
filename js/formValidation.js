$(function(){
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

