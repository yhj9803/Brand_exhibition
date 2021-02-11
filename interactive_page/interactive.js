const characterBtn = document.querySelector(".trigger_character_area button");

const phaise_1 = document.querySelector("#phaise1");
const phaise_2 = document.querySelector("#phaise2");

const character = document.querySelector(".trigger_character_area");

/*의미상 구분을 확실히 하기 위해 paint와 write, hide와 erase 로 구분하였음.*/
const menuOpenBtn = document.querySelector(".open_menu_btn");
const menuCloseBtn = document.querySelector(".close_menu_btn");
const menu = document.querySelector(".nav_gnb");

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

    setTimeout(eraseCharacter, 3000);
    setTimeout(erasePhaise_1, 3000);

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