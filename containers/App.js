import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Auth from './Auth'
import UIRoot from '../components/UIRoot'
import Home from '../components/Home'
import Trips from '../components/Trips'
import Dialogs from '../components/Dialogs'
import Notifications from '../components/Notifications'

export default class App extends Component {
	render() {
		return (
			<div>
				<Auth/>
        <Router history={browserHistory}>
          <Route path="/" component={UIRoot}>
            <IndexRoute component={Home}/>
            <Route path="trips/search" component={Trips}/>
            <Route path="trips/manage" component={Trips}/>
            <Route path="trips/create" component={Trips}/>
            <Route path="trips/details/:tripId" component={Trips}/>
            <Route path="trips/edit/:tripId" component={Trips}/>
            <Route path="dialogs" component={Dialogs}/>
            <Route path="dialogs/:dialogId" component={Dialogs}/>
            <Route path="notifications" component={Notifications}/>
          </Route>
        </Router>
			</div>
		)
	}
}