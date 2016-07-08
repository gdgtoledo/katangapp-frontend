import React from 'react';

export default class Loading extends React.Component {

  constructor( props ) {
      super( props );
  }

  static defaultProps = {
    isLoading: false
  };

  static propTypes = {
    isLoading: React.PropTypes.boolean
  };

  render() {
    return (
      <aside className={this.props.isLoading ? 'ktg-loading ktg-loading--is-loading' : 'ktg-loading'}>
        <svg className="ktg-loading__spiner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
           <circle className="ktg-loading__path" fill="none" strokeWidth="2" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </aside>
    );
  }

}
