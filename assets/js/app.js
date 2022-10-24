"use strict";
var button = document.querySelector(".btn--darkmode");
button.addEventListener("click", toggleTheme);
var themeLogo = document.querySelector(".darkmodeLogo");
var storageTheme = localStorage.getItem("theme");
var lien = document.querySelectorAll(".nav__link");

// Si storageTheme n'est pas vide
if(storageTheme == "dark"){
    document.body.setAttribute("data-theme", "dark");
    themeLogo.setAttribute("src", "assets/images/picto_theme-dark.svg");

}else{
    document.body.setAttribute("data-theme", "light");
    themeLogo.setAttribute("src", "assets/images/picto_theme.svg");
}

function toggleTheme(){
    // getAttribute permet de récupérer la valeur de l'attibut "data-theme" sur la balise body
    var currentTheme = document.body.getAttribute("data-theme");
    if(currentTheme == "dark"){
        // On définit la valeur de l'attribut "data-theme" à light
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeLogo.setAttribute("src", "assets/images/picto_theme.svg");
    }else{
        // On définit la valeur de l'attribut "data-theme" à dark
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeLogo.setAttribute("src", "assets/images/picto_theme-dark.svg");
    }
}

// Code du burger menu
let navButton = document.querySelector(".nav-button");

  navButton.addEventListener("click", toggleNavigation);

  function toggleNavigation(){
      if(!document.body.hasAttribute("data-menu")){
          document.body.setAttribute("data-menu", true);
      }else{
          document.body.removeAttribute("data-menu");
      }
  }


// Fermer le menu lors du clic sur un lien
for (let i = 0; i < lien.length; i++) {

  lien[i].addEventListener("click", closeMenu);
    function closeMenu() {
        document.body.removeAttribute("data-menu");
    };
}


// date
var dateEl = new Date();
document.querySelector("#date")
.innerHTML = dateEl.getFullYear();


//slider img

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


var slideIndex = 1;
showSlides1(slideIndex);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex = n);
}
function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  

  var slideIndex = 1;
  showSlides2(slideIndex);
  
  // Next/previous controls
  function plusSlides2(n) {
    showSlides2(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide2(n) {
    showSlides2(slideIndex = n);
  }
  function showSlides2(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides2");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }

