import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';
const App =()=>{
  const APP_ID='bbc0d1a4';
  const APP_KEY='92f2af27a79e0755e743b7fc4b614f84';
  const[recipes, setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [ query, setQuery]=useState('chicken');
  useEffect(  () => {
 getRecipes  (); 
 
  }, [query]);
  const getRecipes =async()=>{
    const response = await fetch( 
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      ); 
  const date = await response.json();
  setRecipes(date.hits);
  console.log(date.hits);
  };
  const updatesearch= e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return(
    <div className='App'>
    <form onSubmit={getSearch} className='search-form'>
      <input
       className='search-bar' 
      type='text'
       value ={search} 
       onChange={updatesearch}
       />
      <button  className='search-button' type='submit' > search</button>
    </form>
    <div className='recipes'>
  {recipes.map(recipe =>(
<Recipe 
key={recipe.recipe.label}
title={recipe.recipe.label } 
calories={recipe.recipe.calories}
image ={recipe.recipe.image}
ingredients={recipe.recipe.ingredients}
/>
  ))}
  </div>
    </div>
  );
}
export default App;