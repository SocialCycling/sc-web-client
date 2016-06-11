import React from 'react'
import UIRoot from '../components/UIRoot'
import keycloak from '../keycloak'
import { connect } from 'react-redux'

const UIRootContainer = (props) => (
	<UIRoot {...props} login={keycloak.login} register={keycloak.register} />
)

const mapStateToProps = (state, ownProps) => {
	return {
		authReady : state.auth.ready,
		authenticated : state.auth.authenticated,
	}
}

export default connect(mapStateToProps)(UIRootContainer)