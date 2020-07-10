import posts_raw from "../../../posts/*.md"

// console.log(posts_raw)

export class Post {
    raw;

    constructor(raw_post) {
        this.raw = raw_post
    }

    title() {
        return this.raw.metadata.title
    }

    permalink() {
        return this.raw.filename.split(".", -1)[0]
    }

    html() {
        return this.raw.html
    }

    metadata() {
        return this.raw.metadata
    }

    path() {
        return this.raw.path
    }

}

export const posts = posts_raw.map(post => new Post(post))