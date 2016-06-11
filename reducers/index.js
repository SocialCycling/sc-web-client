import { combineReducers } from 'redux'
import auth from './auth'
import geolocation from './geolocation'
import snackbar from './snackbar'
import navigationDrawer from './navigationDrawer'

const rootReducer = combineReducers({
	auth,
  geolocation,
	snackbar,
	navigationDrawer
})

export default rootReducer