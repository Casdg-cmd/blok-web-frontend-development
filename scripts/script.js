// JavaScript Document
var sizeOnScroll = document.querySelector(".bedrijfslogo");

const checkpoint = 100;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
  	var element = document.getElementByClass("bedrijfslogo");
  element.classList.add("logoscroll");
  } 
  document.querySelector(".front").style.opacity = opacity;
});