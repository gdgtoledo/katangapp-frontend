import React, { PropTypes } from 'react'

import Geolocalizer from '../geolocalizer/geolocalizer.jsx'
import Slider from '../slider/slider.jsx'
import Loading from '../Loading/loading'

const Home = ( { meters, coords, loading, setLoading, setMetersAroundMe, getBusStopsAroundMe} ) => (
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
