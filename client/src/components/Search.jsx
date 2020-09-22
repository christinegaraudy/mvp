import React, { useState } from 'react';


const Search = ({recipeSearch}) => {
 
  const [query, setQuery] = useState('') 

 return (
  <div>
      <input 
        onChange={(e) => {setQuery(e.target.value)}}
        value={query}  
        className="form__input" type="text" name="recipeName" />
      <button className="form__button"
        onClick={() => {recipeSearch(query)}}
      >Search</button>
  </div>
 );
};

export default Search;