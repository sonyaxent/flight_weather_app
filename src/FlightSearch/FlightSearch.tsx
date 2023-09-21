import React, { useState } from 'react';
import { FlightList, Flight } from '../FightList';
import './FlightSearch.scss';

export type FlightSearchProps = {
  searchList: Flight[]
};

export const FlightSearch: React.FC<FlightSearchProps> = ({ searchList }) => {
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Flight[]>([]);

  const handleSearch = () => {
    const results = searchList
      .filter(flight => flight.origin.toLowerCase() === origin.toLowerCase()
      && flight.destination.toLowerCase() === destination.toLowerCase());

    setSearchResults(results);
  };

  return (
    <>
      <div className="flightSearch">
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
          className="button button--search is-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div>
        {searchResults.length > 0 ? (
          <FlightList searchResults={searchResults} />
        ) : (
          <p>Choose your origin and flight destination</p>
        )}
      </div>
    </>
  );
};
