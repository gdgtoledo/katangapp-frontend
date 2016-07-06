import React from 'react';

import BusRoutes from '../bus-routes/bus-routes';

export default class Results extends React.Component {

    constructor( props ) {
      super( props );
    }

    static propTypes = {
        results: React.PropTypes.isRequired
    };

    render() {
        return (
            <main className='ktg-container--app'>
                <header className="ktg-results__header">
                    <h1 className="ktg-results__title">Results</h1>
                </header>
                <BusRoutes busStopsRoutes={this.props.results}/>
            </main>
        );
    }

}
