import {
  GEOLOCATION_REQUEST,
  GEOLOCATION_SUCCESS,
  GEOLOCATION_ERROR
} from '../constants/actions'

export function getApproximatePosition() {
  return (dispatch) => {
    dispatch({
      type : GEOLOCATION_REQUEST
    })
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({
          type : GEOLOCATION_SUCCESS,
          payload : position
        })
      },
      (positionError) => {
        dispatch({
          type : GEOLOCATION_ERROR,
          payload : positionError,
          error : true
        })
      },
      {
        maximumAge : Infinity
      }
    );
  }
}

export function getPrecisePosition() {
  return (dispatch) => {
    dispatch({
      type : GEOLOCATION_REQUEST
    })
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({
          type : GEOLOCATION_SUCCESS,
          payload : position
        })
      },
      (positionError) => {
        dispatch({
          type : GEOLOCATION_ERROR,
          payload : positionError,
          error : true
        })
      },
      {
        enableHighAccuracy : true
      }
    );
  }
}