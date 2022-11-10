import React from "react";

const BreedList = ({list, getBreeds}) => {
    return(
        <div>
            <h1>List of Breeds</h1>
            <button onClick={getBreeds}>Get Breeds</button>
            <ul>
                {list && list.map((breeds)=> {
                    return(
                        <ul>
                            <h2>{breeds[0]}</h2>
                            {breeds[1].length > 0 && breeds[1].map((subBreeds)=> {
                                return <h4>- {subBreeds}</h4>
                            })}
                        </ul>
                    )
                })}
            </ul>
        </div>
    )
    











}
    // const dogs = Object.entries(theList).map(([key, value], index) => {
    //     return (
    //         <div key={`${key}${value}${index}`}>
    //             <h1>{key}</h1>
    //             {value.map((element, index) => 
    //                 <h2 key={`${element}${index}`}>- {element}</h2>
    //             )}
    //         </div>
    //     )
    // });
    // return(
    //     <div>
    //         <button onClick={() => props.makeApiCall()}>
    //             Populate theList
    //         </button>
    //         {dogs.length != 0 && dogs}
    //     </div>
    // )


export default BreedList;