import React from "react";
import './Header.css'

const Header = ({setView}) => {
    return(
        <div className='main-header'>
            <h1>🐶Doggie App 🐶</h1>
            <div >
                <button 
                classname="header-btn" 
                onClick={() => {setView("list of breeds")}}>Breed List
                </button>
                <button 
                classname="header-btn"
                onClick={() => {setView("random dog")}}>Random Dog
                </button>
        
            </div>
        </div>
    )
}
export default Header