import { createStore } from 'redux'
import { geolocalize } from '../reducers/reducers.js'

let store = createStore(geolocalize)

