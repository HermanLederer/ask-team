<script lang="ts">
  import IconMenu from "svelte-material-icons/Menu.svelte";
  import IconTune from "svelte-material-icons/Tune.svelte";

  let showHeader = true;

  window.header = {
    show() {
      showHeader = true;
    },
    hide() {
      showHeader = false;
    },
  };
</script>

<header class:is-hidden={!showHeader}>
  <div class="container">
    <!-- <img src="" alt="Ask Team" /> -->
    <h1>Ask Team</h1>

    <button id="btn-menu" on:click>
      <IconMenu size="1rem" />
    </button>

    <!-- <IconMenu /> -->
    <div />
  </div>
</header>

<style lang="scss">
  @use "sass:color";
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

  header {
    width: 100%;
    height: 4rem;
    position: fixed;
    top: 0;
    left: 0;

    background: #fff;
    border-bottom: 1px $accent solid;

    transition: 300ms ease-in-out;

    .container {
      height: 100%;
      padding: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    h1 {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;

      font-size: 1rem;
      text-align: center;
      color: mix($accent, #000, 10%);
    }

    &.is-hidden {
      top: -4rem;
    }
  }

  #btn-menu {
    width: 3rem;
    height: 3rem;
    padding: 0 1rem;
    position: relative;

    background: transparent;
    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: $btn-out;

    &:active {
      background: $accent;
      color: white;

      transition: $btn-in;
    }
  }
</style>
