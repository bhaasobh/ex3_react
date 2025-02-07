import React, { useState } from "react";
import "./Navbarside.css"; 
import { FaCheckSquare, FaRegSquare } from "react-icons/fa"; 


const types = [
    { name: "Sport", count: 24 },
    { name: "SUV", count: 13 },
    { name: "MPV", count: 16 },
    { name: "Sedan", count: 20 },
    { name: "Coupe", count: 14 },
    { name: "Hatchback", count: 18 }
];


const CAPACITY = [
    { capacity: "2 Person", count: 8 },
    { capacity: "4 Person", count: 16 },
    { capacity: "6 Person", count: 14 }
];
const Navbarside = () => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedCapacities, setSelectedCapacities] = useState([]);
    const [maxPrice, setMaxPrice] = useState(100);

    const toggleType = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const toggleCapacity = (capacity) => {
        setSelectedCapacities((prev) =>
            prev.includes(capacity) ? prev.filter((c) => c !== capacity) : [...prev, capacity]
        );
    };

    return (
        <div className="Navbarside">
            <div className="filter-section">
                <h4>TYPE</h4>
                {types.map((type, index) => (
                    <div key={index} className="filter-item" onClick={() => toggleType(type)}>
                        {selectedTypes.includes(type) ? <FaCheckSquare className="checkbox checked" /> : <FaRegSquare className="checkbox" />}
                        <span>{type.name} <span className="count">{type.count}</span></span>
                    </div>
                ))}
            </div>

            <div className="filter-section">
                <h4>CAPACITY</h4>
                {CAPACITY.map((capacity, index) => (
                    <div key={index} className="filter-item" onClick={() => toggleCapacity(capacity)}>
                        {selectedCapacities.includes(capacity) ? <FaCheckSquare className="checkbox checked" /> : <FaRegSquare className="checkbox" />}
                        <span>{capacity.capacity} <span className="count">{capacity.count}</span></span>
                    </div>
                ))}
            </div>

            <div className="filter-section">
                <h4>PRICE (PER DAY)</h4>
                <input
                    type="range"
                    min="10"
                    max="200"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="slider"
                />
                <p>Max. ${maxPrice}.00</p>
            </div>
        </div>
    );
};

export default Navbarside;
