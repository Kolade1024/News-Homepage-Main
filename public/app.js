const iconMenu = document.querySelector("header button");

const menuBar = document.querySelector(".menubar");
/* menuBar.style.transform = `translateX(${menuBar.offsetWidth})`; */

const menuOpened = document.querySelector(".menubar .menu_opened");

iconMenu.addEventListener("click", (e)=>{
    menuBar.classList.remove("shift");

   
});

menuOpened.addEventListener("click",()=>{

   menuBar.classList.add("shift");
});


const mqLarge = window.matchMedia("(min-width: 768px)");
if (mqLarge.matches) {
  let Header = document.querySelector(".container header");
  let nav = document.querySelector("nav");
  Header.appendChild(nav);
}
else{
    let menuBar = document.querySelector(".menubar");
  let nav = document.querySelector("nav");
  /* Header.remove(nav); */
  menuBar.appendChild(nav);
}






