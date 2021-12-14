<script lang="ts">
  import Login from "./lib/Login.svelte";
  import Anonymity from "./lib/Anonymity.svelte";
  import Post from "./lib/Post.svelte";

  import type { Content } from "./lib/Post.svelte";

  function randomAnswers() {
    const res = [];

    const amount = 2 + Math.random() * 3;

    for (let i = 0; i < amount; i++) {
      res.push({
        name: `Option ${i + 1}`,
        result: Math.round(Math.random() * 20),
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
</script>

<!-- <Login /> -->

<main>
  <Anonymity />

  {#each posts as post}
    <Post content={post} vote={-1} />
  {/each}
</main>

<header>
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

    background: adjust-color($color: $accent, $lightness: +40, $alpha: -0.2);
    backdrop-filter: blur(0.5rem);

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 1rem;
      text-align: center;
      color: adjust-color($color: $accent, $lightness: -10);
    }
  }

  main {
    margin-top: 6rem;
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
</style>
