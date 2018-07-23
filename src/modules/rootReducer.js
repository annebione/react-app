import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import scheduleReducer from '../app/containers/schedule/ScheduleReducer';
import schedulingReducer from '../app/containers/scheduling/SchedulingReducer';

export default combineReducers({
  routing: routerReducer,
  schedule: scheduleReducer,
  scheduling: schedulingReducer
})