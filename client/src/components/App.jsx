import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx';
import "regenerator-runtime/runtime.js";
import SearchResultList from './SearchResultList.jsx';
// import SearchResultList from './SearchResultList.jsx';
// import FavoritesList from './FavoritesList.jsx'

const apiURL = "https://api.edamam.com/search?q=";
const apiKey = "&app_key=5291ba5e2ba5828a79406b31a2c3bf77";
const apiId = "&app_id=443d8375";
class App extends React.Component {

  state = {
    recipes: []
  }

  // componentDidMount = () => {
  //   this.recipeSearch('muffins');
  // }

  recipeSearch = (event) => {
    const recipeName = event.target.elements.recipeName.value;
    event.preventDefault();
  
    axios.get('/api/search')
      .then(({data}) => {
        console.log(data);
        this.setState({ recipes: data })
      })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Recipe Finder</h1>
        </header>
        <Search recipeSearch={this.recipeSearch}/>
      </div>
    )
  }
};

export default App;