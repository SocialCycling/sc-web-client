import {NAVIGATION_DRAWER_CHANGE, NAVIGATION_DRAWER_TOGGLE} from '../constants/actions'

export function navigationDrawerChange(open, reason) {
	return {
		type : NAVIGATION_DRAWER_CHANGE,
		payload : {
			open,
			reason
		}
	}
}

export function navigationDrawerToggle() {
	return {
		type : NAVIGATION_DRAWER_TOGGLE
	}
}