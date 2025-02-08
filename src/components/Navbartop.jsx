import React from "react";
import { FiSearch } from "react-icons/fi"; // Search Icon
import { MdOutlineFavorite } from "react-icons/md"; // Favorite Icon
import "../css/Navbartop.css";

const Navbartop = ({ searchQuery, setSearchQuery , setSelectedCar  }) => {
  return (
    <header className="header-container">
       <div className="logo" onClick={() => setSelectedCar(null)}>ShenCarCar</div>

      {/* Search Bar Stays Here */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by car name"
          className="search-input"
          value={searchQuery} // Controlled input
          onChange={(e) => setSearchQuery(e.target.value)} // Update search state
        />
        <FiSearch className="search-icon" />
      </div>

      <MdOutlineFavorite className="favorite-icon" />
    </header>
  );
};

export default Navbartop;
