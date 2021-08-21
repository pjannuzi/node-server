

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("start").className = "bgg-white";
    document.getElementById("start1").className = "text2";
    document.getElementById("nvb").className = "navbar-d";
  } else {
    document.getElementById("start").className = "bgg-common";
    document.getElementById("start1").className = "text1";
    document.getElementById("nvb").className = "navbarp";
  }
}