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

const recipeUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=dairy%20free&app_id=1dde8709&app_key=a8d10560bc3d45c586fa2de0978a729b';

const test = fetch(recipeUrl).then(response => {
   return response.json();
}).then(data => {
    console.log(data);
})