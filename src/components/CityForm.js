import React, { useState } from "react";
import "./CityForm.css"; // Importing the component-specific CSS

const CityForm = () => {
  const [city, setCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();

    // Validation: Empty input or whitespace
    if (!trimmedCity) {
      setError("City name cannot be empty or whitespace.");
      return;
    }

    // Validation: Duplicate entry
    if (cityList.includes(trimmedCity)) {
      setError("City name already exists.");
      return;
    }

    // Add city to list and clear input
    setCityList([...cityList, trimmedCity]);
    setCity(""); // Clear input field
    setError(""); // Clear error message
  };

  return (
    <div className="city-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Add City
        </button>
      </form>

      {/* Display error message */}
      {error && <p className="error-message">{error}</p>}

      {/* Display list of cities */}
      {cityList.length > 0 && (
        <ul className="city-list">
          {cityList.map((cityName, index) => (
            <li key={index}>{cityName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityForm;
