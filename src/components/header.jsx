import React from 'react';

function Header(props) {
    return (
        <div className="flex justify-center items-center flex-col w-[60%] h-[200px] mx-auto mb-5 rounded-xl">
            <h1 className="text-3xl font-extrabold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg shadow-md">
                car-App
            </h1>
            <p className="text-sm text-gray-700 mt-2">
                <a
                    href="https://farazcode.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition duration-300"
                >
                    farazcode.ir
                </a>
                ساخته شده توسط
            </p>
        </div>
    );
}

export default Header;
