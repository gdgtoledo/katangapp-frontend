import React from 'react';
import ReactDOM from 'react-dom';

var Slider = React.createClass ({
  propTypes: {
    min: React.PropTypes.string,
    max: React.PropTypes.string,
    step: React.PropTypes.string,
    meters: React.PropTypes.string.isRequired
  },
  getDefaultProps: function () {
    return {
      min: '0',
      max: '1000',
      step: '25'
    }
  },
  getInitialState: function () {
    return {
      meters: this.props.meters,
      active: false
    }
  },
  showMeters: function (event) {
    console.log('drag in');
    this.setState({active: true});
  },
  hideMeters: function (event) {
    this.setState({active: false});
  },
  getMeters: function (event) {
    var meters = ReactDOM.findDOMNode(this.refs.metersAround).value;
    this.setState({meters: meters});
  },
  render: function () {
    return (
      <div id="ktg-slider" className="ktg-slider">
        <input
          name="metersAround"
          ref="metersAround"
          type="range"
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.state.meters}
          onFocus={this.showMeters}
          onBlur={this.hideMeters}
          onChange={this.getMeters}/>
        <output
          for="metersAround"
          ref="showMeters"
          className={this.state.active ? 'is-active' : ''}>
            {this.state.meters}
            <span className="ktg-slider__output-unit">metros</span>
        </output>
		  </div>
    );
  }
});

module.exports = Slider;
