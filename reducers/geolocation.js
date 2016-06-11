import { GEOLOCATION_SUCCESS } from '../constants/actions'

export default function geolocation(state = {}, action) {
  switch (action.type) {
    case GEOLOCATION_SUCCESS:
      return action.payload
    default:
      return state
  }

}