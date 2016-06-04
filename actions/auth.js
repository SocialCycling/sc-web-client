import keycloak from '../keycloak'
import {
	AUTH_INIT_SUCCESS, 
	AUTH_SUCCESS,
	AUTH_ERROR,
	AUTH_REFRESH_SUCCESS,
	AUTH_REFRESH_ERROR,
	AUTH_LOGOUT,
	AUTH_TOKEN_EXPIRED
} from '../constants/actions'

export function authInitSuccess(authenticated) {
	return {
		type : AUTH_INIT_SUCCESS,
		payload : {authenticated}
	}
}

export function authSuccess() {
	return {
		type : AUTH_SUCCESS,
		payload : {
			token : keycloak.token,
			userid : keycloak.subject,
			username : keycloak.idTokenParsed.preferred_username,
			name : keycloak.idTokenParsed.name,
			firstName : keycloak.idTokenParsed.given_name,
			lastName : keycloak.idTokenParsed.family_name,
			email : keycloak.idTokenParsed.email,
		}
	}
}

export function authError() {
	return {
		type : AUTH_ERROR,
		error : true
	}
}

export function refreshSuccess() {
	return {
		type : AUTH_REFRESH_SUCCESS,
		payload : {
			token : keycloak.token,
		}
	}
}

export function refreshError() {
	return {
		type : AUTH_REFRESH_ERROR,
		error : true
	}
}

export function logoutNotification() {
	return {
		type : AUTH_LOGOUT,
		error : false
	}
}

export function tokenExpired() {
	return {
		type : AUTH_TOKEN_EXPIRED,
		error : false
	}
}