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

import ButtonTertiaryOutline from '../buttons/btn-tertiary-outline';

const Error = ({ error, labelActionButton, onClickActionButton }) =>
  <section className="ktg-error ktg-error-container">
    <h2 className="ktg-error__apologies">
      {error}
    </h2>
    <ButtonTertiaryOutline label={labelActionButton} onClick={onClickActionButton} />
  </section>;

Error.propTypes = {
  labelActionButton: PropTypes.string.isRequired,
  onClickActionButton: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default Error;
