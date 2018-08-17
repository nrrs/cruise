// import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS } from '../actions/postActions';
import { cleanResponse, cleanPosts } from '../util/helpers';

const defaultState = () => ({
    new: []
});

const PostReducer = (state = defaultState(), action) => {
    Object.freeze(state);

    const copyState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_POSTS :
            let postsArray = cleanResponse(action);
            copyState.new = cleanPosts(postsArray);
            return copyState;

        default:
            return state;
    }
};

export default PostReducer;