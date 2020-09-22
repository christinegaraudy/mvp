import React from 'react';

const Search = (props) => (
  <form onSubmit={props.recipeSearch}>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button">Search</button>
  </form>
);

export default Search;