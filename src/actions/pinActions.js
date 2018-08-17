import * as api from '../util/api';

// Action Creators
export const ADD_PIN = 'ADD_PIN';

// Asynchronous
export const requestPins = () => dispatch => {
    return api
        .fetchPins()
        .then(res => dispatch(receivePin(res)));
};

// Synchronous 
export const receivePin = pin => ({
    type: ADD_PIN,
    pin
});