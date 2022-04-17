// DOm
let aboutBox = $("#about-box");
let aboutNav = $("#about-nav");
// ---------
let recipeBox = $("#card-container");
let recipeNav = $("#recipe-nav");
// ------
let searchNav = $("#search-nav");
let searchHistory = $("#history");
let closeButton = $('#close-button');
const recipeContainer = $('#fullrecipe-box');

// Event Handlers for toggling sections from Nav
aboutNav.on("click", function () {
  aboutBox.toggle();
});

recipeNav.on("click", function () {
  searchHistory.toggle();
});

closeButton.on('click', () => {
  recipeContainer.hide();
  recipeBox.show();
})