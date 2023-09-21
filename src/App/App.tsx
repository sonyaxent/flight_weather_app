import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { FlightSearch } from '../FlightSearch';

import flightData from '../api/flight.json';

export const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app-name has-text-primary-dark">Flight&Weather App</h1>
      <FlightSearch searchList={flightData} />
    </div>
  );
};

export default App;
