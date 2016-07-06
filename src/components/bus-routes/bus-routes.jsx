import React from 'react';

import BusRoute from '../bus-route/bus-route';

export default class BusRoutes extends React.Component {

    constructor( props ) {
      super( props );
    }

    static propTypes = {
        busStopsRoutes: React.PropTypes.isObject
    };

    render() {
        return (
            <ul className='ktg-list ktg-list--reset'>
                <li>
                    <BusRoute/>
                </li>
            </ul>
        );
    }

}
