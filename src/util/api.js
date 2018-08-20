import axios from 'axios';

export const fetchAllPins = () => {

    // check if localStorage.cruise is set, it null default to empty object
    if (localStorage.getItem('cruise') === null) {
        localStorage.setItem('cruise', '{}');
    }

    const 
        pins = localStorage.getItem('cruise'),
        prom = Promise.resolve(pins);
    
    return prom;
};

export const fetchAllPosts = () => (
    axios.get('https://www.reddit.com/r/cats/top/.json?count=20&limit=20')
);

export const postPin = pin => {
    let newPin = {};
    let pins = localStorage.getItem('cruise');
    
    newPin[pin.id] = pin;
    pins = JSON.parse(pins);
    pins = Object.assign(pins, newPin);
    pins = JSON.stringify(pins);
    
    localStorage.setItem('cruise', pins);
    
    const prom = Promise.resolve(pins);

    return prom;
};

export const deletePin = pin => {
    let pins = localStorage.getItem('cruise');

    pins = JSON.parse(pins);
    delete pins[pin.id];
    pins = JSON.stringify(pins);

    localStorage.setItem('cruise', pins);

    const prom = Promise.resolve(pins);
    
    return prom;
};