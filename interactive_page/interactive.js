const textBtn = document.querySelector(".trigger_text_area button");
const characterBtn = document.querySelector(".trigger_character_area button");

const phaise_1 = document.querySelector("#phaise1");
const phaise_2 = document.querySelector("#phaise2");

const character = document.querySelector(".trigger_character_area");
const text = document.querySelector(".trigger_text_area");
const logo = document.querySelector(".trigger_logo_area");
/*의미상 구분을 확실히 하기 위해 paint와 write, hide와 erase 로 구분하였음.*/
const menuOpenBtn = document.querySelector(".open_menu_btn");
const menuCloseBtn = document.querySelector(".close_menu_btn");
const menu = document.querySelector(".nav_gnb");

function openMenu(){
    menuOpenBtn.classList.add("hide_open_menu_btn");
    menu.classList.add("open_menu");
    menu.classList.remove("close_menu");
}

function closeMenu(){
    menuOpenBtn.classList.remove("hide_open_menu_btn");
    menu.classList.add("close_menu");
    menu.classList.remove("open_menu");
    
}


function writePhaise_2(){
    phaise_2.classList.add("write_phaise_2");
}
function writeLogo(){
    logo.classList.add("write_logo");
}

function moveCharacter(){
    character.classList.add("move_character");
}

function movePhaise_1(){
    phaise_1.classList.add("move_phaise_1");
}

function hideCharacter(){
    character.classList.add("hide_character");
}

function hideText(){
    text.classList.add("hide_text");
}

function hidePhaise_1(){
    phaise_1.classList.add("hide_phaise_1");
}

function eraseCharacter(){
    character.classList.add("erase_character");
}
function eraseText(){
    text.classList.add("erase_text");
}
function erasePhaise_1(){
    phaise_1.classList.add("erase_phaise_1");
}
function paintLogo(){
    logo.classList.add("paint_logo");
}

function clickCharacter(){

    writePhaise_2(); 
    writeLogo();
    
    moveCharacter();    //    2s
    movePhaise_1();     //    2s 

    setTimeout(hideCharacter, 2000);    //1s
    setTimeout(hideText, 2000);            // 1s 

    
    setTimeout(eraseCharacter, 3000);
    setTimeout(eraseText, 3000);
    setTimeout(erasePhaise_1, 2000);

    setTimeout(paintLogo, 2500);

}




function BtnActiveChecker(){                                                  /*클릭 확인*/
    alert("click");
}
function readyFunction(){
    characterBtn.addEventListener("click", BtnActiveChecker);
    menuOpenBtn .addEventListener("click", BtnActiveChecker);
    menuCloseBtn.addEventListener("click", BtnActiveChecker);
/*클릭 확인*/ 


    characterBtn.addEventListener("click", clickCharacter);
    menuOpenBtn .addEventListener("click", openMenu);
    menuCloseBtn.addEventListener("click", closeMenu);
}

function init(){
    readyFunction();
}

init();