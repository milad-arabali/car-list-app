import React from 'react';
import cars from "../constants/mockData.js";
import CarsList from "./carsList.jsx";

function CarsFunc(props) {
    return (
        <>

            <div className="min-h-[90px] ">
                {
                    cars.map(cars => (
                        <CarsList key={cars.id} data={cars}/>
                    ))

                }
            </div>
            <div></div>

        </>
    );
}

export default CarsFunc;
