<script lang="ts">
  export let title;
</script>

<header class="container">
  <h2>{title}</h2>
</header>

<style lang="scss">
  @use "sass:color";
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

  header {
    margin: 2rem auto;
    padding: 0 3rem;
  }
</style>
