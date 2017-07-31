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

import { connect } from 'react-redux';

import {
  setLoading,
  setIntroShowed,
  setMetersAroundMe,
  setCoordsAroundMe,
  setBusStopsAroundMe,
} from '../../actions/getBusStops';
import { goToError, goToResults } from '../../actions/goTo';
import { setError } from '../../actions/errors';
import * as appiBusStops from '../../appi/busStops';
import Home from '../components/home/home';
import colors from '../styles/colors';
import ERRORS from '../../constants/errors';

const showIntroAndSetToShowed = () => {
  return (dispatch, getState) => {
    const introIsNotShowed = !getState().intro.state;
    if (introIsNotShowed) {
      setTimeout(function() {
        dispatch(setIntroShowed(true));
      }, 2000);
    }
  };
};

const setErrorWhenUserHaveProblemsWithGeolocation = (error = ERRORS['GEOLOCATION_HAS_ERRORS']) => {
  return dispatch => {
    dispatch(setError(error));
    dispatch(setLoading(false));
    dispatch(goToError());
  };
};

const setCoordsAroundMeAndReturnPosition = coords => {
  return (dispatch, getState) => {
    dispatch(setCoordsAroundMe(coords));
    return {
      coords: getState().positionAroundMe.coords,
      meters: getState().positionAroundMe.meters,
    };
  };
};

const getBusStopsAroundMeAndGoToResults = coords => {
  return dispatch => {
    const position = dispatch(setCoordsAroundMeAndReturnPosition(coords));
    const fetchBusStopsAroundMe = position => appiBusStops.fetchAroundMe(position);

    return fetchBusStopsAroundMe(position)
      .then(
        busStopsAroundMe => busStopsAroundMe.json(),
        error => {
          dispatch(setError(error.message));
          dispatch(setLoading(false));
          dispatch(goToError());
        },
      )
      .then(busStopsAroundMe => {
        const areBusStopsEmpty = busStopsAroundMe.paradas.length === 0;
        if (areBusStopsEmpty) {
          dispatch(setError(ERRORS['METERS_AROUND_ME_SELECTION_NOT_HAVE_BUS_STOPS']));
          dispatch(setLoading(false));
          dispatch(goToError());
        } else {
          dispatch(setBusStopsAroundMe(busStopsAroundMe));
          dispatch(setLoading(false));
          dispatch(goToResults());
        }
      });
  };
};

const mapStateToProps = state => {
  return {
    meters: state.positionAroundMe.meters,
    coords: state.positionAroundMe.coords,
    loading: state.loading.state,
    isIntroShowed: state.intro.state,
    shouldBeSearchHidden: state.loading.state || !state.intro.state,
    colorPrimary: colors.primary,
    colorSecondary: colors.secondary,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: isLoading => {
      dispatch(setLoading(isLoading));
    },
    setMetersAroundMe: meters => {
      dispatch(setMetersAroundMe(meters));
    },
    getBusStopsAroundMeAndGoToResults: coords => {
      dispatch(getBusStopsAroundMeAndGoToResults(coords));
    },
    showIntroAndSetToShowed: () => {
      dispatch(showIntroAndSetToShowed());
    },
    setErrorWhenUserHaveProblemsWithGeolocation: () => {
      dispatch(setErrorWhenUserHaveProblemsWithGeolocation());
    },
  };
};

const GetBusStopsGeoState = connect(mapStateToProps, mapDispatchToProps)(Home);

export default GetBusStopsGeoState;
