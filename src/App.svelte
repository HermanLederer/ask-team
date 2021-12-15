<script lang="ts">
  import Login from "./lib/Login.svelte";
  import Anonymity from "./lib/Anonymity.svelte";
  import Post from "./lib/Post.svelte";
  import NewPost from "./lib/NewPost.svelte";

  import type { Content } from "./lib/Post.svelte";

  let showHeader = true;

  function randomAnswers() {
    const res = [];

    const amount = 2 + Math.random() * 3;

    for (let i = 0; i < amount; i++) {
      res.push({
        name: `Option ${i + 1}`,
        result: 1 + Math.round(Math.random() * 19),
      });
    }

    return res;
  }

  let posts: Content[] = [
    { question: "What?", answers: randomAnswers() },
    { question: "What?", answers: randomAnswers() },
    { question: "What?", answers: randomAnswers() },
    { question: "What?", answers: randomAnswers() },
    { question: "What?", answers: randomAnswers() },
    { question: "What?", answers: randomAnswers() },
    { question: "What?", answers: randomAnswers() },
    { question: "What?", answers: randomAnswers() },
    { question: "What?", answers: randomAnswers() },
    { question: "What?", answers: randomAnswers() },
  ];

  window.header = {
    show() {
      showHeader = true;
    },
    hide() {
      showHeader = false;
    },
  };
</script>

<!-- <Login /> -->

<main>
  <div class="container">
    <Anonymity />

    {#each posts as post}
      <Post content={post} vote={-1} />
    {/each}
  </div>
</main>

<NewPost />

<header class:is-hidden={!showHeader}>
  <!-- <img src="" alt="Ask Team" /> -->
  <h1>Ask Team</h1>
</header>

<style lang="scss">
  @use "sass:color";
  @import "./resources//scss/colors.scss";

  header {
    width: 100%;
    height: 4rem;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    left: 0;

    background: adjust-color($color: mix($accent, #fff, 20%), $alpha: -0.2);
    backdrop-filter: blur(0.5rem);
    box-shadow: 0 0 2rem adjust-color($color: $accent, $alpha: -0.9);

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms ease-in-out;

    h1 {
      font-size: 1rem;
      text-align: center;
      color: mix($accent, #000, 10%);
    }

    &.is-hidden {
      top: -4rem;
    }
  }

  main > .container {
    margin-top: 6rem;
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
</style>
