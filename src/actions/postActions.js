import * as api from '../util/api';

// Action Creators
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
export const ADD_POST = 'ADD_POST';

// Asynchronous
export const requestAllPosts = () => dispatch => {
    return api
        .fetchAllPosts()
        .then(res => dispatch(receiveAllPosts(res)));
};

// Synchronous 
export const receiveAllPosts = posts => ({type: RECEIVE_ALL_POSTS, posts});

export const removePost = post => ({type: REMOVE_POST, post});
export const addPost = post => ({type: ADD_POST, post});

