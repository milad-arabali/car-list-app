import React from 'react';

function Search({search, setSearch, searchHandler}) {
    return (
        <div className="flex items-center justify-center gap-2 ">
            <input
                type="text"
                placeholder="search title"
                value={search}
                onChange={(event) => setSearch(event.target.value.toLowerCase())}
                className="p-2 border border-gray-300 rounded-md text-sm w-96 bg-white focus:border-green-500"
            />
            <button
                onClick={searchHandler}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
                Search
            </button>
        </div>

    );
}

export default Search;
