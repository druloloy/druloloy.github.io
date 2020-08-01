var burger = $("#burger-nav");
var mobile_nav = $("#mobile-nav");
var close = $("#close");

var bgheader = $("#welcome-background");
var tooltip = document.querySelectorAll(".project-tooltip")

// pages
var default_page = $("#welcome-section");

//links
var whoami_link = $("#link-whoami");
var projects_link = $("#link-projects");
var nav_links = document.querySelectorAll(".links-mobile");

$(document).ready(function(){

    bgheader.css({
        "opacity":"1",
        "background-position":"right"
    });

    document.addEventListener('mousemove',toolTip, false);

    function toolTip(e){
        for(var i = tooltip.length;i--;){
            tooltip[i].style.left = e.pageX + 'px';
            tooltip[i].style.top = e.pageY + 'px';
        }
    }
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

