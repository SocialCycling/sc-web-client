import React, {Component } from 'react'
import AppBar from '../containers/AppBar'
import Snackbar from '../containers/Snackbar'
import NavigationDrawer from '../containers/NavigationDrawer'

const UIRoot = (props) => {
  return (
    <div id="ui-root">
      <AppBar />
      <NavigationDrawer />
      {props.children}
      <Snackbar />
    </div>
  )
}

export default UIRoot