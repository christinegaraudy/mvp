import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const SearchResultItemStyle = styled.div`
  margin: 10px;
  box-shadow: 10px;
`;


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

    const deleteRecipe = () => {
      axios.post('/deleteRecipe', { image, label })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    }

  return (
    <SearchResultItemStyle>
      <div className ="search-result-item">
        <img className="recipe-image" src={image}/>
        <div><a href={recipe.url}>{recipe.label}</a></div>
        <button onClick={saveRecipe}>Save</button>
        <button onClick={deleteRecipe}>Delete</button>
      </div>
    </SearchResultItemStyle>
  )
};

export default  SearchResultItem;
