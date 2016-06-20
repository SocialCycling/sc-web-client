import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import auth from './auth'
import geolocation from './geolocation'
import snackbar from './snackbar'
import navigationDrawer from './navigationDrawer'

const rootReducer = combineReducers({
	auth,
  form : formReducer,
  geolocation,
	snackbar,
	navigationDrawer
})

export default rootReducer