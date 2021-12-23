<script lang="ts">
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";

  import TagFilter from "../TagFilter.svelte";
  import Post from "../Post.svelte";
  import Header from "../Header.svelte";
  import Progress from "../Progress.svelte";

  import type { Content } from "../Post.svelte";
  import { loadPosts } from "../backend";

  let element: HTMLElement;

  // Posts

  let answered = 0;
  let posts: Content[] = [];

  let nextID = -1;
  window.questions = {
    post(content: Content) {
      const s = document.getElementById("questions").offsetTop / 2;
      element.scrollTo(0, s);
      setTimeout(() => {
        content.id = ++nextID;
        posts = [content, ...posts];
      }, 150);
    },
    addPost(content: Content) {
      posts = [...posts, content];
    },
  };

  let page = -1;
  function load4Posts() {
    loadPosts(++page).forEach((post) => {
      post.id = ++nextID;
      window.questions.addPost(post);
    });
  }

  load4Posts();
</script>

<section bind:this={element}>
  <Header title="Questions" />

  <TagFilter />

  <div class="container">
    <!-- <Progress t={answered} max={4} /> -->

    {#each posts as post (post.id)}
      <div animate:flip={{ duration: 300 }} in:fade id="questions">
        <Post
          content={post}
          on:answered={() => {
            answered += 1;
          }}
        />
      </div>
    {/each}

    <button id="more-questions" on:click={load4Posts}>More</button>
  </div>
</section>

<style lang="scss">
  @use "sass:color";
  @import "../../resources/scss/colors.scss";
  @import "../../resources/scss/transitions.scss";

  section {
    height: auto;
    overflow-y: scroll;
    overflow-y: overlay;
  }

  .container {
    padding: 0 1rem 3rem;
    margin-top: 1rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  #more-questions {
    width: max-content;
    margin: 0 auto;
    padding: 1rem 2rem;

    background: $accent;
    color: white;
    border: none;
    border-radius: 2rem;
    font-weight: 600;
  }
</style>
