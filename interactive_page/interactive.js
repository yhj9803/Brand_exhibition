function Click () {alert("click")};

const characterBtn = document.querySelector(".trigger_character_area button");
const character = document.querySelector(".trigger_character_area");

const phaise_1 = document.querySelector("#phaise1");
const phaise_2 = document.querySelector("#phaise2");

const menuOpenBtn = document.querySelector(".open_menu_btn");
const menuCloseBtn = document.querySelector(".close_menu_btn");

const menu = document.querySelector(".nav_gnb");
const loginBtn = document.querySelector(".login_btn");
const closeLogin = document.querySelector(".close_login_btn");
const loginPop = document.querySelector(".login_pop");

/*                                                    background effect                                 */

const backgroundEffect = document.querySelector(".background_effect");
function activeBackgroundEffect() {
    backgroundEffect.classList.add("active_background_effect");
}
function inactiveBackgroundEffect() {
    backgroundEffect.classList.remove("active_background_effect");
}

/*                                                background effect       end                       */

/*---------------------------------Login----------------------------------------*/

function closeLoginPop() {
    loginPop.classList.remove("open_login_pop");
    inactiveBackgroundEffect()
}
function openLoginPop() {
    loginPop.classList.add("open_login_pop");
    activeBackgroundEffect();
    closeLogin.addEventListener("click", closeLoginPop);
}

/* ---------------------------------Login end ------------------------------------ */

/*                                                  mainbanner                                                  */
var activeBrandName = document.querySelector(".active_slide img");
const brandName = document.querySelector("#brandName");
const bannderSlides = document.querySelectorAll(".banner_image_box .slide");
let slideArr= [ ] ;

brandName.innerText = activeBrandName.getAttribute("alt");

slideArr = Array.from(bannderSlides);

function slideHandler() {
    let slideHandling = slideArr.shift();

    slideArr[1].classList.remove("active_slide");
    slideArr[2].classList.add("active_slide");
    slideArr[4].classList.add("prepared_slide");
    slideHandling.classList.remove("prepared_slide");

    slideArr.push(slideHandling);

    activeBrandName = document.querySelector(".active_slide img");
    brandName.innerText = activeBrandName.getAttribute("alt");
}
setInterval(slideHandler, 8000);
/*                                                      mainbanner   end                                    */









/*                                 메인 캐러셀                                                      */
const leftMoveBtn = document.querySelector(".left_btn");
const rightMoveBtn = document.querySelector(".right_btn");
const carousel = document.getElementById("carousel");
const card = document.querySelectorAll(".card"); 
const cardArr = Array.from(card);
let carouselState = -598;
let centerIndex = 3;

function after () {
    carousel.style.transition = "none";

    carouselState -=398;
    carousel.style.left = carouselState +"px";
    for (i=0 ; i<6 ; i++) {
        cardArr[i].classList.remove("active_card");
    }

   cardArr[2].classList.remove("center_card");

   leftMoveBtn.addEventListener("click", clickLeft);
   rightMoveBtn.addEventListener("click", clickRight);
}
function afafter(){
    carousel.style.transition = "none";

    carouselState -=398;
    carousel.style.left = carouselState +"px";
    cardArr[centerIndex-3].classList.add("active_card");

    leftMoveBtn.addEventListener("click", clickLeft);
    rightMoveBtn.addEventListener("click", clickRight);
}

function clickLeft() {
    leftMoveBtn.removeEventListener("click", clickLeft);
    rightMoveBtn.removeEventListener("click", clickRight);

    carousel.style.transition = "inherit";

    if (centerIndex == 3) {
        carouselState +=398;
        carousel.style.left = carouselState +"px";

        cardArr[3].classList.remove("center_card");
        cardArr[2].classList.add("center_card");
        card[9].classList.add("center_card");
        for (i=0 ; i<7 ; i++) {
            cardArr[i+6].classList.add("active_card");
        }
        centerIndex = 9
        setTimeout(after, 500);
    }
    else {
        carouselState +=398;
        carousel.style.left = carouselState +"px";
        cardArr[centerIndex].classList.remove("center_card");
        cardArr[centerIndex-1].classList.add("center_card");
        cardArr[centerIndex+3].classList.remove("active_card");
        setTimeout(afafter, 500); // 함수가 실행되는 시기는 밑의 결과가 적용된 후이므로 -1된 채로 적용됨.
        centerIndex -= 1;
    }
}

function before () {
    carousel.style.transition = "none";

    carouselState +=398;
    carousel.style.left = carouselState +"px";
    for (i=0 ; i<7 ; i++) {
        cardArr[i].classList.add("active_card");
    }

    for (i=0 ; i<7 ; i++) {
        cardArr[i+7].classList.remove("active_card");
    }
    cardArr[10].classList.remove("center_card");
   leftMoveBtn.addEventListener("click", clickLeft);
   rightMoveBtn.addEventListener("click", clickRight);
}
function bebefore () {
    carousel.style.transition = "none";

    carouselState +=398;
    carousel.style.left = carouselState +"px";
    cardArr[centerIndex-3].classList.remove("active_card");

    leftMoveBtn.addEventListener("click", clickLeft);
    rightMoveBtn.addEventListener("click", clickRight);
}
function clickRight() {
    leftMoveBtn.removeEventListener("click", clickLeft);
    rightMoveBtn.removeEventListener("click", clickRight);

    carousel.style.transition = "inherit";
    
    if (centerIndex == 9) {
        carouselState -=398;
        carousel.style.left = carouselState +"px";

        cardArr[9].classList.remove("center_card");
        cardArr[10].classList.add("center_card");
        cardArr[3].classList.add("center_card");
        centerIndex = 3;
        setTimeout(before, 300);
    }
    else {
        carouselState -=398;
        carousel.style.left = carouselState +"px";

        cardArr[centerIndex].classList.remove("center_card");
        cardArr[centerIndex+1].classList.add("center_card");
        cardArr[centerIndex+3].classList.add("active_card");
        
        setTimeout(bebefore, 300); // 함수가 실행되는 시기는 밑의 결과가 적용된 후이므로 +1된 채로 적용됨.
        centerIndex += 1;
    }
}

leftMoveBtn.addEventListener("click", clickLeft);
rightMoveBtn.addEventListener("click", clickRight);


/*                                 메인 캐러셀    end                                                */



/* -------------------------------- 메뉴 ----------------------------- */
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
/*--------------------------------메뉴 end-----------------------------*/


/*-------------------------------캐릭터 트리거 ---------------------------------*/
/*의미상 구분을 확실히 하기 위해 paint와 write, hide와 erase 로 구분*/
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




    // 실수에서 배운점이 자바스크립트의 동작 방식 이해
    // 일단 함수가 실행되면 함수가 완료되고나서 아래의 콘솔 로그 함수 실행 확인
}
/*--------------------------캐릭터 트리거 end----------------------------------*/

/*                                  Btn event                                                        */

function readyFunction() {
    characterBtn.addEventListener("click", clickCharacter);
    menuOpenBtn.addEventListener("click", openMenu);
    menuCloseBtn.addEventListener("click", closeMenu);
    loginBtn.addEventListener("click", openLoginPop);
}
/*                                  Btn event      end                                            */
function init() {
    readyFunction();
}

init();