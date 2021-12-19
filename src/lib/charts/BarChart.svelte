<script lang="ts">
  import { onMount } from "svelte";

  let data = [
    {
      name: "Mon",
      value: 20 + Math.round(Math.random() * 50),
    },
    {
      name: "Tue",
      value: 20 + Math.round(Math.random() * 50),
    },
    {
      name: "Wed",
      value: 20 + Math.round(Math.random() * 50),
    },
    {
      name: "Thu",
      value: 20 + Math.round(Math.random() * 50),
    },
  ];

  let max = 0;

  onMount(() => {
    data.forEach((entry) => {
      max = Math.max(max, entry.value);
    });
  });
</script>

<div class="bar-chart">
  {#each data as entry, i}
    <div class="entry">
      <p class="total">{entry.value}</p>
      <div class="bar" style={`height: ${(entry.value / max) * 20}rem;`} />
      <p class="index">{entry.name}</p>
    </div>
  {/each}
</div>

<style lang="scss">
  @use "sass:color";
  @import "../../resources/scss/colors.scss";
  @import "../../resources/scss/transitions.scss";

  .bar-chart {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    .entry {
      width: 100%;
      text-align: center;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      p {
        line-height: 2rem;
        font-size: 0.8rem;
      }

      .total {
        opacity: 0.6;
      }

      .index {
        opacity: 0.8rem;
      }

      .bar {
        position: relative;
        bottom: 0;
        background: $accent;

        border-radius: 0.5rem;
      }

      &:nth-child(1) .bar {
        background: adjust-color($color: $accent, $hue: 0);
      }

      &:nth-child(2) .bar {
        background: adjust-color($color: $accent, $hue: -10);
      }

      &:nth-child(3) .bar {
        background: adjust-color($color: $accent, $hue: -20);
      }

      &:nth-child(4) .bar {
        background: adjust-color($color: $accent, $hue: -30);
      }
    }

    .x-axis {
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 2rem;

      background: mix(black, white, 40%);
    }
  }
</style>
