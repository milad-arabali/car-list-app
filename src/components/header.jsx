import React from 'react';

function Header(props) {
    return (
        <div
            className="flex justify-center items-center w-[60%] h-[130px] mx-auto mb-5 mt-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-white px-6 py-2 text-center">
                car-list-app
            </h1>
        </div>
    );
}

export default Header;
