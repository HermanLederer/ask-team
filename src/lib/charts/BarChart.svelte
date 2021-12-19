<script lang="ts">
</script>

<div class="bar-chart">
  <div class="x-axis" />
  {#each ["Mon", "Tue", "Wed", "Thu"] as i}
    <div class="entry">
      <p class="total">5</p>
      <div class="bar" />
      <p class="index">{i}</p>
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

    .entry {
      width: 100%;
      text-align: center;

      &:not(:last-child) {
        margin-right: 2rem;
      }

      p {
        line-height: 2rem;
      }

      .bar {
        height: 20rem;
        background: $accent;
      }

      &:nth-child(2) .bar {
        background: adjust-color($color: $accent, $hue: 0);
      }

      &:nth-child(3) .bar {
        background: adjust-color($color: $accent, $hue: -15);
      }

      &:nth-child(4) .bar {
        background: adjust-color($color: $accent, $hue: -30);
      }

      &:nth-child(5) .bar {
        background: adjust-color($color: $accent, $hue: -45);
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
