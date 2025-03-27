import React, {useState} from 'react';
import cars from "../constants/mockData.js";
import CarsList from "./carsList.jsx";
import CarListLik from "./carListLik.jsx";
import Search from "./search.jsx";

function CarsFunc(props) {
    const [likeList, setLikeList] = useState([]);
    const [car, setCar] = useState(cars);
    const [search, setSearch] = useState([]);
    const likeListFunc = (cars, status) => {
        if (status) {
            const newList = likeList.filter((i) => i.id !== cars.id);
            setLikeList(newList);
        } else {
            setLikeList((likeList) => [...likeList, cars]);
        }
    }
    const searchFunc = () => {
        console.log("ddd", search);
        if (search) {
            const newList = cars.filter((i) => i.title.toLowerCase().includes(search));
            setCar(newList);
        } else {
            setCar(cars);
        }
    }
    return (<>


        <div className="flex gap-1 w-[60%] mx-auto">
            <Search search={search} setSearch={setSearch}  searchHandler={searchFunc} />
        </div>
        <div className="flex gap-1 w-[60%] mx-auto">
            <div className="w-full">
                {car.map(cars => (
                    <CarsList key={cars.id} data={cars} likeHandler={likeListFunc}/>
                ))}
            </div>

            {!!likeList.length && (
                <div className="w-[30%] h-auto max-h-max p-4 m-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Favorite</h4>
                    {likeList.map((list) => (
                        <CarListLik key={list.id} data={list}/>
                    ))}
                </div>
            )}
        </div>




    </>);
}

export default CarsFunc;
