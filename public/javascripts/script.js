window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    document.getElementById("start").className = "bgg-white";
    document.getElementById("start1").className = "text2";
    document.getElementById("nvb").className = "navbar-d";
  } else {
    document.getElementById("start").className = "";
    document.getElementById("start1").className = "text1";
    document.getElementById("nvb").className = "navbarp";
  }
}