import React from 'react';
import BusStopsList from '../bus-stops-list/bus-stops-list';

export default class Results extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <articles>
        <header className="ktg-results__header">
          <h1 className="ktg-results__title">Results</h1>
        </header>
        <BusStopsList />
      </articles>
    );
  }
}

