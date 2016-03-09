import React from 'react';

import { LogoVerticalWhite } from '../logo/logo.jsx';
import { Geolocalizer } from '../geolocalizer/geolocalizer.jsx';
import { Slider } from '../slider/slider.jsx';

//import { requestBusStopsAroundMe } from '../../actions/actions.js';

export default class Home extends React.Component {

  constructor( props ) {
    super( props );
  }

  state = {
    meters: this.props.meters,
    coors: this.props.coors
  };

  static defaultProps = {
    meters: '50',
    coors: {
      latitude: 0,
      longitude: 0
    }
  };

  setMeters = ( meters ) => {
    this.setState( { meters: meters } );
  };

  setCoorsAroundMe = ( latitude, longitude ) => {
    this.setState({
      coors: {
        latitude: latitude,
        longitude: longitude
      }
    });
    this.getBusStopsAroundMe( this.state.coors, this.state.meters );
  };

  render() {
    return (
      <main className='ktg-home'>
        <header className='ktg-home__header'>
          <LogoVerticalWhite />
        </header>
        <form id='ktg-form-metersAround'>
          <Slider meters={this.state.meters} setMeters={this.setMeters}/>
          <Geolocalizer coors={this.state.coors} setCoorsAroundMe={this.setCoorsAroundMe}/>
        </form>
      </main>
    );
  }

}
