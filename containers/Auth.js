import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import keycloak, { TOKEN_REFRESH_INTERVAL, TOKEN_MIN_VALIDITY } from '../keycloak'
import * as AuthActions from '../actions/auth'

class Auth extends Component {

	constructor(props) {
		super(props)
    }

	componentWillMount() {
		const { dispatch } = this.props
		var intervalId;

		keycloak.onReady = function(authenticated) { 
			dispatch(AuthActions.authInitSuccess(authenticated));
		};
		keycloak.onAuthSuccess = function() { 
			dispatch(AuthActions.authSuccess())
			intervalId = setInterval(
				() => keycloak.updateToken(TOKEN_MIN_VALIDITY),
				TOKEN_REFRESH_INTERVAL
			)
		};
		keycloak.onAuthError = function() { 
			dispatch(AuthActions.authError());
		};
		keycloak.onAuthRefreshSuccess = function() { 
			dispatch(AuthActions.refreshSuccess());
		};
		keycloak.onAuthRefreshError = function() { 
			dispatch(AuthActions.refreshError());
			keycloak.clearToken();
		};
		keycloak.onAuthLogout = () => { 
			clearInterval(intervalId)
			dispatch(AuthActions.logoutNotification());
		};
		keycloak.onTokenExpired = function() { 
			dispatch(AuthActions.tokenExpired());
		};


		keycloak.init({ onLoad: 'check-sso' });
	}

	render() {
		return null
	}
}

Auth.propTypes = {
	dispatch: PropTypes.func.isRequired
}

export default connect()(Auth)