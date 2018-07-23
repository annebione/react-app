import * as types from './SchedulingActionTypes';

const inititalState = {
    client: [],
    services: [],
    professionals: [],
    fetching: false,
    fetched: false,
    error: null
}

function scheduleReducer(state = inititalState, action) {
      console.log(action);
      switch (action.type) {
          case types.FETCHING_CLIENT : {
            return {...state, fetching: true}
          }
          case types.CLIENT_FETCH_CANCEL: {
            return state
          }
          case types.CLIENT_FETCH_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                client: action.payload
            }
          }
          case types.CLIENT_FETCH_ERROR: {
            return {
              ...state,
              fetching: false,
              error: action.payload
            }
          }
          case types.FETCHING_PROFESSIONALS : {
            return {...state, fetching: true}
          }
          case types.PROFESSIONALS_FETCH_CANCEL: {
            return state
          }
          case types.PROFESSIONALS_FETCH_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                professionals: action.payload
            }
          }
          case types.PROFESSIONALS_FETCH_ERROR: {
            return {
              ...state,
              fetching: false,
              error: action.payload
            }
          }
          case types.FETCHING_SERVICES : {
            return {...state, fetching: true}
          }
          case types.SERVICES_FETCH_CANCEL: {
            return state
          }
          case types.SERVICES_FETCH_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                services: action.payload
            }
          }
          case types.SERVICES_FETCH_ERROR: {
            return {
              ...state,
              fetching: false,
              error: action.payload
            }
          }          
          default:
          return state

      }
  }

  export default scheduleReducer;