import React, {Component } from 'react'
import AppBar from '../containers/AppBar'
import Snackbar from '../containers/Snackbar'
import NavigationDrawer from '../containers/NavigationDrawer'

export default class UIRoot extends Component {
  render() {
    return (
      <div id="ui-root">
      	<AppBar />
      	<NavigationDrawer />
      	{this.props.children}
      	<Snackbar />
      </div>
    )
  }
}