import React from "react";

const Header = ({setView}) => {
    return(
        <div className='main-header'>
            <h1>Doggie</h1>
            <div>
                <button onClick={() => {setView("list of breeds")}}>Breed List</button>
                <button onClick={() => {setView("random dog")}}>Random Dog</button>
        
            </div>
        </div>
    )
}
export default Header