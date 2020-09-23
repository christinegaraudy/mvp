import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx';
import fakeData from '../data/fakeData.js';
import SearchResultList from './SearchResultList.jsx';
import styled from 'styled-components';
// import FavoritesList from './FavoritesList.jsx'

const AppStyle = styled.div`
  width: 800px;
  margin: 0 auto;
  box-shadow: 0 0 8px #ccc;
  header h1 {
    text-align: center;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      recipes: [],
    }
    this.recipeSearch = this.recipeSearch.bind(this);
  }

  recipeSearch(query) {
    axios.get(`/api/search/${query}`)
      .then(({data}) => {
        this.setState({ recipes: data.hits, q: data.q })
        console.log(data);
      })
  }


  render() {
    const { recipes, q } = this.state;
    return (
      <AppStyle>
        <header>
          <h1>Recipe Finder</h1>
        </header>
        <Search recipeSearch={this.recipeSearch}/>
          <h3 align="center">You just searched for {q} !!</h3>
          <SearchResultList recipes={recipes}/>
          {/* <FavoritesList/> */}
      </AppStyle>
    )
  }
};

export default App;