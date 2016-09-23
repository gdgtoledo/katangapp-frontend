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

export default class Loading extends React.Component {

  constructor( props ) {
      super( props );
  }

  static defaultProps = {
    isLoading: false
  };

  static propTypes = {
    isLoading: React.PropTypes.bool.isRequired
  };

  render() {
    return (
      <aside className={this.props.isLoading ? 'ktg-loading ktg-loading--is-loading' : 'ktg-loading'}>
        <svg className="ktg-loading__spiner" width="200px" height="200px" viewBox="0 0 66 66">
           <circle className="ktg-loading__path" fill="none" strokeWidth="1" strokeLinecap="round" cx="33" cy="33" r="30">
           </circle>
        </svg>
      </aside>
    );
  }

}
