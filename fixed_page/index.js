const menuBtn = document.querySelector(".menu_btn");
const menuArea = document.querySelector(".global_menu_area");
const menuExitBtn = document.querySelector(".exit_menu_btn");

const categoryBtn = document.querySelector(".category_btn");
const categoryPop = document.querySelector(".category_pop");
const exitCategoryPop = document.querySelector("#exit_category_pop");

const aboutUsBtn = document.querySelector(".about_us_btn");
const aboutUsPop = document.querySelector(".about_us_pop");
const exitAboutUsPop = document.querySelector("#exit_about_us_pop");

const accountBtn = document.querySelector(".account_btn");
const accountPop = document.querySelector(".account_pop");
const exitAccountPop = document.querySelector("#exit_account_pop");


function clickExitCategoryBtn(){
    categoryPop.classList.remove("show_category_pop");
}

function clickCategoryBtn(){
    categoryPop.classList.add("show_category_pop");
    exitCategoryPop.addEventListener("click", clickExitCategoryBtn);
}


function clickExitAboutUsBtn(){
    aboutUsPop.classList.remove("show_about_us_pop");
}

function clickAboutUsBtn(){
    aboutUsPop.classList.add("show_about_us_pop");
    exitAboutUsPop.addEventListener("click", clickExitAboutUsBtn);
}


function clickExitAccountBtn(){
    accountPop.classList.remove("show_account_pop");
}

function clickAccountBtn(){
    accountPop.classList.add("show_account_pop");
    exitAccountPop.addEventListener("click", clickExitAccountBtn);
}




function menuAreaAction(){
    menuArea.classList.remove("menu_area_exit");
    menuArea.classList.add("global_menu_action");
}

function clickMenuBtn(){
    menuBtn.classList.add("menu_btn_hide");
}

function menuAreaExit(){
    menuArea.classList.remove("global_menu_action");
    menuArea.classList.add("menu_area_exit");
    menuBtn.classList.remove("menu_btn_hide");
}

function readyMenu(){
    menuBtn.classList.remove("menu_btn_hide");
    menuArea.classList.remove("menu_area_exit");
    menuArea.classList.remove("global_menu_action");
    menuBtn.addEventListener("click", clickMenuBtn);
    menuBtn.addEventListener("click", menuAreaAction);
    menuExitBtn.addEventListener("click", menuAreaExit);
    categoryBtn.addEventListener("click", clickCategoryBtn);
    aboutUsBtn.addEventListener("click", clickAboutUsBtn);
    accountBtn.addEventListener("click", clickAccountBtn);

}



function init() {
    console.log("start");
    readyMenu();
}

init();