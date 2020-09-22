import React from 'react';

const SearchResultItem = ({ recipe }) => {
  const { image } = recipe;
  return (
    <div className ="search-result-item">
      <img className="recipe-image" src={image}/>
      <div>{recipe.calories.toFixed(2)}</div>
    </div>
  )
};

export default  SearchResultItem;
