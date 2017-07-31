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

//
//  actions types
//

export const SET_BUS_STOPS_AROUND_ME            = 'SET_BUS_STOPS_AROUND_ME';
export const SET_METERS_AROUND_ME               = 'SET_METERS_AROUND_ME';
export const SET_COORDS_AROUND_ME               = 'SET_COORDS_AROUND_ME';
export const SET_LOADING                        = 'SET_LOADING';
export const SET_INTRO_SHOWED                   = 'SET_INTRO_SHOWED';

//
//  actions creators
//

export const setIntroShowed = ( state ) => {
  return {
    type: SET_INTRO_SHOWED,
    state: state,
  };
};

export const setLoading = ( state ) => {
  return {
    type: SET_LOADING,
    state: state,
  };
};

export const setMetersAroundMe = ( meters ) => {
  return {
    type: SET_METERS_AROUND_ME,
    meters: meters,
  };
};

export const setCoordsAroundMe = ( coords ) => {
  return {
    type: SET_COORDS_AROUND_ME,
    coords: coords,
  };
};

export const setBusStopsAroundMe = ( busStops ) => {
  return {
    type: SET_BUS_STOPS_AROUND_ME,
    busStopsAroundMe: busStops,
  };
};

