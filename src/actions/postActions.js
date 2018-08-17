import * as api from '../util/api';

// Action Creators
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';

// Asynchronous
export const requestAllPosts = () => dispatch => {
    return api
        .fetchAllPosts()
        .then(res => dispatch(receiveAllPosts(res)));
};

// Synchronous 
export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});