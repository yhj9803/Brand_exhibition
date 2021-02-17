const characterBtn = document.querySelector(".trigger_character_area button");

const phaise_1 = document.querySelector("#phaise1");
const phaise_2 = document.querySelector("#phaise2");

const character = document.querySelector(".trigger_character_area");

/*의미상 구분을 확실히 하기 위해 paint와 write, hide와 erase 로 구분하였음.*/
const menuOpenBtn = document.querySelector(".open_menu_btn");
const menuCloseBtn = document.querySelector(".close_menu_btn");
const menu = document.querySelector(".nav_gnb");
/* */ 
const loginBtn = document.querySelector(".login_btn");
const closeLogin = document.querySelector(".close_login_btn");
const loginPop = document.querySelector(".login_pop");

function Click () {alert("click")};
function closeLoginPop() {
    Click();
    loginPop.classList.remove("open_login_pop");
}
function openLoginPop() {
    Click();
    loginPop.classList.add("open_login_pop");
    closeLogin.addEventListener("click", closeLoginPop);
}
loginBtn.addEventListener("click", openLoginPop);
/* */
var activeBrandName = document.querySelector(".active_slide img");
console.log(activeBrandName.getAttribute("alt"));
console.log(typeof(activeBrandName.getAttribute("alt")));
const brandName = document.querySelector("#brandName");
brandName.innerText = activeBrandName.getAttribute("alt");
console.log(brandName.innerText);
/*                  */

const slide = document.querySelector(".slide");
const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");
const slides = document.querySelectorAll(".banner_image_box .slide");
console.log(slides);
console.log(typeof(slides));
let slideArr= [ ] ;
console.log(slideArr);
slideArr = Array.from(slides);
console.log(slides);
console.log(slideArr);



function slideHandler() {
    let handling = slideArr.shift();
    slideArr[1].classList.remove("active_slide");
    slideArr[2].classList.add("active_slide");
    slideArr[4].classList.add("prepared_slide");
    handling.classList.remove("prepared_slide");
    slideArr.push(handling);

    

    activeBrandName = document.querySelector(".active_slide img");
    brandName.innerText = activeBrandName.getAttribute("alt");
}

setInterval(slideHandler, 8000);

/*                      */

/*                */
function openMenu() {
    menuOpenBtn.classList.add("hide_open_menu_btn");
    menu.classList.add("open_menu");
    menu.classList.remove("close_menu");
}

function closeMenu(){
    menuOpenBtn.classList.remove("hide_open_menu_btn");
    menu.classList.add("close_menu");
    menu.classList.remove("open_menu");
    
}

function writePhaise_2() {
    phaise_2.classList.add("write_phaise_2");
}


function hideCharacter() {
    character.classList.add("hide_character");
}
function eraseCharacter() {
    character.classList.add("erase_character");
}

function movePhaise_1(){
    phaise_1.classList.add("move_phaise_1");
}
function erasePhaise_1() {
    phaise_1.classList.add("erase_phaise_1");
}

function clickCharacter() {

    writePhaise_2();

    movePhaise_1();

    hideCharacter();


    setTimeout(eraseCharacter, 5000);
    setTimeout(erasePhaise_1, 5000);

}




function BtnActiveChecker() { /*클릭 확인*/
    alert("click");
}

function readyFunction() {
    characterBtn.addEventListener("click", BtnActiveChecker);
    menuOpenBtn.addEventListener("click", BtnActiveChecker);
    menuCloseBtn.addEventListener("click", BtnActiveChecker);

    /*클릭 확인*/


    characterBtn.addEventListener("click", clickCharacter);
    menuOpenBtn.addEventListener("click", openMenu);
    menuCloseBtn.addEventListener("click", closeMenu);
}

function init() {
    readyFunction();
}

init();