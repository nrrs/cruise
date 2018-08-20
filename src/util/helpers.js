export const cleanPins = action => {
    const 
        pinsObj = JSON.parse(action.pins),
        pinKeys = Object.keys(pinsObj),
        sanitizedPins = {};
    
    pinKeys.forEach(key => (sanitizedPins[key] = pinsObj[key]));

    return sanitizedPins;
};

export const cleanPosts = action => {
    const   
        posts = action.posts.data.data.children,
        sanitizedPosts = {};

    posts.forEach(el => {
        sanitizedPosts[el.data.id] = {
            id: el.data.id,
            title: el.data.title,
            permalink: el.data.permalink,
            author: el.data.author,
            score: el.data.score
        };
    });
    return sanitizedPosts;
}