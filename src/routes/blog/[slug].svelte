<script context="module">
  // import the logic for finding a post based on permalink
  import { Post } from "./posts";

  // sapper calls this to load our data
  export async function preload(page) {
    const { slug } = page.params;
    // console.log(page);
    // find the post based on the permalink param
    const post_raw = await this.fetch("blog/" + slug + ".json");
    const post_json = await post_raw.json();
    // console.log(post_json);
    const post = new Post(post_json);
    // return a list of props
    return { post };
  }
</script>

<script>
  // this prop is filled from the result of the `preload()`
  export let post;
</script>

<!-- display the post -->
<h1>{post.title()}</h1>

{@html post.html()}
