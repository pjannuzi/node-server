const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("btn-mobile").className = "btn-mobile";
    var x = document.getElementsByClassName("x");
    x[0].className = "x nvblack";
    x[1].className = "x nvblack";
    x[2].className = "x nvblack";
    x[3].className = "x nvblack";
  } else {
    document.getElementById("btn-mobile").className = "btnnj";
    var x = document.getElementsByClassName("x");
    x[0].className = "x";
    x[1].className = "x";
    x[2].className = "x";
    x[3].className = "x";
  }
}