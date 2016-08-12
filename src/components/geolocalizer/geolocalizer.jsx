import React from 'react';

export default class Geolocalizer extends React.Component {

  constructor( props ) {
    super( props );
  }

  static defaultProps = {
    setCoords: () => true,
    setLoading: () => true
  };

  static propTypes = {
    setCoords: React.PropTypes.func,
    setLoading: React.PropTypes.func
  };

  geolocalizeMe = () => {
    let success = ( position )  => {
      this.props.setCoords( { latitude: position.coords.latitude, longitude: position.coords.longitude } );
      console.log('get coords html 5 api is success');
    };
    let error = ( err ) => {
      throw 'sorry you have and error with ' + err;
    };
    if ( navigator.geolocation ) {
      this.props.setLoading(true);
      navigator.geolocation.getCurrentPosition( success, error );
    } else {
      throw 'geolocalization is not supported by browser';
    }
  };

  render() {
    return (
      <button type='button' className='ktg-geolocalizer' onClick={this.geolocalizeMe}>
      </button>
    );
  }

}
