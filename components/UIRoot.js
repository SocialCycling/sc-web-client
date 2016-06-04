import React, {Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Snackbar from '../containers/Snackbar'

export default class UIRoot extends Component {
  render() {
    return (
      <div id="ui-root">
      	<AppBar title="Social Cycling" />
      	{this.props.children}
      	<Snackbar />
      </div>
    )
  }
}