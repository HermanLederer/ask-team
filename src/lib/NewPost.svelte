<script lang="ts">
  import type { Content } from "./Post.svelte";
  import Channels from "./Channels.svelte";

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
      postedOn: `${months[date.getMonth()]} ${String(date.getDate()).padStart(
        2,
        "0"
      )}`,
      question: "Question",
      tags: ["Noodle lab", "Project #3"],
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
</script>

<section class:is-open={isOpen} class:is-hidden={!showFab}>
  <form id="new-post-form" class="container">
    <h2>New poll</h2>

    <label for="question">What is the question?</label>
    <input type="text" name="question" bind:value={post.question} />

    <span class="label what-tags">Where do you want to post this question?</span>
    <div class="channels"><Channels bind:selected={post.tags} /></div>

    <span class="options-label label">Anwer options</span>
    {#each post.answers as answer, i}
      <input
        type="text"
        name={`option${i}`}
        class="option"
        bind:value={answer.name}
      />
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
      padding: 0 3rem;
      opacity: 0;
      transition: $trans;

      & > * {
        margin-bottom: 1rem;

        opacity: 0;

        display: block;
        transform: translateY(-1rem);
        transition: $trans;
      }

      h2,
      label,
      .label {
        margin-top: 2rem;
        display: block;
      }

      input[type="text"] {
        color: rgba(0, 0, 0, 0.6);
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
    }
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
    margin-top: 1rem;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    display: block;
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
