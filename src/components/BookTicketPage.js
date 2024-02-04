import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import "./BookTicketPage.css"; // Import CSS file

const BookTicketPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookNowClick = () => {
    navigate("/BookingForm"); // Use navigate for navigation
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await res.json();
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="stories-container">
      {/* Navbar */}
      <div className="navbar">
        <h1>Book Ticket</h1>
      </div>

      {/* Ticket details */}
      <div className="ticket-container">
        {movieDetails && (
          <div className="show-info">
            <p>Show Name: {movieDetails.name}</p>
            <p>Type: {movieDetails.type}</p>
            <p>Language: {movieDetails.language}</p>
            <p>Genres: {movieDetails.genres.join(", ")}</p>
            {movieDetails.image && <img src={movieDetails.image.medium} alt={movieDetails.name} />}
            {/* Add more movie details here */}
            <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTicketPage;
