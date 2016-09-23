/**
 *    Copyright 2016-today Software Craftmanship Toledo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import LogoVerticalWhite from '../logo/logo.jsx'
import Geolocalizer from '../geolocalizer/geolocalizer.jsx'
import Slider from '../slider/slider.jsx'
import Loading from '../Loading/loading.jsx'

export default class Home extends React.Component {

    constructor( props ) {
        super( props );
    }

    static propTypes = {
        meters: React.PropTypes.number.isRequired,
        setMetersAroundMe: React.PropTypes.func.isRequired,
        getBusStopsAroundMeAndGoToResults: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        meters: 130,
        setMetersAroundMe: () => true,
        getBusStopsAroundMeAndGoToResults: () => true
    };

    state = {
        loading: false
    };

    setLoading = ( isLoading ) => {
        this.setState( { loading: isLoading } );
    };

    render() {
        return (
            <main className='ktg-home'>
                <header className={this.state.loading ? 'ktg-home__header ktg-home__header--is-loading' : 'ktg-home__header'}>
                <LogoVerticalWhite />
                </header>
                <form id='ktg-home_metersAround' className={this.state.loading ? 'ktg-home__metersAround ktg-home__metersAround--is-loading' : 'ktg-home__metersAround'}>
                    <Slider meters={this.props.meters} setMeters={this.props.setMetersAroundMe} />
                    <Geolocalizer coords={this.props.coords} setCoords={this.props.getBusStopsAroundMeAndGoToResults} setLoading={this.setLoading}/>
                </form>
                <Loading isLoading={this.state.loading}/>
            </main>
        );
    }

}
