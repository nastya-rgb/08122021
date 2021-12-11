"use strict";

// header scrolling
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");

    header.classList.toggle("header_scrolling", window.scrollY > 0);
});

// menu
const iconMenu = document.querySelector(".header__menu-switcher ");
const menuBody = document.querySelector(".h-menu");
if (iconMenu){
    iconMenu.addEventListener("click",function(){
        document.body.classList.toggle("lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}