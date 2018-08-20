// import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, REMOVE_POST, ADD_POST } from '../actions/postActions';
import {RECEIVE_ALL_PINS} from '../actions/pinActions';
import { cleanPosts, cleanPins } from '../util/helpers';

const defaultState = () => ({
    pins: {},
    results: {}
});

const PostReducer = (state = defaultState(), action) => {
    Object.freeze(state);

    const copyState = Object.assign({}, state);

    let id;

    switch (action.type) {

        case RECEIVE_ALL_PINS : 
            copyState.pins = cleanPins(action);
            return copyState;

        case RECEIVE_ALL_POSTS :
            copyState.results = cleanPosts(action);

            // ensure pins are not duplicated in results
            for (let key in copyState.pins) {
                if (copyState.results.hasOwnProperty(key)) {
                    delete copyState.results[key];
                }
            }

            return copyState;

        case REMOVE_POST :
            id = action.post.id;
            
            // remove post from the results
            delete copyState.results[id];

            return copyState;

        case ADD_POST:
            id = action.post.id;
            
            // add post back into the results
            copyState.results[id] = action.post;

            return copyState;

        default:
            return state;
    }
};

export default PostReducer;