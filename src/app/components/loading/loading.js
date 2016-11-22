import React, { PropTypes } from 'react'

const Loading = ( { isLoading } ) => (
    <aside className={ isLoading ? 'ktg-loading ktg-loading--is-loading' : 'ktg-loading' }>
      <svg className="ktg-loading__spiner" width="200px" height="200px" viewBox="0 0 66 66">
         <circle className="ktg-loading__path" fill="none" strokeWidth="1" strokeLinecap="round" cx="33" cy="33" r="30">
         </circle>
      </svg>
    </aside>
)

Loading.propTypes = {
    isLoading: PropTypes.bool
}

export default Loading
