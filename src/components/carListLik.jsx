import React from 'react';

function CarListLik({data}) {

    return (
        <div className="mx-auto rounded-2xl shadow-lg bg-white p-4 m-4">
            <div className="flex flex-row items-center gap-4">
                <img className="w-[50px] h-[50px] rounded-xl object-cover" src={data.image} alt={data.title}/>
                <p className="text-xs font-bold text-gray-800 text-center">{data.title}</p>
            </div>
        </div>
    );
}


export default CarListLik;
