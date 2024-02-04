// ShowSummary.js

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ShowSummary.css"; // Import CSS file

// Function to strip HTML tags from text
function stripHtmlTags(html) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

const ShowSummary = () => {
  const { id } = useParams();
  const [showSummary, setShowSummary] = useState({});

  useEffect(() => {
    const fetchShowSummary = async () => {
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await res.json();
        setShowSummary(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShowSummary();
  }, [id]);

  const handleBooking = () => {
    // Navigate to the booking page with movie details as URL parameters
  };

  return (
    <div className="stories-container">
      <div className="navbar-container">
        <h2 className="navbar-title">{showSummary.name}</h2>
      </div>
      <p>{stripHtmlTags(showSummary.summary)}</p> {/* Render summary without HTML tags */}
      <div className="button-container"> {/* Apply the styles from ShowSummary.css */}
        <Link to={`/book-ticket/${id}`}>
          <button onClick={handleBooking}>Book Ticket</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowSummary;
