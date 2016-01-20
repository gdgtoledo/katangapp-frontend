import React from 'react';
import ReactDOM from 'react-dom';

var Slider = React.createClass ({
  getInitialState: function() {
    return {
      meters: '12',
      styles: {
        output: {
          opacity: '0.3'
        }
      }
    }
  },
  showMeters: function (event) {
    this.state.styles.output.opacity = '1';
    this.render();
    event.preventDefault();
  },
  hideMeters: function (event) {
    this.state.styles.output.opacity = '0.3';
    this.render();
    event.preventDefault();
  },
  getMeters: function (event) {
    var meters = ReactDOM.findDOMNode(this.refs.metersAround).value;
    this.setState({meters: meters});
    this.showMeters(event);
    this.render();
    event.preventDefault();
  },
  render: function () {
    return (
      <div id="slider" className="ktg-slider">
        <input
          name="metersAround"
          ref="metersAround"
          id="slide"
          type="range"
          min="0"
          max="1000"
          step="25"
          value={this.state.meters}
          onDragstart={this.showMeters}
          onDragend={this.hideMeters}
          onChange={this.getMeters}/>
        <output
          htmlFor="metersAround"
          ref="showMeters"
          style={this.state.styles.output}>
            {this.state.meters}
            <span className="ktg-slider__output-unit">metros</span>
        </output>
		  </div>
    );
  }
});

module.exports = Slider;
