import './App.css';
import axios from 'axios'
import BreedList from './Components/BreedList';
import React, { useState, useEffect } from 'react'

const App = () => {
  
  const url = "https://dog.ceo/api/breeds/list/all";
  const [listOfBreeds, setListOfBreeds] = useState([]);

  const getBreeds = () => {
  axios
  .get(url)
  .then(response =>(Object.entries(response.data.message)))
  .then (response => setListOfBreeds(response))
  };

  return (
    <div>
      <BreedList list={listOfBreeds} getBreeds={getBreeds}/>
    </div>
  )
}

export default App;
