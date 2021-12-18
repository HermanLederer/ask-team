<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import IconQuestions from "svelte-material-icons/Forum.svelte";
  import IconCollections from "svelte-material-icons/ChartArc.svelte";

  // Visibility
  let showNav = false;

  window.nav = {
    show() {
      showNav = true;
    },
    hide() {
      showNav = false;
    },
  };

  // Menu
  let nav = ["Questions", "collections"];
  let selected = nav[0];

  const dispatch = createEventDispatcher();

  function navigate(to: number) {
    selected = nav[to];
    dispatch("navigate", {
      to,
    });
  }
</script>

<nav class:is-hidden={!showNav}>
  <ul class="container">
    {#each nav as item, i}
      <li>
        <button
          class:is-selected={item === selected}
          on:click={() => {
            navigate(i);
          }}
        >
          <div class="icon-box">
            {#if i == 0}
              <IconQuestions size="1.5rem" />
            {:else}
              <IconCollections size="1.5rem" />
            {/if}
          </div>
          <p>{item}</p>
        </button>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

  nav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;

    background: mix($accent, white, 10%);

    transition: $trans;
  }

  ul {
    padding: 0 1rem;

    display: flex;
    list-style: none;
  }

  li {
    width: 100%;
    display: flex;
  }

  button {
    height: auto;
    padding: 0.5rem 0;

    background: none;
    border: none;
    border-radius: 1rem;

    transition: $btn-out;
  }

  .icon-box {
    width: 4rem;
    height: 2rem;
    margin: 0 auto;

    border-radius: 1rem;
    color: rgba(0, 0, 0, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    line-height: 2rem;

    color: rgba(0, 0, 0, 0.6);
    font-size: 0.8rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  @media (pointer: fine) {
    button:hover {
      background: mix($accent, white, 20%);
      transition: $btn-in;
    }
  }

  button.is-selected {
    .icon-box {
      background: $accent;
      color: white;
      transition: $trans;
    }

    p {
      color: mix($accent, black, 40%);
      transition: $trans;
    }
  }

  nav.is-hidden {
    transform: translateY(5rem);
  }
</style>
