import React from 'react'
import AppBar from '../components/AppBar'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { navigationDrawerToggle } from '../actions/navigationDrawer'


const mapDispatchToProps = {
	onLeftIconButtonTouchTap : navigationDrawerToggle
}

export default connect(null, mapDispatchToProps)(AppBar)