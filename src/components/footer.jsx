import React from 'react';

function Footer(props) {
    return (
        <div
            className="flex justify-center items-center w-[60%] h-[90px] mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mt-5 mb-5">
            <p className="text-sm text-gray-700 text-white ">
                <a
                    href="https://farazcode.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-5 text-white font-semibold hover:underline hover:text-blue-800 transition duration-300"
                >
                    farazcode.ir
                </a>
                ساخته شده توسط
            </p>
        </div>
    );
}

export default Footer;
