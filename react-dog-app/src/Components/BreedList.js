import React from "react";

const BreedList = (props) => {
    const theList = props.list;
    
    const dogs = Object.entries(theList).map(([key, value], index) => {
        return (
            <div key={`${key}${value}${index}`}>
                <h1>{key}</h1>
                {value.map((element, index) => 
                    <h2 key={`${element}${index}`}>- {element}</h2>
                )}
            </div>
        )
    });
    const object = {
        breed1: ["sub-breed 1", "sub-breed 2"],
        breed2: ["sub-breed 3", "sub-breed 4"]
    }
    const result = Object.entries(object);
    console.log(result);
    const result_array = [
        ["breed1", ["sub-breed 1", "sub-breed 2"]],
        ["breed2", ["sub-breed 3", "sub-breed 4"]]
    ]
    /* const object= ['a', 'b', 'c']
        object.map((element, index) => 
            <ul key={`${element}${index}`}>{element}</ul> )

    */
    return(
        <div>
            <button onClick={() => props.makeApiCall()}>
                Populate theList
            </button>
            {dogs.length != 0 && dogs}
        </div>
    )
}

export default BreedList;
// https://dorey.github.io/JavaScript-Equality-Table/