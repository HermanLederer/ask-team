<script lang="ts">
  import Channels from "./Channels.svelte";
</script>

<nav>
  <div class="container">
    <div class="card">
      <h3>Channels</h3>
      <Channels selected={["Mood", "Noodle lab"]} />
    </div>
  </div>
</nav>

<style lang="scss">
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

  nav {
    .container {
      padding: 0 1rem;
    }

    .card {
      background: mix($accent, transparent, 5%);
      border-color: transparent;
    }

    h3 {
      color: mix($accent, black, 40%);
      margin-bottom: 1rem;
    }
  }
</style>
