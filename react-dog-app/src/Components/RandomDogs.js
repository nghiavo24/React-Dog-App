import React, { useState } from "react";

const RandomDogs = ({setRandomDogBreed, getRandomDog, randomDog}) => {
    const[randomInput, setRandomInput] = useState("")

    const handleChange = (e) => {
        setRandomInput(e.target.value)
    
    }

    const handleSubmit = () => {
        setRandomDogBreed(randomInput);
        getRandomDog()
    }

    return (
        <div>
            <h1>Random Dogs</h1>
            <div>
                <input type='text' placeholder="Enter the breed" onChange={handleChange} />
                <button onClick={handleSubmit}>Get the dawg!</button>
            </div>
            {randomDog && <img src={randomDog}></img>}
        </div>
    )

}

export default RandomDogs