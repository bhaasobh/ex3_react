import React from "react";
import { FiSearch } from "react-icons/fi"; // Search Icon
import { MdOutlineFavorite } from "react-icons/md"; // Love (Heart) Icon
import "./Navbartop.css";

const Navbartop = () => {
    return (
        <header className="header-container">
            <div className="logo">ShenCarCar</div>

       
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search by car name" 
                    className="search-input"
                />
                <FiSearch className="search-icon" />
            </div>

          
            <MdOutlineFavorite className="favorite-icon" />
        </header>
    );
};

export default Navbartop;
