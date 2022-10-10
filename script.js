let Header=document.querySelector(".header");
let Container=document.querySelector(".container");
let Loader=document.querySelector(".loader");

function loadPage() {
    Header.style.display="flex"
    Container.style.display="flex"
    Loader.remove();
}
setTimeout(loadPage, 5500);

let openBar=document.querySelector(".mymenu");
let Menu=document.querySelector(".menu");
let closeBar=document.querySelector(".closebtn");
let menuContent=document.querySelector(".menu-div");


openBar.addEventListener("click",()=>{
    Menu.classList.remove("hide");
    Menu.classList.add("show");
  
})

closeBar.addEventListener("click",()=>{
    Menu.classList.remove("show");
    Menu.classList.add("hide");
})


window.addEventListener("click",(event)=>{
     if (!event.target.matches(".fa-bars-staggered")) {
        if (Menu.classList.contains("show")) {
            Menu.classList.add("hide");
        }
     }
})





