import React, { useState } from 'react';
import flightsData from './flight.json';

// Example JSON data for flights

export const App = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate searching for flights based on origin and destination
    const results = flightsData.filter(
      flight => flight.origin.toLowerCase() === origin.toLowerCase()
      && flight.destination.toLowerCase() === destination.toLowerCase(),
    );

    setSearchResults(results);
  };

  return (
    <div>
      <h1>Flight Ticket Search</h1>
      <div>
        <div>Origin: </div>
        <input
          type="text"
          value={origin}
          onChange={e => setOrigin(e.target.value)}
        />
      </div>
      <div>
        <div>Destination: </div>
        <input
          type="text"
          value={destination}
          onChange={e => setDestination(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>

      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(flight => (
            <li key={flight.id}>
              {`${flight.airline} Flight ${flight.id}`}
              :
              {flight.origin}
              to
              {' '}
              {flight.destination}
              (
              {flight.departureTime}
              -
              {' '}
              {flight.arrivalTime}
              )
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found for the given origin and destination.</p>
      )}
    </div>
  );
};
