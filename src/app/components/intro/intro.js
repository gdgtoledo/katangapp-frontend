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

import Katanga from '../icons/katanga';

const Intro = ({ colorPrimary, colorSecondary, isIntroShowed }) =>
  <section className={isIntroShowed ? 'ktg-intro ktg-intro--is-showed' : 'ktg-intro'}>
    <Katanga circleFillColor={colorPrimary} circleBorderColor={colorSecondary} busAndTextColor={colorSecondary} />
  </section>;

Intro.propTypes = {
  colorPrimary: PropTypes.string.isRequired,
  colorSecondary: PropTypes.string.isRequired,
  isIntroShowed: PropTypes.bool,
};

export default Intro;
