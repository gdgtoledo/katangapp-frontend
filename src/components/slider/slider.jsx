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
import ReactDOM from 'react-dom';

export default class Slider extends React.Component {

  constructor( props ) {
    super( props );
  }

  static defaultProps = {
    min: '0',
    max: '1000',
    step: '25',
    setMeters: ( meters ) => { this.setState( { meters: meters } ) }
  };

  static propTypes = {
    min: React.PropTypes.string,
    max: React.PropTypes.string,
    step: React.PropTypes.string,
    meters: React.PropTypes.number.isRequired,
    setMeters: React.PropTypes.func
  };

  state = {
    active: false
  };

  showMeters = () => {
    this.setState( { active: true } );
  };

  hideMeters = () => {
    this.setState( { active: false } );
  };

  updateMeters = () => {
    let meters = ReactDOM.findDOMNode( this.refs.metersAround ).value;
    meters = parseInt( meters, 10 );
    this.props.setMeters( meters );
  };

  render() {
    return (
      <div id='ktg-slider' className='ktg-slider'>
        <input
          name='metersAround'
          ref='metersAround'
          type='range'
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.props.meters}
          onFocus={this.showMeters}
          onBlur={this.hideMeters}
          onChange={this.updateMeters}/>
        <output
          htmlFor='metersAround'
          ref='showMeters'
          className={this.state.active ? 'ktg-slider__output is-active' : 'ktg-slider__output'}>
            {this.props.meters}
            <span className='ktg-slider__output-unit'>metros</span>
        </output>
      </div>
    );
  }

}
