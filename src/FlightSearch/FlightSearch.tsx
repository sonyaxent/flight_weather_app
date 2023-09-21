import React, { useState } from 'react';
import { FlightList, Flight } from '../FightList/FlightList';
import flightsData from '../flight.json';

export type FlightSearchProps = typeof flightsData;

export const FlightSearch: React.FC<FlightSearchProps> = () => {
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Flight[]>([]);

  const handleSearch = () => {
    const results = flightsData
      .filter(flight => flight.origin.toLowerCase() === origin.toLowerCase()
      && flight.destination.toLowerCase() === destination.toLowerCase());

    setSearchResults(results);
  };

  return (
    <div>
      <div>
        <div>Origin: </div>
        <input
          className="input is-primary"
          type="text"
          value={origin}
          onChange={e => setOrigin(e.target.value)}
        />
      </div>
      <div>
        <div>Destination: </div>
        <input
          className="input is-primary"
          type="text"
          value={destination}
          onChange={e => setDestination(e.target.value)}
        />
      </div>
      <button
        className="button is-primary"
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>

      <h2>Search Results</h2>
      <FlightList searchResults={searchResults} />
    </div>
  );
};
