import { createLogic } from 'redux-logic';

import * as types from './SchedulingActionTypes';
import * as actions from './SchedulingActions';
import * as api from '../../../mocks/apiMocks';
import toastr from 'toastr';


/**
* Makes request to get clients, then returns their info.
* @return {promise} done - Resolved logic promise
* @throws {error} Error - any fetching error
*/

const clientFetchLogic = createLogic({
    type: types.FETCHING_CLIENT,
    cancelType: types.CLIENT_FETCH_CANCEL,
    latest: true, 
  
    process({ action }, dispatch, done) {
      const uid = action.payload;
      api.returnClients(uid)
        .then((client) => {
           console.log(client);
           dispatch(actions.fetchClientFulfilled(client))})
        .catch(err => {
          console.error(err);
          dispatch(actions.clientFetchError(err))
        })
        .then(() => done())
    }
});


/**
* Makes request to get professionals, then returns their info.
* @return {promise} done - Resolved logic promise
* @throws {error} Error - any fetching error
*/

const professionalsFetchLogic = createLogic({
    type: types.FETCHING_PROFESSIONALS,
    cancelType: types.PROFESSIONALS_FETCH_CANCEL,
    latest: true, 
  
    process({ action }, dispatch, done) {
      api.returnProfessionals()
        .then(professionals => dispatch(actions.fetchProfessionalsFulfilled(professionals)))
        .catch(err => {
          console.error(err);
          dispatch(actions.professionalsFetchError(err))
        })
        .then(() => done());
    }
});


/**
* Makes request to get services, 
* filters them according to selected professional and returns them.
* @return {promise} done - Resolved logic promise
* @throws {error} Error - any fetching error
*/

const servicesFetchLogic = createLogic({
    type: types.FETCHING_SERVICES,
    cancelType: types.SERVICES_FETCH_CANCEL,
    latest: true, 
  
    process({ action }, dispatch, done) {
      api.returnServices()
        .then((services) => { 
          let filteredServices = services.filter((x) => {
             for (var key in x.available_professionals) {
                if (x.available_professionals[key].cpf == action.payload.document_number) {
                     return x;
                }
             }
          })
          dispatch(actions.fetchServicesFulfilled(filteredServices))
        })
        .catch(err => {
          console.error(err);
          dispatch(actions.servicesFetchError(err))
        })
        .then(() => done());
    }
});


/**
* Saves scheduled service model
* @return {promise} done - Resolved logic promise
* @throws {error} Error - any fetching error
*/

const schedulePostLogic = createLogic({
    type: types.POSTING_SCHEDULE,
    cancelType: types.SCHEDULE_POST_CANCEL,
    latest: true, 
  
    process({ action }, dispatch, done) {
      const schedule = JSON.parse(window.localStorage.getItem('schedule')) || [];
      let hasError = false;

       // TODO: Check if booking already exists for a professional in an already booked timeslot
           
      for (var key in action.payload) {
        if (action.payload[key] == undefined) {
          hasError = true;
          toastr.error('Houve um problema com seu agendamento. Por favor, tente novamente!')
          break;
        }
        if (action.payload[key] == "") {
            hasError = true;
            toastr.error('Por favor, preencha todos os campos!')
            break;
        }
      }

      if (!hasError) {
        schedule.push(action.payload);
        window.localStorage.setItem('schedule', JSON.stringify(schedule))
        toastr.success('Agendamento realizado com sucesso!')
        dispatch(actions.schedulingFulfilled(true))
      }

      return new Promise(resolve => {
        resolve(schedule);
      })
      .then(() => done());
    }
});




const schedulingLogic = [
    clientFetchLogic,
    professionalsFetchLogic,
    servicesFetchLogic,
    schedulePostLogic
  ];

export default schedulingLogic;
