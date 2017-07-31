import React, { PropTypes } from 'react';

import BusStop from '../bus-stop/bus-stop';

const BusStops = ({ busStops }) =>
  <section className="ktg-bus-stops">
    {busStops.map((busStop, id) =>
      <BusStop key={id} description={busStop.parada.address} meters={busStop.distancia} routes={busStop.tiempos} />,
    )}
  </section>;

BusStops.propTypes = {
  busStops: PropTypes.array,
};

export default BusStops;
