import config from  '../app/config.js'

let fetchBusStopsAroundMe = ( position ) => {
    return fetch( config.api.protocol + config.api.domain + '/' + config.api.endpoints.busStops + '?lt=' + position.coords.latitude + '&ln=' + position.coords.longitude + '&r=' + position.meters, { mode: 'cors' } );
}

export default fetchBusStopsAroundMe
