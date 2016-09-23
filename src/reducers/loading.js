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

import initialLoading from '../stores/initialLoading'

import {
    SET_LOADING
} from '../actions/actions.js'

const loading = ( state = initialLoading, action ) => {
    let nextState
    switch ( action.type ) {
        case SET_LOADING:
            nextState = Object.assign( {}, state, { state: action.state } );
            return nextState
        default:
            nextState = Object.assign( {}, state )
            return nextState
    }
}

export default loading
