import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GeolocationActions from '../actions/geolocation'

class PositionTracker extends Component {

	constructor(props) {
		super(props)
	}

  render() {
    return null
  }

  componentDidMount() {
    const {dispatch, getApproximatePosition, getPrecisePosition} = this.props
    if (navigator.geolocation) {
      getApproximatePosition()
      getPrecisePosition()
    }
  }

}

export default connect(null, GeolocationActions)(PositionTracker)