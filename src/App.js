import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
// import About from './About';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

  const APP_ID = 'f301b65f';
  const APP_KEY = '30539c9b26abb31ae6a322c39f9461f5	';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }



  return (
    <div className="text-center">
      <h1 className="my-3">Online Delicious Recipes from<span className="smalltext"> edamam </span> API<span className="smalltxt">~ subhom</span></h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder='Search any dish . . .' />
        <button className="search-button" type="submit">Search</button>
        <h6 className="cf">Made with <img src={"logo192.png"} className='imgbox' />React</h6>
      </form>

      <div className="row crow">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image} />
        ))};</div>

    </div>
  );
}
export default App;
