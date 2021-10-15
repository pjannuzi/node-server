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
  } else {
    document.getElementById("btn-mobile").className = "btnnj";
  }
};

window.onload = function() {
  document.getElementById("av").style.display = "block";
  document.getElementById("av1").style.display = "block";
};