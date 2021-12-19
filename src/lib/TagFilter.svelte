<script lang="ts">
  let tags = ["Mood", "Noodle lab", "Project #3", "Project #12"];

  let selected = [0, 1];
</script>

<nav>
  <div class="container">
    <div class="card">
      <h3>Tags</h3>
      <ul>
        {#each tags as tag, i}
          <li class:is-selected={selected.includes(i)}>
            <button
              on:click={() => {
                let index = selected.indexOf(i);
                if (index >= 0) selected = selected.filter((m) => m !== i);
                else selected = [...selected, i];
              }}>{tag}</button
            >
          </li>
        {/each}
        <li><button class="more-tags">+</button></li>
      </ul>
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
    }

    ul {
      list-style: none;
    }

    li {
      margin-right: 0.5rem;
      margin-top: 1rem;
      display: inline-block;

      button {
        width: auto;
        height: 2rem;

        background: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.6);
        border: none;
        border-radius: 1rem;
        font-weight: 600;
        font-size: 0.8rem;

        transition: $trans;

        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }

      &.is-selected {
        button {
          background: $accent;
          color: white;
        }
      }

      .more-tags {
        width: 2rem;
        padding: 0;

        background: mix($accent, transparent, 20%);
        color: $accent;
      }
    }
  }
</style>
