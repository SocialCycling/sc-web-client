import {NAVIGATION_DRAWER_CHANGE, NAVIGATION_DRAWER_TOGGLE} from '../constants/actions'

const initialState = {
	open : false,
}

export default function navigationDrawer(state = initialState, action) {
	switch (action.type) {
		case NAVIGATION_DRAWER_CHANGE:
			return { 
				...state,
				open : action.payload.open 
			}
		case NAVIGATION_DRAWER_TOGGLE:
			return { 
				...state,
				open : !state.open
			}
		default:
			return state
	}

}