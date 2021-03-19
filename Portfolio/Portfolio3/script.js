let header = document.querySelector(".main-nav");
let buttonBackToTop = document.getElementById("backToTop");
//use mobileButton
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
    buttonBackToTop.style.display = "block";
  } else {
    header.classList.remove("bg");
    buttonBackToTop.style.display = "none";
  }
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// eventListener
buttonBackToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);
