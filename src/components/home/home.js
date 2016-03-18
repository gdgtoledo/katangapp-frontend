import React from 'react';

import LogoVerticalWhite from '../logo/logo.jsx'
import Geolocalizer from '../geolocalizer/geolocalizer.jsx'
import Slider from '../slider/slider.jsx'

const Home = ( { meters, setMetersAroundMe, getBusStopsAroundMe } ) => (
  <main className='ktg-home'>
    <header className='ktg-home__header'>
      <LogoVerticalWhite />
    </header>
    <form id='ktg-form-metersAround'>
      <Slider meters={meters} setMeters={setMetersAroundMe} />
      <Geolocalizer setCoors={getBusStopsAroundMe}/>
    </form>
  </main>
)

Home.propTypes = {
  meters: React.PropTypes.number.isRequired,
  setMetersAroundMe: React.PropTypes.func.isRequired,
  getBusStopsAroundMe: React.PropTypes.func.isRequired
}


export default Home
