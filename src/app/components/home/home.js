/**
 *    Copyright 2016-today Software swcraftersclm
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
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

import Intro from '../intro/intro';
import Search from '../search/search';
import Loading from '../loading/loading';

const Home = createReactClass({
  componentDidMount: function() {
    this.props.showIntroAndSetToShowed();
  },

  propTypes: {
    meters: PropTypes.number.isRequired,
    coords: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    setMetersAroundMe: PropTypes.func.isRequired,
    getBusStopsAroundMeAndGoToResults: PropTypes.func.isRequired,
    onProblemsWithGeolocation: PropTypes.func,
    setLoading: PropTypes.func,
    showIntroAndSetToShowed: PropTypes.func.isRequired,
    colorPrimary: PropTypes.string,
    colorSecondary: PropTypes.string,
    isIntroShowed: PropTypes.bool,
    shouldBeSearchHidden: PropTypes.bool,
    setErrorWhenUserHaveProblemsWithGeolocation: PropTypes.func.isRequired,
  },

  render() {
    return (
      <div className="ktg-home">
        <Intro
          colorPrimary={this.props.colorPrimary}
          colorSecondary={this.props.colorSecondary}
          isIntroShowed={this.props.isIntroShowed}
        />

        <Search
          shouldBeHidden={this.props.shouldBeSearchHidden}
          meters={this.props.meters}
          coords={this.props.coords}
          setMetersAroundMe={this.props.setMetersAroundMe}
          getBusStopsAroundMe={this.props.getBusStopsAroundMeAndGoToResults}
          onProblemsWithGeolocation={this.props.setErrorWhenUserHaveProblemsWithGeolocation}
          setLoading={this.props.setLoading}
        />

        <Loading isLoading={this.props.loading} />
      </div>
    );
  },
});

export default Home;
