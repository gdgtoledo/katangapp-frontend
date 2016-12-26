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

import React, { PropTypes } from 'react'

import Geolocalizer from '../geolocalizer/geolocalizer.jsx'
import Slider from '../slider/slider.jsx'
import Loading from '../Loading/loading'

const Home = ( { meters, coords, loading, setLoading, setMetersAroundMe, getBusStopsAroundMe } ) => (
    <main className='ktg-home'>
        <header className={loading ? 'ktg-home__header ktg-home__header--is-loading' : 'ktg-home__header'}>
            <h1 className="ktg-home__title">Pagina de inicio de katanga</h1>
        </header>
        <form id='ktg-home_meters-around' className={loading ? 'ktg-home__meters-around ktg-home__meters-around--is-loading' : 'ktg-home__meters-around'}>
            <Slider meters={meters} setMeters={setMetersAroundMe} />
            <Geolocalizer coords={coords} setCoords={getBusStopsAroundMe} setLoading={setLoading}/>
        </form>
        <Loading isLoading={loading}/>
    </main>
)

Home.propTypes = {
    meters: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    setMetersAroundMe: PropTypes.func.isRequired,
    getBusStopsAroundMe: PropTypes.func.isRequired,
    setLoading: PropTypes.func
}

export default Home
