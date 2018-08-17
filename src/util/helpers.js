export const cleanResponse = res => res.posts.data.data.children;
export const cleanPosts = posts => {
    const sanitizedPosts = [];
    posts.forEach(el => sanitizedPosts.push(
        {
            id: el.data.id,
            title: el.data.title,
            permalink: el.data.permalink,
            author: el.data.author,
            score: el.data.score
        }
    ));
    return sanitizedPosts;
};