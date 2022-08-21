const cacheKey = 'DARKMODE'
let state = true;

const bgTarget = document.getElementsByClassName("bg-target");
const txtTarget = document.getElementsByClassName("txt-target");
const companyLogo = document.querySelector("#company-logo");
const darkButton = document.querySelector(".dark-mode");
const lightButton = document.querySelector(".light-mode");



function checkDarkMode(){
  if(state === false){
    for(let i = 0; i < bgTarget.length; i++){
      bgTarget[i].classList.add("dark-bg-on");
    }

    for(i = 0; i < txtTarget.length; i++){
      txtTarget[i].classList.add("light-txt-on");
    }

    companyLogo.setAttribute("src", "/assets/images/logo-white.svg");
    state = true;
    darkButton.classList.add("invisible");
  }else{
    for(let i = 0; i < bgTarget.length; i++){
      bgTarget[i].classList.remove("dark-bg-on");
    }

    for(i = 0; i < txtTarget.length; i++){
      txtTarget[i].classList.remove("light-txt-on");
    }

    companyLogo.setAttribute("src", "/assets/images/logo-color.svg");
    state = false;
    lightButton.classList.add("invisible");
    darkButton.classList.remove("invisible");
  }
}

checkDarkMode();

