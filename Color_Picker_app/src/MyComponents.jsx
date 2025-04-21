import { func } from "prop-types";
import React, { useState } from "react";

const MyComponents = () => {
    const [car, setCar] = useState({ year: 2024, make: "Ford", model: 2017 });

    function handleYearChange (event){
        setCar( c=> ({ ...c, year: event.target.value }));
    }
    
    function handleMakeChange (event){
        setCar(car=>({...car, make: event.target.value}));
    }
    
    function handleModelChange (event){
        setCar(car=>({...car, model: event.target.value}));
    }
    
    return <div>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
        <input className="p-8 m-4 border " type="number" value={car.year} onChange={handleYearChange} /> <br />
        <input className="p-8 m-4 border " type="text" value={car.make} onChange={handleMakeChange}/> <br />
        <input className="p-8 m-4 border " type="text" value={car.model}onChange={handleModelChange}/> <br />

    </div>;
};

export default MyComponents;
