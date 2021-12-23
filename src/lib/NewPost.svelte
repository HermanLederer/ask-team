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
  <div class="scroll">
    <form id="new-post-form" class="container">
      <h2>New poll</h2>

      <label for="question">What is the question?</label>
      <input type="text" name="question" bind:value={post.question} />

      <span class="label what-tags"
        >Where do you want to post this question?</span
      >
      <div class="channels"><Channels bind:selected={post.tags} /></div>

      <span class="options-label label">Answer options</span>

      {#each post.answers as answer, i}
        <input
          type="text"
          class="option"
          name={`option${i}`}
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
  </div>

  <div class="fade" />

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
    // background: red;
    border-radius: 50%;

    transition: $trans;
    overflow: hidden;

    .scroll {
      height: 100%;
      padding: 2rem 0rem 8rem;
      overflow: hidden;
    }

    form {
      padding: 0 2rem;
      opacity: 0;
      transition: $trans;

      & > * {
        margin-bottom: 0.5rem;

        opacity: 0;

        display: block;
        transform: translateY(-1rem);
        transition: $trans;
      }

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

    .fade {
      width: 100%;
      height: 8rem;
      position: absolute;
      left: 0;
      bottom: 0;

      background: linear-gradient(
        180deg,
        transparent 0%,
        white 50%,
        white 100%
      );
      // background: red;

      transition: $trans;
      display: block;
      pointer-events: none;
    }

    .fab {
      width: 4rem;
      height: 4rem;
      position: fixed;
      bottom: 3rem;
      left: 0;
      right: 0;
      margin: 0 auto;

      background: $accent;
      color: white;
      box-shadow: 0 0 0 0.5rem white;
      border-radius: 2rem;

      border: none;

      transition: $trans;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        opacity: 1;
        font-size: 2rem;
        font-weight: 600;
        transition: $trans;
      }

      .label {
        position: absolute;

        opacity: 0;
        font-weight: 600;

        transition: $trans;
        overflow: hidden;
      }
    }
  }

  .answers-warning {
    margin-top: 1rem;
    margin-bottom: 0;
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

    .scroll {
      overflow-y: scroll;
      overflow-y: overlay;
    }

    form {
      opacity: 1;

      & > * {
        animation: openFormElement $trans forwards;
      }
    }

    .fab {
      width: calc(100% - 4rem);
      bottom: 2rem;

      background: $accent;
      color: white;

      .icon {
        opacity: 0;
      }

      .label {
        opacity: 1;
      }

      @media screen and (min-width: 40rem) {
        width: 40rem - 4rem;
      }
    }
  }

  section.is-hidden {
    pointer-events: none;
    opacity: 0;
    .fab {
      transform: scale(0);
    }
  }
</style>
