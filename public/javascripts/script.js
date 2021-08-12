window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("start").className = "bgg-white";
    document.getElementById("start1").className = "text2";
  } else {
    document.getElementById("start").className = "bgg-common";
    document.getElementById("start1").className = "text1";
  }
}