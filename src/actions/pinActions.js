import * as api from '../util/api';

// Action Creators
export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';

// Asynchronous
export const requestAllPins = () => dispatch => {
    return api
        .fetchAllPins()
        // .then(res => console.log(res));
        .then(res => dispatch(receiveAllPins(res)));
};

export const addPin = pin => dispatch => {
    return api.postPin(pin)
    .then(res => dispatch(receiveAllPins(res)));
};

export const removePin = pin => dispatch => {
    return api.deletePin(pin)
    .then(res => dispatch(receiveAllPins(res)));
};

// Synchronous 
export const receiveAllPins = pins => ({ type: RECEIVE_ALL_PINS, pins });