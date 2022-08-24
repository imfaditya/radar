let state = false;
const header = document.querySelector("header");
const main = document.querySelector("main");
const button = document.getElementsByClassName("button-mode");
const logo = document.querySelector("#company-logo");

for(let i = 0; i < button.length; i++){
  button[i].addEventListener('click', function(event){
    checkDarkMode();
  })
}

function checkDarkMode(){
  header.classList.toggle("dark-on");
  main.classList.toggle("dark-on");
  if(state === false){
    state = true;
    logo.setAttribute("src", "assets/images/logo-white.svg");
  } else{
    state = false;
    logo.setAttribute("src", "assets/images/logo-color.svg");
  }
  
}
