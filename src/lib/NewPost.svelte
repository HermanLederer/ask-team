<script lang="ts">
  import type { Content } from "./Post.svelte";

  import { onMount } from "svelte";

  // Visibility
  let showFab = false;

  window.fab = {
    show() {
      showFab = true;
    },
    hide() {
      showFab = false;
    },
  };

  // Post
  let post: Content;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function resetPost() {
    const date = new Date();

    post = {
      postedOn: `${months[date.getMonth()]} ${String(
        date.getDate()
      ).padStart(2, "0")}`,
      question: "",
      answers: [
        { name: "Option 1", result: 0 },
        { name: "Option 2", result: 0 },
      ],
    };
  }
  resetPost();

  // New Post action
  let isOpen = false;

  function updateDelays() {
    let formT = 150;
    const children = document.getElementById("new-post-form").children;
    for (let i = 0; i < children.length; ++i) {
      (children[i] as HTMLElement).style.animationDelay = `${formT}ms`;
      formT += 50;
    }
  }

  onMount(updateDelays);
</script>

<section class:is-open={isOpen} class:is-hidden={!showFab}>
  <div class="container">
    <form id="new-post-form">
      <h2>New poll</h2>

      <label for="question">What is the question?</label>
      <input type="text" name="question" bind:value={post.question} />

      <span class="options-label">Anwer options</span>

      {#each post.answers as answer, i}
        <input type="text" name={`option${i}`} bind:value={answer.name} />
      {/each}

      <input
        type="button"
        value="+"
        class="add-option"
        on:click={() => {
          post.answers = [...post.answers, { name: "", result: 0 }];
        }}
      />

      <span class="answers-warning">People can also give open answers</span>
    </form>
  </div>

  <button
    class="fab"
    on:click={() => {
      // Toggle openness
      isOpen = !isOpen;

      updateDelays();

      if (isOpen) {
        // Just opened
        resetPost();
      } else {
        // Just closed (we assume that they posted)
        window.questions.post(post);
      }
    }}
  >
    <span class="icon">+</span>
    <span class="label">Post</span>
  </button>
</section>

<style lang="scss">
  @use "sass:color";
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

  section {
    width: 4rem;
    height: 4rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 3rem;

    margin: auto;

    background: white;
    border-radius: 50%;
    box-shadow: 0 0 0 0.5rem white;

    transition: $trans;
    overflow: hidden;

    form {
      height: 100%;
      padding: 2rem;
      padding-top: 2rem;

      opacity: 0;

      transition: $trans;

      h2 {
        margin-bottom: 2rem;
      }

      .options-label {
        margin-top: 2rem;
      }

      & > * {
        margin-bottom: 1rem;

        opacity: 0;

        display: block;
        transform: translateY(-1rem);
        transition: $trans;
      }
    }
  }

  .add-option {
    width: 2rem;
    height: 2rem;
    margin: 1rem auto;
    padding: 0;

    background: $accent;
    color: white;
    border: none;
    border-radius: 50%;

    font-weight: 600;
  }

  .fab {
    width: 4rem;
    height: 4rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;

    background: $accent;
    color: white;
    border-radius: 2rem;

    border: none;

    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      font-size: 2rem;
      font-weight: 600;
    }

    .label {
      width: 0;

      font-weight: 600;

      overflow: hidden;
    }
  }

  .answers-warning {
    margin-bottom: 0;

    color: rgba(0, 0, 0, 0.4);
    text-align: center;
  }

  @keyframes openFormElement {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  // is open
  section.is-open {
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;

    border-radius: 0;

    form {
      opacity: 1;

      & > * {
        animation: openFormElement $trans forwards;
      }
    }

    .fab {
      width: 8rem;
      bottom: 2rem;

      background: $accent;
      color: white;

      .label {
        width: auto;
        margin-left: 1rem;
      }
    }
  }

  section.is-hidden {
    transform: scale(0);
  }
</style>
