<script lang="ts">
  import Login from "./lib/Login.svelte";
  import Home from "./lib/Home.svelte";
  import Collections from "./lib/Collections.svelte";
  import NewPost from "./lib/NewPost.svelte";
  import Nav from "./lib/Nav.svelte";

  let pos = 0;
</script>

<main>
  <div class="screens" style={`transform: translateX(-${pos * 100}vw)`}>
    <Login
      on:authenticated={() => {
        pos = 1;
        window.nav.show();
        window.fab.show();
      }}
    />
    <Home />
    <Collections />
  </div>
</main>

<Nav
  on:navigate={(e) => {
    switch (e.detail.to) {
      case 1:
        pos = 2;
        break;
      default:
        pos = 1;
        break;
    }

    if (pos === 1) window.fab.show();
    else window.fab.hide();
  }}
/>

<NewPost />

<style lang="scss">
  @import "./resources/scss/transitions.scss";

  main {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .screens {
    display: grid;
    grid-template-columns: repeat(3, 100vw);
    grid-auto-rows: calc(100vh - 5rem);
    transform: translateX(0);
    transition: $trans;
  }
</style>
