const userForm = document.getElementById('user-form');
const searchedIngredient = document.getElementById('recipe');
const finalRecipeContainer = $('#fullrecipe-box');
const finalRecipe = $('#finalrecipe');
const card1 = $('#card1');
const card2 = $('#card2');
const card3 = $('#card3');
const card4 = $('#card4');
const cardArray = [card1, card2, card3, card4];
const appendHistory = $('#subhistory');


const formSubmitHandler = event => {
  event.preventDefault();
  let mainIngredient = searchedIngredient.value;
  let searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${mainIngredient}&app_id=1dde8709&app_key=a8d10560bc3d45c586fa2de0978a729b`
  fetch(searchUrl).then(response => {
    return response.json();
  }).then(data => {
    const resultsArray = data.hits;
    recipeBox.show()
    function pageOneCards() {
      let i = 0;
        cardArray.forEach(element => {
          let currentRecipe = resultsArray[i];
          let title = currentRecipe.recipe.label;
          let imageUrl = currentRecipe.recipe.image;
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('#ingredients').text('Serves:' + servingNumber);
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
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('#ingredients').text('Serves:' + servingNumber);
          element.attr('data-number', i);
          i++
        })
    }

    function pageThreeCards() {
      let i = 8;
        cardArray.forEach(element => {
          let currentRecipe = resultsArray[i];
          let title = currentRecipe.recipe.label;
          let imageUrl = currentRecipe.recipe.image;
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('#ingredients').text('Serves:' + servingNumber);
          element.attr('data-number', i);
          i++
        })
    }

    function pageFourCards() {
      let i = 12;
        cardArray.forEach(element => {
          let currentRecipe = resultsArray[i];
          let title = currentRecipe.recipe.label;
          let imageUrl = currentRecipe.recipe.image;
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('#ingredients').text('Serves:' + servingNumber);
          element.attr('data-number', i);
          i++
        })
    }

    function pageFiveCards() {
      let i = 16;
        cardArray.forEach(element => {
          let currentRecipe = resultsArray[i];
          let title = currentRecipe.recipe.label;
          let imageUrl = currentRecipe.recipe.image;
          let servingNumber = currentRecipe.recipe.yield;
          element.find('.card-title').text(title);
          element.find('img').attr('src', imageUrl);
          element.find('#ingredients').text('Serves:' + servingNumber);
          element.attr('data-number', i);
          i++
        })
    }

    function addRecipeHistory(recipeToStore) {
      let historyObject = JSON.parse(localStorage.getItem('history'));
      if (historyObject) {
        let recipeArray = historyObject;
        console.log(recipeArray);
        let newArray = [recipeToStore.recipe.label, recipeToStore.recipe.url];
        recipeArray.push(newArray);
        localStorage.setItem('history', JSON.stringify(recipeArray));
      } else {
        let recipeArray = [[recipeToStore.recipe.label, recipeToStore.recipe.url]];
        localStorage.setItem('history', JSON.stringify(recipeArray));
      }
    }

    function fullRecipePage(selected) {
      let currentRecipe = selected;
      let title = currentRecipe.recipe.label;
      let imageUrl = currentRecipe.recipe.image;
      let ingredientsArray = currentRecipe.recipe.ingredientLines;
      let recipeDetails = currentRecipe.recipe.url;
      let recipeDisplay = $('#finalrecipe');
      recipeDisplay.find('.card-title').text(title);
      recipeDisplay.find('img').attr('src', imageUrl);
      if (recipeDisplay.find('#ingredients').first()) {
        recipeDisplay.find('#ingredients').empty();
      }
      ingredientsArray.forEach(element => {
          let newDiv = document.createElement('div');
          newDiv.textContent = element;
          recipeDisplay.find('#ingredients').append(newDiv);
        })
      $('#recipe-url').find('a').attr('href', recipeDetails).text('Click for full Recipe!');
      finalRecipeContainer.style.display = 'block';
    }
    
    card1.on('click', event => {
      let currentFullRecipe = resultsArray[event.currentTarget.dataset.number];
      recipeBox.hide();
      fullRecipePage(currentFullRecipe);
      addRecipeHistory(currentFullRecipe);
      populateHistory();
    })
    card2.on('click', event => {
      let currentFullRecipe = resultsArray[event.currentTarget.dataset.number];
      recipeBox.hide();
      fullRecipePage(currentFullRecipe);
      addRecipeHistory(currentFullRecipe);
      populateHistory();
    })
    card3.on('click', event => {
      let currentFullRecipe = resultsArray[event.currentTarget.dataset.number];
      recipeBox.hide();
      fullRecipePage(currentFullRecipe);
      addRecipeHistory(currentFullRecipe);
      populateHistory();
    })
    card4.on('click', event => {
      let currentFullRecipe = resultsArray[event.currentTarget.dataset.number];
      recipeBox.hide();
      fullRecipePage(currentFullRecipe);
      addRecipeHistory(currentFullRecipe);
      populateHistory();
    })
    pageOneCards();
    $('#link1').on('click', pageOneCards);
    $('#link2').on('click', pageTwoCards);
    $('#link3').on('click', pageThreeCards);
    $('#link4').on('click', pageFourCards);
    $('#link5').on('click', pageFiveCards);
  })
  
}

function populateHistory() {
  let recipeArray = JSON.parse(localStorage.getItem('history'));
  console.log(recipeArray);
  appendHistory.empty();
  if (recipeArray) {
    recipeArray.forEach(element => {
      let newDiv = document.createElement('div');
      newDiv.classList.add('row');
      let anchor = document.createElement('a');
      anchor.setAttribute('href', element[1]);
      anchor.textContent = element[0];
      newDiv.append(anchor);
      appendHistory.append(newDiv);
    })
  }
}
populateHistory();
userForm.addEventListener('submit', formSubmitHandler);