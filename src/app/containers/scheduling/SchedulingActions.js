import * as types from './SchedulingActionTypes';


// Client Action Creators

export const clientFetch = name => (
  {
    type: types.FETCHING_CLIENT,
    payload: name
  }
);

export const fetchClientFulfilled = client => (
  {
    type: types.CLIENT_FETCH_FULFILLED,
    payload: client
  }
)

export const clientFetchCancel = () => (
  {
     type: types.CLIENT_FETCH_CANCEL 
  }
);

export const clientFetchError = (err) => (
  {
    type: types.CLIENT_FETCH_ERROR,
    payload: err,
    error: true
  }
);


// Professionals Action Creators

export const professionalsFetch = () => (
  {
    type: types.FETCHING_PROFESSIONALS,
    payload: null
  }
);

export const fetchProfessionalsFulfilled = (professionals) => (
  {
    type: types.PROFESSIONALS_FETCH_FULFILLED,
    payload: professionals
  }
)

export const professionalsFetchCancel = () => (
  {
     type: types.PROFESSIONALS_FETCH_CANCEL 
  }
);

export const professionalsFetchError = (err) => (
  {
    type: types.PROFESSIONALS_FETCH_ERROR,
    payload: err,
    error: true
  }
);


// Services Action Creators

export const servicesFetch = professional => (
  {
    type: types.FETCHING_SERVICES,
    payload: professional
  }
);

export const fetchServicesFulfilled = (services) => (
  {
    type: types.SERVICES_FETCH_FULFILLED,
    payload: services
  }
)

export const servicesFetchCancel = () => (
  {
     type: types.SERVICES_FETCH_CANCEL 
  }
);

export const servicesFetchError = (err) => (
  {
    type: types.SERVICES_FETCH_ERROR,
    payload: err,
    error: true
  }
);


// Scheduling Action Creators

export const scheduleService = schedule => (
  {
    type: types.POSTING_SCHEDULE,
    payload: schedule
  }
);

export const schedulingFulfilled = status => (
  {
    type: types.SCHEDULE_POST_FULFILLED,
    payload: status
  }
)

export const schedulingCancel = () => (
  {
     type: types.SCHEDULE_POST_CANCEL 
  }
);

export const schedulingError = (err) => (
  {
    type: types.SCHEDULE_POST_ERROR,
    payload: err,
    error: true
  }
);
