<script lang="ts">
  import IconLogo from "svelte-material-icons/Forum.svelte";
</script>

<header>
  <div class="center">
    <IconLogo size="4rem" />
    <h1>AskTeam</h1>
  </div>
</header>

<style lang="scss">
  @use "sass:color";
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

  header {
    width: 100%;
    height: 40vh;

    padding: 0;

    background: mix($accent, white, 5%);
    color: mix($accent, #000, 80%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .center {
      text-align: center;
    }

    h1 {
      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 800;
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
