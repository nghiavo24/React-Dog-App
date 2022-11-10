import './App.css';
import axios from 'axios'
import BreedList from './Components/BreedList';
import React, { useState, useEffect } from 'react'

const App = () => {
  
  const url = "https://dog.ceo/api/breeds/list/all";
  const [listOfBreeds, setListOfBreeds] = useState({});

  const makeApiCallFunction = () => axios.get(url).then((res) =>{
    setListOfBreeds(res.data.message);
  })

  return (
    <div>
      <BreedList list={listOfBreeds} makeApiCall={makeApiCallFunction}/>
    </div>
  )
}

export default App;
