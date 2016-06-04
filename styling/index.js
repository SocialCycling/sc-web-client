import React from 'react'
import {green500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
  },
  appBar: {
    height: 48,
  }
})

export default muiTheme