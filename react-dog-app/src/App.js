import './App.css';
import axios from 'axios'
import BreedList from './Components/BreedList';
import React, { useState, useEffect } from 'react'
import RandomDogs from './Components/RandomDogs'
import Header from './Components/Header';

const App = () => {
  
  const url = "https://dog.ceo/api/breeds/list/all";

  const [listOfBreeds, setListOfBreeds] = useState([]);
  const [randomDogBreed, setRandomDogBreed] = useState();
  const [randomDog, setRandomDog] = useState();
  const [currentView, setCurrentView] = useState();

  const setView = str =>{
    setCurrentView(str);
  }

  const getBreeds = () => {
  axios
  .get(url)
  .then(res =>(Object.entries(res.data.message)))
  .then(res => setListOfBreeds(res))
  };

  useEffect(() => {
    getRandomDog();
  }, [randomDogBreed])

  const getRandomDog = () => {
    randomDogBreed && 
    axios
    .get(`https://dog.ceo/api/breed/${randomDogBreed}/images/random`)
    .then(res => setRandomDog(res.data.message))
    .catch(err => alert("We cannot find the breed that you are looking for. Sorry!"));
  };



  return (
    <div>
      <Header setView={setView} />
      {currentView === "random dog" ?  
       <RandomDogs 
      randomDogBreed={randomDogBreed} 
      randomDog={randomDog} 
      setRandomDogBreed={setRandomDogBreed}
      getRandomDog={getRandomDog}
      />
      :
     <BreedList list={listOfBreeds} getBreeds={getBreeds}/>
      } 
    </div>
  );
};

export default App;
