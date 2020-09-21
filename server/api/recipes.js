const axios = require('axios');

const apiURL = "https://api.edamam.com/search?q=";
const apiKey = "&app_key=5291ba5e2ba5828a79406b31a2c3bf77";
const apiId = "&app_id=443d8375";

const fetchRecipes = async (...ingredients) => {
  const mappedIngredients = ingredients.map((ingredient, index) => {
    if (index < ingredients.length - 1) {
      return `${ingredient}+`;
    } else {
      return ingredient;
    }
  }).join('');
  const url = `${apiURL}${mappedIngredients}&to=25${apiId}${apiKey}`;
  const res = await axios.get(url);
  const recipes = res.data;
  console.log(recipes);
}

fetchRecipes("zucchini", "broccoli", "carrots");