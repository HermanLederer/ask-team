<script lang="ts">
  import Login from "./lib/Login.svelte";
  import Anonymity from "./lib/Anonymity.svelte";
  import Post from "./lib/Post.svelte";
  import NewPost from "./lib/NewPost.svelte";
  import Header from "./lib/Header.svelte";

  import type { Content } from "./lib/Post.svelte";

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

<Header />

<style lang="scss">
  @use "sass:color";
  @import "./resources//scss/colors.scss";

  main > .container {
    margin-top: 6rem;
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
</style>
