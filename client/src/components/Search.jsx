import React, { useState } from 'react';
import styled from 'styled-components';

const SearchStyle = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
    :focus {
      box-shadow: 0 0 6px #aaa;

    }
    border-radius: .25em;
    padding: .5em;
    width: 100%;
    box-shadow: 0 0 3px #bbb;
    margin-bottom: .5em;
    }
  button {
    all: unset;
    width: 100%;
    text-align: center;
    box-shadow: -2px -2px 3px #eee, 2px 2px 3px #ddd;
    border-radius: .5em;
    :hover {
      background: #eee;
    }
    :active {
      box-shadow: -1px -1px 1px #eee, 1px 1px 1px #ddd;
      background: #efefef;
    }
  }
`;

const Search = ({recipeSearch}) => {
 
  const [query, setQuery] = useState('') 

 return (
  <SearchStyle>
      <input 
        onChange={(e) => {setQuery(e.target.value)}}
        value={query}  
        className="form__input" type="text" autoComplete="off" name="recipeName" />
      <button className="form__button"
        onClick={() => {recipeSearch(query)}}
      >Search</button>
  </SearchStyle>
 );
};

export default Search;