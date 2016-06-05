import React from 'react'
import NavigationDrawer from '../components/NavigationDrawer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { navigationDrawerChange, navigationDrawerToggle } from '../actions/navigationDrawer'
import keycloak from '../keycloak'
import links from '../config/links.json'


const NavigationDrawerContainer = (props) => (
	<NavigationDrawer {...props} 
		login = {keycloak.login}
		register = {keycloak.register}
		accountManagement = {keycloak.accountManagement}
		logout = {keycloak.logout.bind(null, {redirectUri : links.self})} />
)

const mapStateToProps = (state, ownProps) => {
	return {
		open : state.navigationDrawer.open,
		authReady : state.auth.ready,
		authenticated : state.auth.authenticated,
		name : state.auth.name,
	}
}

const mapDispatchToProps = {
	onRequestChange : navigationDrawerChange,
	navigationDrawerToggle : navigationDrawerToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawerContainer)