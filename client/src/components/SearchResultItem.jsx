import axios from 'axios';
import React from 'react';


const SearchResultItem = ({ recipe }) => {
  const { image, label } = recipe;
  const saveRecipe = () => {
    axios.post('/saveRecipe', { image, label })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (

    <div className ="search-result-item">
      <img className="recipe-image" src={image}/>
      <div>{recipe.label}</div>
      {/* <div>{recipe.url}</div> */}
      <button onClick={saveRecipe}>Save</button>
    </div>
  )
};

export default  SearchResultItem;
