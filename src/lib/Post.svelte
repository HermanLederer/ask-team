<script lang="ts" context="module">
  type Answer = {
    name: string;
    result: number;
  };

  type Content = {
    postedOn?: string;
    question: string;
    answers: Answer[];
  };

  export type { Content };
</script>

<script lang="ts">
  import { onMount } from "svelte";

  export let content: Content;
  export let vote: number;

  function submit(i: number) {
    if (vote >= 0) return;

    vote = i;
    totalAnswers += 1;
    // content.answers[i].result += 1;
  }

  let totalAnswers = 0;

  onMount(() => {
    content.answers.forEach((answer) => {
      totalAnswers += answer.result;
    });
  });
</script>

<article class:is-revealed={vote >= 0}>
  <h3>{content.question}</h3>

  {#each content.answers as answer, i}
    <button
      on:click={() => {
        submit(i);
      }}
      class:is-selected={i === vote}
    >
      <div
        class="bar"
        style={`
          width: ${(answer.result / totalAnswers) * 100}%;
        `}
      />
      <span>{answer.name}</span>
      <div class="result">{answer.result}</div>
    </button>
  {/each}

  <p class="total">{totalAnswers} votes</p>
</article>

<style lang="scss">
  @use "sass:color";
  @import "../resources//scss/colors.scss";
  @import "../resources//scss/transitions.scss";

  article {
    padding: 1rem;
    border: 1px rgba(0, 0, 0, 0.1) solid;
    border-radius: 0.5rem;
    transition: $trans;

    h3 {
      margin: 0.5rem 1rem 1rem;
    }

    button {
      position: relative;
      margin-bottom: 0.25rem;

      background: none;
      color: rgba(0, 0, 0, 0.8);
      border-color: rgba(0, 0, 0, 0.6);
      text-align: left;

      overflow: hidden;

      .bar {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        background: black;
        opacity: 0.025;

        transition: $trans;
        transition-delay: 150ms;
      }

      .result {
        height: 100%;
        position: absolute;
        top: 0;
        right: 1rem;

        opacity: 0;

        display: flex;
        align-items: center;
      }

      span {
        display: block;
        position: relative;
        font-weight: 600;
      }
    }

    .total {
      height: 2rem;
      position: relative;
      left: 1rem;
      margin-top: 0.5rem;

      opacity: 0.4;

      display: flex;
      align-items: center;
    }

    &.is-revealed {
      border-color: adjust-color($color: $accent, $alpha: -0.4);

      button {
        border-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.4);
        cursor: default;

        &.is-selected {
          border-color: $accent;

          .bar {
            background: $accent;
            opacity: 0.2;
            transition-delay: 0ms;
          }

          span {
            color: $accent;
          }
        }

        .result {
          opacity: 1;
        }
      }
    }

    &:not(.is-revealed) {
      button {
        .bar {
          width: 0 !important;
        }
      }
    }
  }
</style>
