import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({
  job,
  handleSubmit,
  handleJobChange,
  handleLocationChange,
}) => {
  return (
    <div className="p-4 w-full max-w-6xl mx-auto bg-white rounded-lg shadow-md text-center">
      <h2 className="text-4xl font-bold p-4">Search Jobs</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-4">
          <input
            className="w-full border p-2 rounded-lg text-center"
            type="text"
            placeholder="Job Title"
            name="job"
            value={job.title}
            onChange={handleJobChange}
          />
        </div>
        <div className="p-4">
          <input
            className="w-full border p-2 rounded-lg text-center"
            type="text"
            placeholder="Location"
            name="location"
            value={job.location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="p-4">
          <button className="bg-blue-500 p-4 w-full text-white text-xl hover:bg-blue-700 rounded-lg hover:transition-all ease-in-out duration-500">
            <BsSearch
              style={{
                fontSize: "20px",
                display: "inline-block",
                marginRight: "0.5rem",
              }}
            />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
