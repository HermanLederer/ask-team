/// <reference types="../Post.svelte" />

declare interface Window {
  questions: {
    post(post: Content)
    addPost(post: Content)
  };
}
