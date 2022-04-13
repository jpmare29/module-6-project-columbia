// DOm
let aboutBox = document.querySelector("#about-box");
let aboutNav = document.querySelector("#about-nav");
// ---------
let recipeBox = document.querySelector("#card-container");
let recipeNav = document.querySelector("#recipe-nav");
// ------
let searchNav = document.querySelector("#search-nav");
let searchInput = document.querySelector("#recipe-box");

// this displays about paragraph (please change this if you need to)
aboutNav.addEventListener("click", function () {
  aboutBox.style.display = "block";
  //searchInput.style.display = "none";
  recipeBox.style.display = "none";
});
recipeNav.addEventListener("click", function () {
  aboutBox.style.display = "none";
  //searchInput.style.display = "none";
  recipeBox.style.display = "block";
});
searchNav.addEventListener("click", function () {
  aboutBox.style.display = "none";
  recipeBox.style.display = "none";
  searchInput.style.display = "block";
});
