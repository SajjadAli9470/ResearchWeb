

let contentPageOption = false;

const show_click = document.getElementById("allpage");
const show_pages = document.querySelector(".content_pages");
function openCatMenu() {
  show_pages.style.display = "block";
}
function closeCatMenu() {
  show_pages.style.display = "none";

}

let MenuOpen = false;
function gohome() {
  location.href = "index.html";
}
function post1() {
  location.href = "Post1.html";
}
function post2() {
  location.href = "Post2.html";
}
function post3() {
  location.href = "Post3.html";
}
function post4() {
  location.href = "Post4.html";
}
function post5() {
  location.href = "Post5.html";
}
function goGame() {
  location.href = "https://guessanumber-32d75.web.app";
}
const navv = document.querySelector(".nav");
function MenuIcon(x) {
  if (MenuOpen == false) {
    x.classList.toggle("change");
    document.querySelector(".nav").style.height = "fit-content";
    document.getElementById("MenueDisplay").style.display = "block";
    document.querySelector(".nav").style.background = "white";
    nav.classList.add("fadeInDown");
    nav.classList.add("animate");
    MenuOpen = true;

  } else {
    nav.classList.remove("fadeInDown");
    nav.classList.remove("animate");
    document.querySelector(".nav").style.background = "";
    x.classList.toggle("change");
    document.querySelector(".nav").style.height = "";
    document.getElementById("MenueDisplay").style.display = "none";
    MenuOpen = false;
  }
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const nav = document.querySelector(".nav");


var bar2 = document.querySelector(".bar");


const containMenu = document.querySelector(".container_menu");
const nav__links = document.querySelector(".nav__links");
const searchInput = document.querySelector(".input_search");

document.addEventListener("click", function (e) {


  if (
    e.target != nav &&
    e.target.parentNode != nav &&
    e.target != containMenu &&
    e.target.parentNode != containMenu
  ) {
    if (
      e.target != nav__links &&
      e.target.parentNode != nav__links &&
      e.target != searchInput
    ) {
      if (e.target != show_click) {
        if (MenuOpen === true) {
          containMenu.classList.toggle("change");
          nav.style.height = "fit-content";
          document.getElementById("MenueDisplay").style.display = "none";
          document.querySelector(".nav").style.background = "";
          MenuOpen = false;
        }
      }
    }
  }
});

mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollTopAnimated() {
  $("html, body").animate({ scrollTop: "0" });
}