<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Anonymity from "./Anonymity.svelte";

  const dispatch = createEventDispatcher();

  function authenticated() {
    dispatch("authenticated");
  }
</script>

<section id="login">
  <div class="container">
    <h2>Welcome to Ask Team</h2>
    <p>
      Please log in to ocntinue with your Team Ask account or visit as a guest.
    </p>
    <form on:submit|preventDefault={()=>{authenticated()}}>
      <label for="email">Email</label>
      <input type="email" name="email" />

      <label for="password">Password</label>
      <input type="password" name="password" />

      <a href="#">Forgot your password?</a>

      <input type="submit" value="Login" />
      <input type="submit" value="Or continue as guest" />
    </form>

    <Anonymity />
  </div>
</section>

<style lang="scss">
  @import "../resources/scss/colors.scss";

  #login {
    height: 100vh;
    background: $accent;
    color: white;
  }

  .container {
    position: relative;
    height: 100%;
  }
</style>
