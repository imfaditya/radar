const header = document.querySelector("header");
const main = document.querySelector("main");
const button = document.getElementsByClassName("button-mode");

for(let i = 0; i < button.length; i++){
  button[i].addEventListener('click', function(event){
    checkDarkMode();
  })
}

function checkDarkMode(){
  header.classList.toggle("dark-on");
  main.classList.toggle("dark-on");
}
