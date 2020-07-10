import {
    posts
} from "./posts"

const lookup = new Map();

posts.forEach(post => {
    lookup.set(post.permalink(), post);
});

export async function get(req, res, next) {
    const {
        slug
    } = req.params;

    const article = await lookup.get(slug);

    // console.log(slug)

    if (article !== null || article !== undefined) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(article.raw));
    } else {
        next();
    }
}