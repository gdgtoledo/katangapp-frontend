import React from 'react';

export default class Geolocalizer extends React.Component {

  constructor( props ) {
    super( props );
  }

  static defaultProps = {
    setCoors: () => true
  };

  static propTypes = {
    setCoors: React.PropTypes.func
  };

  geolocalizeMe = () => {
    let success = ( position )  => {
      this.props.setCoors( position.coors );
    };
    let error = ( err ) => {
      throw 'sorry you have and error with ' + err;
    };
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition( success, error );
    } else {
      throw 'geolocalization is not supported by browser';
    }
  };

  render() {
    return (
      <button type='button' className='ktg-btn--geolocalizer' onClick={this.geolocalizeMe}>
      </button>
    );
  }

}

