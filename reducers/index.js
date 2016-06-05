import { combineReducers } from 'redux'
import auth from './auth'
import snackbar from './snackbar'
import navigationDrawer from './navigationDrawer'

const rootReducer = combineReducers({
	auth,
	snackbar,
	navigationDrawer
})

export default rootReducer