import React from 'react';

export default class Geolocalizer extends React.Component {

  constructor( props ) {
    super( props );
  }

  static defaultProps = {
    setCoorsAroundMe: () => true
  };

  state = {
    latitude: '0',
    longitude: '0'
  };

  static propTypes = {
    setCoorsAroundMe: React.PropTypes.func
  };

  geolocalizeMe = () => {
    let success = ( position )  => {
      this.setState( { latitude: position.coords.latitude } );
      this.setState( { longitude: position.coords.longitude } );
    };
    let error = ( err ) => {
      throw 'sorry you have and error with ' + err;
    };
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition( success, error );
    } else {
      throw 'geolocalization is not supported by browser';
    }
    this.props.setCoorsAroundMe( this.state.latitude, this.state.longitude );
  };

  render() {
    return (
      <button type='button' className='ktg-btn--geolocalizer' onClick={this.geolocalizeMe}>
      </button>
    );
  }

}

