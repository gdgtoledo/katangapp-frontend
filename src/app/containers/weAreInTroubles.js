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

import { goToHome } from '../../actions/goTo';
import Error from '../components/error/error';
import ERRORS from '../../constants/errors';

const mapStateToProps = state => {
  return {
    error: state.error.message,
    labelActionButton: ERRORS['COME_BACK_TO_HOME'],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickActionButton: () => {
      dispatch(goToHome());
    },
  };
};

const WeAreInTroubles = connect(mapStateToProps, mapDispatchToProps)(Error);

export default WeAreInTroubles;
