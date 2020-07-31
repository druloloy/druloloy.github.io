var burger = $("#burger-nav");
var mobile_nav = $("#mobile-nav");
var close = $("#close");

var bgheader = $("#welcome-background");

$(document).ready(function(){


    bgheader.css({
        "opacity":"1",
        "background-position":"right"
    });









    burger.click(function(){
        burger.hide();
        close.show();
        mobile_nav.css("height","100vh");
    });

    close.click(function(){
        burger.show();
        close.hide();
        mobile_nav.css({
            "transition":"300ms ease-in-out",
            "height":"0"
        });
    });
});

