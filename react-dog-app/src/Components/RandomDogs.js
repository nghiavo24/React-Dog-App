import React, { useState } from "react";

const RandomDogs = ({setRandomDogBreed, getRandomDog, randomDog}) => {
    const[randomInput, setRandomInput] = useState("")

    // Save the input for the random dog
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
            <form>
                <input type='text' placeholder="Enter the breed" onChange={handleChange} />
                <button onClick={handleSubmit}>Get the dawg!</button>
            </form>
            {randomDog && <img src={randomDog}/>}
        </div>
    )

}

export default RandomDogs