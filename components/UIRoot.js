import React, {Component } from 'react'
import AppBar from '../containers/AppBar'
import Snackbar from '../containers/Snackbar'
import NavigationDrawer from '../containers/NavigationDrawer'
import CircularProgress from 'material-ui/CircularProgress'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const centeredStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const UIRoot = ({authReady, authenticated, login, register, children, location}) => {
	var content
  const { pathname } = location

  if (!authReady) {
    content = (
      <CircularProgress style={centeredStyle} key="checking_auth" />
    )
  } else if (!authenticated && (
      pathname.startsWith("/trips/manage")
      || pathname.startsWith("/trips/create")
      || pathname.startsWith("/dialogs")
      || pathname.startsWith("/notifications")
    )) {
    content = (
      <Dialog 
          key="unauthorized_msg"
          title="Authorization requiered"
          actions={[
            <FlatButton label="Register" primary onTouchTap={register} />,
            <FlatButton label="Log in" primary keyboardFocused onTouchTap={login} />
          ]}
          modal={true}
          open={true} >
          Please log in to see this page
        </Dialog>
    )
  } else {
    content = children
  }
  return (
    <div id="ui-root">
      <AppBar />
      <NavigationDrawer />
      {content}
      <Snackbar />
    </div>
  )
}

export default UIRoot