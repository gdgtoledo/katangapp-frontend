import config from  '../app/config.js'

let fetchBusStopsAroundMe = ( position ) => {
    return fetch( config.api.protocol + config.api.domain + '/' + config.api.endpoints.busStops + '?lt=' + position.coords.latitude + '&ln=' + position.coords.longitude + '&r=' + position.meters );
}

const getBusStopsAroundMe = ( position ) => {
    return dispatch => {
        return fetchBusStopsAroundMe(position).then(
            response => {
                dispatch( { type: 'GET_BUS_STOPS_AROUND_ME_SUCCESS', busStopsAroundMe: response } )
            },
            error => {
                dispatch( { type: 'GET_BUS_STOPS_AROUND_ME_ERROR', error: error } )
                throw error
            }
        )
    }
}

export default getBusStopsAroundMe
