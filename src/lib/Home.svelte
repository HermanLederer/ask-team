<script lang="ts">
  import Anonymity from "./Anonymity.svelte";
  import Post from "./Post.svelte";
  import Header from "./Header.svelte";

  import type { Content } from "./Post.svelte";

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

<section>
  <Header />

  <div class="container">
    <Anonymity />

    {#each posts as post}
      <Post content={post} vote={-1} />
    {/each}
  </div>
</section>

<style lang="scss">
  @use "sass:color";
  @import "../resources/scss/colors.scss";

  section {
    height: auto;
    overflow-y: scroll;
    overflow-y: overlay;
  }

  .container {
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
</style>
