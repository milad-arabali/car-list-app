import {useState} from 'react';

function CarsList({data, likeHandler}) {
    const {title, image, start_production, class_model} = data;
    const [liked, setLiked] = useState(false);
    const like = () => {
        likeHandler(data, liked);
        setLiked((liked) => !liked);
    }
    return (
        <div className=" mx-auto rounded-2xl overflow-hidden shadow-lg bg-white p-4 m-4 relative">
            <div className="flex flex-row items-center gap-4">
                <div className="w-1/3 flex justify-center">
                    <img className="w-[300px] h-[200px] rounded-xl object-cover" src={image} alt={title}/>
                </div>
                <div className="w-1/3 text-center">
                    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                    <p className="text-gray-600 text-sm">Start Production: {start_production}</p>
                    <p className="text-gray-600 text-sm">Class: {class_model}</p>
                </div>
                <div className="absolute top-4 right-4">
                    <button
                        className={`px-4 py-2 text-white rounded-md text-sm transition duration-300 cursor-pointer
                        ${liked ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                        onClick={like}
                    >
                        {liked ? 'Liked' : 'Favorite'}
                    </button>

                </div>
            </div>
        </div>


    );
}

export default CarsList;
