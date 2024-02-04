// Stories.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Stories.css"; // Import CSS file

const Stories = () => {
  const [shows, setShows] = useState([]);
  const API = "https://api.tvmaze.com/search/shows?q=all";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setShows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return ( 
    <div className="stories-container">
      <div className="navbar-container">
        <h2 className="navbar-title">Hollywood Movies</h2>
      </div>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h3>Id = {show.show.id}</h3>
          <h3>MovieName = {show.show.name}</h3>
          <h3>Type = {show.show.type}</h3>
          <h3>Language = {show.show.language}</h3>
          <h3>Genres = {show.show.genres}</h3>
          {show.show.image && <img src={show.show.image.medium} alt={show.show.name} />}
          <Link to={`/components/show-summary/${show.show.id}`}>
            <button className="summary-button">View Summary</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Stories;
