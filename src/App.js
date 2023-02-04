import React, { useState, useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Results from "./components/Results";
import FavoriteJobs from "./components/FavoriteJobs";
import Footer from "./components/Footer";
import jobData from './jobData.json';


function App() {

  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState(null);

  console.log(favorites)

  const handleSubmit = e => {
    e.preventDefault();
    setError(null);
    const filteredData = jobData.filter(
      jobData =>
        jobData.title.toLowerCase().includes(job.toLowerCase()) &&
        jobData.location.toLowerCase().includes(location.toLowerCase())
    );
    setResults(filteredData);
  };

  const handleAddFavorites = (e) => {
    if (!favorites.includes(e)) {
      setFavorites([...favorites, e]);
    }
  };

  const handleRemoveFavorites = (removeFavorite) => {
    setTimeout(() => { setFavorites(favorites.filter((favorite, id) => favorite.id !== removeFavorite.id)) }, 500)
  };

  const handleJobChange = (e) => {
    setJob(e.target.value)

  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)

  }

  return (
    <>
      <Navbar />
      <About />
      <Search
        handleSubmit={handleSubmit}
        handleJobChange={handleJobChange}
        handleLocationChange={handleLocationChange}
        job={job}
      />
      {error && (
        <p className="text-red-600 text-3xl font-bold text-center p-6">
          {error.message}
        </p>
      )}
      <div className="flex flex-col md:flex-row px-2" >
        <Results results={results} handleAddFavorites={handleAddFavorites} />
        <FavoriteJobs favorites={favorites} handleRemoveFavorites={handleRemoveFavorites} />
      </div>
      <Footer />
    </>
  );
}

export default App;
