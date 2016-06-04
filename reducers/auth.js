import {AUTH_INIT_SUCCESS, AUTH_SUCCESS, AUTH_REFRESH_SUCCESS} from '../constants/actions'

const initialState = {
	ready : false,
}

export default function auth(state = initialState, action) {
	switch (action.type) {
		case AUTH_INIT_SUCCESS:
			return { 
				...state,
				ready : true, 
				authenticated : action.payload.authenticated 
			}
		case AUTH_SUCCESS:
			return {
				...state,
				authenticated : true,
				...action.payload
			}
		case AUTH_REFRESH_SUCCESS:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}

}