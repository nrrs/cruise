// import merge from 'lodash/merge';
import {ADD_PIN} from '../actions/pinActions';
import { cleanResponse, cleanPosts } from '../util/helpers';

const defaultState = () => ({
    pins: {}
});

const PinReducer = (state = defaultState(), action) => {
    Object.freeze(state);

    const copyState = Object.assign({}, state);

    switch (action.type) {
        case ADD_PIN :
            console.log(action);
            // let postsArray = cleanResponse(action);
            // copyState.new = cleanPosts(postsArray);
            return copyState;

        default:
            return state;
    }
};

export default PinReducer;