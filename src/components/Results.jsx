import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Results = ({results, handleAddFavorites }) => {
  return (
    <div className="p-8 w-full max-w-5xl mx-auto bg-white rounded-lg shadow-md mt-8 text-center">
      <h2 className="text-2xl font-bold p-4">Results</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result) => (
          <div key={result.id} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 duration-300">
            <h3 className="text-lg font-medium">{result.title}</h3>
            <p className="text-gray-600 italic">{result.location}</p>
            <p className="text-gray-600">{result.company}</p>
            <p className="text-gray-600">{result.type}</p>
            <button
              className=" p-1.5 text-white rounded-full  "
              onClick={() => handleAddFavorites(result)}
            >
              <AiFillHeart style={{ fontSize: "20px", color: "red" }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
