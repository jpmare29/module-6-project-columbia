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

// this displays about paragraph (please change this if you need to)
aboutNav.on("click", function () {
  aboutBox.toggle();
  recipeBox.toggle();
});
recipeNav.on("click", function () {
  searchHistory.toggle();
  recipeBox.toggle();
});
closeButton.on('click', () => {
  recipeContainer.hide();
  recipeBox.show();
})
// searchNav.on("click", function () {
//   aboutBox.toggle();
//   recipeBox.toggle();
// });
