import React from 'react'
import {green500, green700} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
  },
  appBar: {
    height: 48,
  },
  navDrawer : { }
})

export default muiTheme