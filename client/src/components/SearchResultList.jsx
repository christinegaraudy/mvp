import React from 'react';
import SearchResultItem from './SearchResultItem.jsx';

const SearchResultList = ({ recipes }) => (
  <div className="search-result-list"> 
    {recipes.map(({ recipe })=> <SearchResultItem recipe={recipe} key={recipe.label}/>)}
  </div>
);

export default SearchResultList;