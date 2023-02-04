import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const FavoriteJobs = ({ favorites, handleRemoveFavorites }) => {
  return (
    <div className="p-8 w-full max-w-md mx-auto bg-white rounded-lg shadow-md mt-8 text-center">
      <h2 className="text-2xl font-bold p-4">Favorite Jobs</h2>
      <div className="grid grid-cols-1 gap-4">
        {favorites.map((favorite) => (
          <div
            key={favorite.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 duration-300"
          >
            <h3 className="text-lg font-medium">{favorite.title}</h3>
            <p className="text-gray-600 italic">{favorite.location}</p>
            <p className="text-gray-600">{favorite.company}</p>
            <p className="text-gray-600">{favorite.type}</p>
            <button
              className=" p-1.5 text-white rounded-full  "
              onClick={() => handleRemoveFavorites(favorite)}
            >
              <AiOutlineHeart style={{ fontSize: "20px", color: "red" }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteJobs;
