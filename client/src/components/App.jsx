import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx';
import fakeData from '../data/fakeData.js';
import SearchResultList from './SearchResultList.jsx';
// import FavoritesList from './FavoritesList.jsx'

const apiURL = "https://api.edamam.com/search?q=";
const apiKey = "&app_key=5291ba5e2ba5828a79406b31a2c3bf77";
const apiId = "&app_id=443d8375";
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
  // { query }
    axios.get(`/api/search/${query}`)
      .then(({data}) => {
        this.setState({ recipes: data.hits, q: data.q })
        console.log(data);

      })
  }


  render() {
    const { recipes, q } = this.state;
    return (
      <div>
        <header>
          <h1>Recipe Finder</h1>
        </header>
        <Search recipeSearch={this.recipeSearch}/>
          <h3>You just searched for {q} !!</h3>
          <SearchResultList recipes={recipes}/>
      </div>
    )
  }
};

export default App;