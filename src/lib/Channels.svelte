<script lang="ts">
  let tags = ["Mood", "Noodle lab", "Project #3", "Project #12"];

  export let selected: string[];
</script>

<ul>
  {#each tags as tag}
    <li class:is-selected={selected.includes(tag)}>
      <button
        on:click|preventDefault={() => {
          let index = selected.indexOf(tag);
          if (index >= 0) selected = selected.filter((m) => m !== tag);
          else selected = [...selected, tag];
        }}>{tag}</button
      >
    </li>
  {/each}
  <li>
    <button class="more-tags" on:click|preventDefault={() => {}}>+</button>
  </li>
</ul>

<style lang="scss">
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

  ul {
    list-style: none;
    margin-top: -1rem;
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
</style>
