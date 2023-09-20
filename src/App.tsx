import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { FlightSearch } from './FlightSearch/FlightSearch';

import flightData from './flight.json';

export const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="has-text-primary-dark">Flight&Weather App</h1>
      <FlightSearch {...flightData} />
    </div>
  );
};

export default App;
