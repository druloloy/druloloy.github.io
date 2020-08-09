
var burger = $("#burger-nav");
var mobile_nav = $("#mobile-nav");
var close = $("#close");

var bgheader = $("#welcome-background");
// pages
var main_page = $("#welcome-section");
var project_page = $("#projects");
var contacts_page = $("#contacts");
//links
var whoami_link = $("#link-whoami");
var projects_link = $("#link-projects");
var contacts_link = $("#link-contacts");

var nav_links = document.querySelector(".links-mobile");

$(document).ready(function(){
        bgheader.css({
            "opacity":"1",
            "background-position":"right"
        });
   
    function openNav(){
        burger.hide();
        close.show();
        mobile_nav.css("height","100vh");
    }
    function closeNav(){
        burger.show();
        close.hide();
        mobile_nav.css({
            "transition":"300ms ease-in-out",
            "height":"0"
        });
    }
    burger.click(openNav);
    close.click(closeNav);
    
});