/* eslint-disable */
import { useEffect } from 'react';
import React from 'react';

import './App.css';
import SearchIcon from './search.svg';


const API_KEY = '45b613b9';
const BASE_URL = `http://www.omdbapi.com/?apikey=`;
const API_URL = `${BASE_URL}${API_KEY}`;

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies('shrek');
  }, []);
  
  return(
    <div className='app'>
      <h1>MovieSearch</h1>

      <div className="search">
        <input 
          type="text" 
          placeholder='Search for a Movie...'
          onChange={() => { handleSearch }}
        />
        <img src={ SearchIcon } alt="Icon of magnifying glass denoting search" />
      </div>
    </div>
  )
}

export default App