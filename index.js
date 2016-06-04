import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import muiTheme from './styling'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

import './index.css'

injectTapEventPlugin()

const store = configureStore()

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)