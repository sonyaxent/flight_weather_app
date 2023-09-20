import React, { useState } from 'react';

export interface Flight {
  id: number;
  origin: string;
  destination: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
}

export interface FlightListProps {
  searchResults: Flight[];
}

export const FlightList: React.FC<FlightListProps> = ({ searchResults }) => {
  const [sortBy, setSortBy] = useState<'time' | 'price'>('time');
  const [sortedResults, setSortedResults] = useState<Flight[]>(searchResults);

  // Function to handle sorting by time
  const sortByTime = () => {
    const sorted = [...searchResults]
      .sort((a, b) => a.departureTime.localeCompare(b.departureTime));

    setSortBy('time');
    setSortedResults(sorted);
  };

  // Function to handle sorting by price
  const sortByPrice = () => {
    const sorted = [...searchResults]
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

    setSortBy('price');
    setSortedResults(sorted);
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className={`button ${sortBy === 'time' ? 'is-primary' : ''}`}
          onClick={sortByTime}
        >
          Sort by Time
        </button>
        <button
          type="button"
          className={`button ${sortBy === 'price' ? 'is-primary' : ''}`}
          onClick={sortByPrice}
        >
          Sort by Price
        </button>
      </div>

      {sortedResults.length > 0 ? (
        <ul>
          {sortedResults.map(flight => (
            <li className="is-active is-primary" key={flight.id}>
              {`${flight.airline} Flight ${flight.id}: `}
              {flight.origin}
              to
              {flight.destination}
              (
              {flight.departureTime}
              -
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
