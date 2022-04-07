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


const formSubmitHandler = event => {
  event.preventDefault();
  let mainIngredient = searchedIngredient.value;
  let searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${mainIngredient}&app_id=1dde8709&app_key=a8d10560bc3d45c586fa2de0978a729b`
  fetch(searchUrl).then(response => {
    return response.json();
  }).then(data => {
    for (let i = 0; i < 8; i++) {
      let ingredientArray = data.hits[i].recipe.ingredientLines;
      ingredientArray.forEach(element => {
        console.log(element);
      })
      console.log(data.hits[i].recipe.ingredientLines);
    }
    console.log(data);
  })
}

userForm.addEventListener('submit', formSubmitHandler);