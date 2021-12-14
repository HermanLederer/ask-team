<script lang="ts">
  import Anonymity from "./Anonymity.svelte";
</script>

<section id="login">
  <h1><img src="" alt="Ask Team"></h1>
  <h2>Welcome to Ask Team</h2>
  <p>Please log in to ocntinue with your Team Ask account or visit as a guest.</p>
  <form>
    <label for="email">Email</label>
    <input type="email" name="email">

    <label for="password">Password</label>
    <input type="password" name="password">

    <a href="#">Forgot your password?</a>

    <input type="submit" value="Login">
    <input type="button" value="Or continue as guest">
  </form>

  <Anonymity/>
</section>

<style lang="scss">
  @import "../resources/scss/colors.scss";
  #login {
    height: 100vh;
    background: $accent;
    color: white;
  }
</style>
