import React, { PropTypes } from 'react'
import BusRoute from '../bus-route/bus-route.js';

const BusStop = ( { key, description, meters, routes} ) => (
    <article className="ktg-bus-stop" key={key}>
        <table className="ktg-bus-stop__table">
            <thead>
                <tr>
                    <th colSpan="2">
                        <span className="ktg-bus-stop__description">
                            {description}
                        </span>
                        <span className="ktg-bus-stop__distance">
                            ({meters})
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                { routes.map( route => <BusRoute key={route.idl} name={route.idl} time={route.time} />) }
            </tbody>
        </table>
    </article>
)

BusStop.propTypes = {
    routes: PropTypes.array
}

export default BusStop
