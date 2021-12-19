<script lang="ts">
  import IconQuestions from "svelte-material-icons/Forum.svelte";

  import TagFilter from "../TagFilter.svelte";
  import Post from "../Post.svelte";
  import Header from "../Header.svelte";

  import type { Content } from "../Post.svelte";

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
  ];

  let answered = 0;
</script>

<section>
  <Header title="Questions">
    <IconQuestions size="4rem" />
  </Header>

  <TagFilter />

  <div class="container">
    <div class="progress card">
      <h3>Progress</h3>
      <p>Questions answered today: {answered}/4</p>
      <div class="bar">
        <div class="fill" style={`width: max(${Math.min(1, answered / 4) * 100}%, 1rem);`}>
          <p class="indicator">{answered / 4 * 100}%</p>
        </div>
      </div>
      {#if answered > 4}
        <p class="note">
          Thank you! You answered all recommended and {answered - 4} additional question{answered >
          5
            ? "s"
            : ""}.
        </p>
      {:else if answered >= 4}
        <p class="note">Thank you! You answered all recommended questions!</p>
      {:else}
        <p class="note">
          Please answer {4 - answered} more questions below to help the company and
          your colleagues create a better work environment.
        </p>
      {/if}
    </div>

    <h3>Questions</h3>

    {#each posts as post}
      <Post
        content={post}
        vote={-1}
        on:answered={() => {
          answered += 1;
        }}
      />
    {/each}

    <button
      id="more-questions"
      on:click={() => {
        posts = [
          ...posts,
          { question: "Bonus question?", answers: randomAnswers() },
          { question: "Bonus question?", answers: randomAnswers() },
          { question: "Bonus question?", answers: randomAnswers() },
          { question: "Bonus question?", answers: randomAnswers() },
        ];
      }}>More</button
    >
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

  h3 {
    padding: 2rem 2rem;
    color: mix($accent, black, 40%);
  }

  .progress {
    background: mix($accent, transparent, 5%);
    border-color: transparent;

    h3 {
      padding: 0;
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 2rem;
      color: mix(mix($accent, black, 40%), transparent, 40%);
    }

    .bar {
      width: 100%;
      height: 1rem;

      background: mix($accent, transparent, 20%);
      border-radius: 0.5rem;

      .fill {
        height: 100%;
        position: relative;

        background: $accent;
        border-radius: 0.5rem;

        transition: 500ms ease-in-out;

        .indicator {
          width: 2rem;
          position: absolute;
          right: -1rem;
          top: -1.5rem;

          color: $accent;
          font-weight: 600;
          font-size: 0.8rem;

          text-align: center;

          &::after{
            content: '';

            width: 0.5rem;
            height: 0.5rem;
            position: absolute;
            bottom: -1.275rem;
            left: 0.25rem;

            background: white;
            border-radius: 50%;

            display: block;
          }
        }
      }
    }

    .note {
      margin: 1rem 0 0;
    }
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
