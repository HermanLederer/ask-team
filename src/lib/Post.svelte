<script lang="ts" context="module">
  type Answer = {
    name: string;
    result: number;
  };

  type Content = {
    id?: number;
    postedOn: string;
    tags?: string[];
    question: string;
    answers: Answer[];
    vote?: number;
    fresh?: boolean;
  };

  export type { Content };
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let content: Content;
  function submit(i: number) {
    if (content.vote != undefined) return;

    content.vote = i;
    content.answers[i].result += 1;
    answered();
  }

  // Total answers

  $: totalAnswers = (() => {
    let res = 0;
    content.answers.forEach((answer) => {
      res += answer.result;
    });
    return res;
  })();

  // Evetns
  const dispatch = createEventDispatcher();
  function answered() {
    dispatch("answered", {});
  }
</script>

<article class="card" class:is-revealed={content.vote >= 0}>
  <h4>{content.question}</h4>

  {#each content.answers as answer, i}
    <button
      on:click={() => {
        submit(i);
      }}
      class:is-selected={i === content.vote}
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

  <time>Posted on {content.postedOn}</time>

  {#if content.tags}
    <div class="tags">
      <span> on channels:</span>
      {#each content.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  {/if}


  <p class="total">{totalAnswers} votes</p>
</article>

<style lang="scss">
  @use "sass:color";
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

  article {
    background: white;
    transition: $trans;

    time {
      margin-top: 1rem;
      font-size: 0.8rem;
      opacity: 0.4;
      display: block;
    }

    .tags {
      span {
        font-size: 0.8rem;
        opacity: 0.4;
      }

      .tag {
        opacity: 0.8;
        color: mix($accent, black, 80%);

        &:not(:last-child)::after {
          content: ", ";
        }
      }
    }

    h4 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }

    button {
      width: calc(100% + 2rem);
      position: relative;
      margin: 0 -1rem;
      margin-bottom: 0.5rem;

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
