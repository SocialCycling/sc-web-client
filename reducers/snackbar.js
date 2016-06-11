import {AUTH_LOGOUT, GEOLOCATION_ERROR, HIDE_SNACKBAR} from '../constants/actions'

const initialState = {
	open : false,		// should show snackbar ?
	type : undefined,	// id of the message to display
	payload : undefined // additional info
}

export default function snackbar(state = initialState, action) {
	switch (action.type) {
		case AUTH_LOGOUT:
		case GEOLOCATION_ERROR:
			return {
				open : true,
				type : action.type,
				payload : action.payload
			}
		case HIDE_SNACKBAR:
			return {
				open : false
			}
		default:
			return state
	}

}