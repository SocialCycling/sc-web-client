import React from 'react'
import Snackbar from 'material-ui/Snackbar'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import hideSnackbar from '../actions/snackbar'
import keycloak from '../keycloak'
import {getApproximatePosition} from '../actions/geolocation'

import { AUTH_LOGOUT, GEOLOCATION_ERROR } from '../constants/actions'

const values = {
	AUTH_LOGOUT : {
		message : (payload) => ("You have been logged out"),
		actionLabel : "relogin",
		action : (payload, dispatch) => { keycloak.login() }
	},
	GEOLOCATION_ERROR : {
		message : (payload) => (
			"Cannot determine your current position" + (
				payload.message
				? ": " + payload.message
				: ""
			)
		),
		action : (payload, dispatch) => {}
	}
}


const SnackbarContainer = (props) => (
	<Snackbar {...props} autoHideDuration={5000} />
)

const mapStateToProps = (state, ownProps) => {
	return {
		open : state.snackbar.open,
		message : values[state.snackbar.type] 
			&& values[state.snackbar.type].message(state.snackbar.payload) 
			|| '',
		action : values[state.snackbar.type] 
			&& values[state.snackbar.type].actionLabel,
		// first - bind payload
		onActionTouchTap : values[state.snackbar.type] 
			&& values[state.snackbar.type].action.bind(null, state.snackbar.payload)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onRequestClose : bindActionCreators(hideSnackbar, dispatch),
	dispatch
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...ownProps,
	...stateProps,
	...dispatchProps,
	// second - bind dispatch
	onActionTouchTap : stateProps.onActionTouchTap 
		&& stateProps.onActionTouchTap.bind(null, dispatchProps.dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SnackbarContainer)