import React from 'react'
import NavigationDrawer from '../components/NavigationDrawer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import { navigationDrawerChange } from '../actions/navigationDrawer'
import keycloak from '../keycloak'
import links from '../config/links.json'


const NavigationDrawerContainer = (props) => (
	<NavigationDrawer {...props} />
)

const mapStateToProps = (state, ownProps) => {
	return {
		open : state.navigationDrawer.open,
		authReady : state.auth.ready,
		authenticated : state.auth.authenticated,
		name : state.auth.name,
		login : keycloak.login,
		register : keycloak.register,
		accountManagement : keycloak.accountManagement,
		logout : keycloak.logout.bind(null, {redirectUri : links.self})
	}
}

const mapDispatchToProps = {
	onRequestChange : navigationDrawerChange
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationDrawerContainer))