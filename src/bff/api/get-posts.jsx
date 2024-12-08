import { transformPost } from "../transformers";

export const getPosts = async (page, limit) =>
  fetch(`http://localhost:3001/posts?_page=${page}&_limit=${limit}`)
    .then((loadedPosts) =>
      Promise.all([loadedPosts.json(), loadedPosts.headers.get("Link")])
    )
    .then(([loadedPosts, links]) => ({
      posts: loadedPosts && loadedPosts.map(transformPost),
      links,
    }));
