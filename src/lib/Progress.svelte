<script lang="ts">
  export let t;
  export let max;
</script>

<div class="progress card">
  <h3>Progress</h3>
  <p>Questions answered today: {t}/{max}</p>
  <div class="bar">
    <div
      class="fill"
      style={`width: max(${Math.min(1, t / max) * 100}%, 1rem);`}
    >
      <p class="indicator">{(t / max) * 100}%</p>
    </div>
  </div>
  {#if t > max}
    <p class="note">
      Thank you! You answered all recommended and
      {t - max} additional question{t > max + 1 ? "s" : ""}.
    </p>
  {:else if t >= max}
    <p class="note">Thank you! You answered all recommended questions!</p>
  {:else}
    <p class="note">
      Please answer {max - t} more questions below to help the company and your colleagues
      create a better work environment.
    </p>
  {/if}
</div>

<style lang="scss">
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

  .progress {
    background: mix($accent, transparent, 5%);
    border-color: transparent;

    h3 {
      padding: 0;
      margin-bottom: 0.5rem;
      color: mix($accent, black, 40%);
    }

    p {
      margin-bottom: 2rem;
      color: mix(mix($accent, black, 40%), transparent, 40%);
    }

    .bar {
      width: 100%;
      height: 1rem;

      background: mix($accent, transparent, 20%);
      border-radius: 0.5rem;

      .fill {
        height: 100%;
        position: relative;

        background: $accent;
        border-radius: 0.5rem;

        transition: $trans;

        .indicator {
          width: 3rem;
          height: 2rem;
          position: absolute;
          right: -1.25rem;
          top: -2rem;

          color: $accent;
          font-weight: 600;
          font-size: 0.8rem;

          display: flex;
          align-items: center;
          justify-content: center;

          &::after {
            content: "";

            width: 0.5rem;
            height: 0.5rem;
            position: absolute;
            bottom: -0.75rem;
            left: 1rem;

            background: white;
            border-radius: 50%;

            display: block;
          }
        }
      }
    }

    .note {
      margin: 1rem 0 0;
      display: none;
    }

    @media screen and (min-height: 60rem) {
      .note {
        display: block;
      }
    }
  }
</style>
