<script lang="ts">
  import IconQuestions from "svelte-material-icons/Forum.svelte";
</script>

<header>
  <div class="center">
    <IconQuestions size="4rem" />
    <h2>Questions</h2>
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

    // background: mix($accent, white, 5%);
    color: mix($accent, #000, 80%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .center {
      text-align: center;
    }

    h2 {
      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 800;
    }
  }
</style>
