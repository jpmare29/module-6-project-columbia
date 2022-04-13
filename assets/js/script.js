var url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
{
  /* <div class="box" id="mood-box" style="display: none">
<h1>Mood</h1>
<!-- food Search -->

<!-- recipes Generator Button-->
<input
  class="button is-danger"
  type="button"
  id="generate-button"
  value="Generate"
/> */
}

//const recipeUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=1dde8709&app_key=a8d10560bc3d45c586fa2de0978a729b';

const userForm = document.getElementById('user-form');
const searchedIngredient = document.getElementById('recipe');
const card1 = $('#card1');
const card2 = $('#card2');
const card3 = $('#card3');
const card4 = $('#card4');
const cardArray = [card1, card2, card3, card4];


const formSubmitHandler = event => {
  event.preventDefault();
  let mainIngredient = searchedIngredient.value;
  let searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${mainIngredient}&app_id=1dde8709&app_key=a8d10560bc3d45c586fa2de0978a729b`
  fetch(searchUrl).then(response => {
    return response.json();
  }).then(data => {
    const resultsArray = data.hits;
    //add display to first result block
    recipeBox.style.display = "block";
    function pageOneCards() {
      let i = 0;
        cardArray.forEach(element => {
          let currentRecipe = resultsArray[i];
          let title = currentRecipe.recipe.label;
          let imageUrl = currentRecipe.recipe.image;
          let ingredientsArray = currentRecipe.recipe.ingredientLines;
          let recipeDetails = currentRecipe.recipe.url;
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('.card-text').text('Serves:' + servingNumber);
          element.attr('data-number', i);
          i++
        })
    }

    function pageTwoCards() {
      let i = 4;
        cardArray.forEach(element => {
          let currentRecipe = resultsArray[i];
          let title = currentRecipe.recipe.label;
          let imageUrl = currentRecipe.recipe.image;
          let ingredientsArray = currentRecipe.recipe.ingredientLines;
          let recipeDetails = currentRecipe.recipe.url;
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('.card-text').text('Serves:' + servingNumber);
          element.attr('data', i);
          i++
        })
    }

    function pageThreeCards() {
      let i = 8;
        cardArray.forEach(element => {
          let currentRecipe = resultsArray[i];
          let title = currentRecipe.recipe.label;
          let imageUrl = currentRecipe.recipe.image;
          let ingredientsArray = currentRecipe.recipe.ingredientLines;
          let recipeDetails = currentRecipe.recipe.url;
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('.card-text').text('Serves:' + servingNumber);
          element.attr('data', i);
          i++
        })
    }

    function pageFourCards() {
      let i = 12;
        cardArray.forEach(element => {
          let currentRecipe = resultsArray[i];
          let title = currentRecipe.recipe.label;
          let imageUrl = currentRecipe.recipe.image;
          let ingredientsArray = currentRecipe.recipe.ingredientLines;
          let recipeDetails = currentRecipe.recipe.url;
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('.card-text').text('Serves:' + servingNumber);
          element.attr('data', i);
          i++
        })
    }

    function pageFiveCards() {
      let i = 16;
        cardArray.forEach(element => {
          let currentRecipe = resultsArray[i];
          let title = currentRecipe.recipe.label;
          let imageUrl = currentRecipe.recipe.image;
          let ingredientsArray = currentRecipe.recipe.ingredientLines;
          let recipeDetails = currentRecipe.recipe.url;
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('.card-text').text('Serves:' + servingNumber);
          element.attr('data', i);
          i++
        })
    }

    function fullRecipePage() {
    }
    
    card1.on('click', element => {
      console.log(element.currentTarget.dataset.number)
      console.log(resultsArray[element.currentTarget.dataset.number])
    })
      
    
          // element.children('.ingredient-class').empty();
          // ingredientsArray.forEach(item => {
          //   let newDiv = document.createElement('div');
          //   newDiv.textContent = item;
          //   element.append(newDiv);
          // })
          // element.children('.recipe-class').find('a').attr('href', recipeDetails).text(title);
    
    // console.log(resultsArray);
    // for (let i = 0; i < 8; i++) {
    //   let ingredientArray = data.hits[i].recipe.ingredientLines;
    //   ingredientArray.forEach(element => {
    //     console.log(element);
    //   })
    //   console.log(data.hits[i].recipe.ingredientLines);
    // }
    // console.log(data);
    pageOneCards();
    $('#link1').on('click', pageOneCards);
    $('#link2').on('click', pageTwoCards);
    $('#link3').on('click', pageThreeCards);
    $('#link4').on('click', pageFourCards);
    $('#link5').on('click', pageFiveCards);
  })
  
}

userForm.addEventListener('submit', formSubmitHandler);