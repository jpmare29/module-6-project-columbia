// DOm
var aboutBox = document.querySelector("#about-box");
var aboutNav = document.querySelector("#about-nav");
// ---------
var recipeBox = document.querySelector("#card-container");
var recipeNav = document.querySelector("#recipe-nav");
// ------
var searchNav = document.querySelector("#search-nav");

// this displays about paragraph (please change this if you need to)
aboutNav.addEventListener("click", function () {
  aboutBox.style.display = "block";
  recipeBox.style.display = "none";
});
recipeNav.addEventListener("click", function () {
  aboutBox.style.display = "none";
  recipeBox.style.display = "block";
});
searchNav.addEventListener("click", function () {
  aboutBox.style.display = "none";
  recipeBox.style.display = "none";
});
