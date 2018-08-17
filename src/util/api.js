import axios from 'axios';

export const fetchAllPosts = () => (
    axios.get('https://www.reddit.com/r/cats/top/.json?count=20')
);

export const fetchPins = () => {
    console.log(window.localStorage);
    return ;
};