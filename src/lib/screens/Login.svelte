<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Anonymity from "../Anonymity.svelte";

  const dispatch = createEventDispatcher();

  function authenticated() {
    dispatch("authenticated");
  }
</script>

<section>
  <div class="container">
    <h2>Welcome to AskTeam.</h2>
    <p>
      Please log in to continue with your AskTeam account or visit as a guest.
    </p>
    <form
      on:submit|preventDefault={() => {
        authenticated();
      }}
    >
      <label for="email">Email</label>
      <input type="email" name="email" />

      <label for="password">Password</label>
      <input type="password" name="password" />

      <a class="iforgor" href="#reset-password">Forgot your password?</a>

      <input type="submit" value="Login" />
      <input type="submit" value="Or continue as guest" class="is-ghost" />
    </form>

    <div class="anon-wrapper">
      <Anonymity />
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../resources/scss/colors.scss";

  section {
    height: 100vh;
    background: $accent;
    color: white;
  }

  .container {
    position: relative;
    height: 100%;
    padding: 2rem;

    // display: flex;
    // flex-direction: column;
    // justify-content: center;

    h2 {
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    p {
      margin-bottom: 2rem;
    }

    form {
      input[type="email"],
      input[type="password"] {
        height: 4rem;

        background: rgba(255, 255, 255, 0.2);
        color: white;
        font-weight: 600;
        border: none;
      }
    }
  }

  .container form {
    position: relative;

    & > * {
      margin-bottom: 1rem;
    }

    .iforgor {
      line-height: 1rem;
      // text-align: center;
      display: block;
      margin-bottom: 2rem;
    }
  }

  label {
    color: rgba(255, 255, 255, 0.8);
    line-height: 2rem;
  }

  input[type="submit"] {
    height: 3rem;

    background: white;
    color: $accent;
    border: none;
    border-radius: 1.5rem;
    font-weight: 600;

    &.is-ghost {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }
  }
</style>
