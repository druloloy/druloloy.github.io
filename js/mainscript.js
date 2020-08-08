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

    alert("Test: Project Section ERROR_IN_PROJECT_TILES");
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

    function switchPage(){
        var current_page, new_page,curr;

        $(".links-mobile").on('click', function(){
            var attr = this.id();
            console.log(attr);
            switch(attr){
                case 'link-whoami':
                    main_page.addClass("active-page");
                    whoami_link.addClass("active-link");
                    

                    projects_link.removeClass("active-link");
                    project_page.removeClass("active-page");
                    contacts_link.removeClass("active-link");
                    contacts_page.removeClass("active-page");

                    closeNav();
                    break;
                case 'link-projects':
                    project_page.addClass("active-page");
                    project_link.addClass("active-link");
                    

                    whoami_link.removeClass("active-link");
                    main_page.removeClass("active-page");
                    contacts_link.removeClass("active-link");
                    contacts_page.removeClass("active-page");

                    closeNav();
                    break;
            }
        });


    function disablePages(exempt){

    }
        
    }
});

