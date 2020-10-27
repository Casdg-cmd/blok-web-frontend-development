// JavaScript Document

/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   var element = document.getElementByClass("bedrijfslogo");
  element.classList.remove("logoscroll");
   
  } 
  else {
   var element = document.getElementByClass("logoscroll");
  	element.classList.add("bedrijfslogo");
  }
}

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("bedrijfslogo").className = "logoscroll";
  } else {
    document.getElementById("bedrijfslogo").className = "";
  }
}*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.top = "-200vw";
 
  } else {
    document.getElementById("nav").style.top = "0";
   
  }
}