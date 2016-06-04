import {AUTH_LOGOUT, HIDE_SNACKBAR} from '../constants/actions'

const initialState = {
	open : false,		// should show snackbar ?
	type : undefined,	// id of the message to display
	payload : undefined // additional info
}

export default function snackbar(state = initialState, action) {
	switch (action.type) {
		// actions without payload
		case AUTH_LOGOUT:
			return { 
				open : true, 
				type : action.type
			}
		case HIDE_SNACKBAR:
			return {
				open : false
			}
		default:
			return state
	}

}