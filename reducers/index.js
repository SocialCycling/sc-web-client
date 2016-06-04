import { combineReducers } from 'redux'
import auth from './auth'
import snackbar from './snackbar'

const rootReducer = combineReducers({
	auth,
	snackbar
})

export default rootReducer