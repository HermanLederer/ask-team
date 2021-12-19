<div class="pie-chart">
  <div class="pie" />
  <ul>
    <li class="entry">Happy</li>
    <li class="entry">Productive</li>
    <li class="entry">Confused</li>
    <li class="entry">Stressed</li>
    <li class="entry">Angry</li>
  </ul>
</div>

<style lang="scss">
  @import "../../resources/scss/colors.scss";
  @import "../../resources/scss/transitions.scss";

  $color1: adjust-color($color: $accent, $hue: 0);
  $color2: adjust-color($color: $accent, $hue: -15);
  $color3: adjust-color($color: $accent, $hue: -30);
  $color4: adjust-color($color: $accent, $hue: -45);
  $color5: adjust-color($color: $accent, $hue: -60);

  .pie-chart {
    .pie {
      width: 100%;
      aspect-ratio: 1/1;
      position: relative;
      margin-bottom: 2rem;

      border-radius: 50%;
      background: conic-gradient($color1 120deg, $color2 0 240deg, $color3 0 290deg, $color4 0 320deg, $color5 0);

      &::after {
        content: "";
        width: 50%;
        height: 50%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        background: white;
        border-radius: inherit;

        display: block;
      }
    }

    ul {
      list-style: none;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
    }

    li {
      line-height: 1rem;
      margin-bottom: 0.5rem;

      opacity: 0.8;

      display: flex;
      align-items: center;

      &::before {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.5rem;

        background: $color1;
        border-radius: 50%;
        display: block;
      }

      &:nth-child(1)::before {
        background: $color1;
      }

      &:nth-child(2)::before {
        background: $color2;
      }

      &:nth-child(3)::before {
        background: $color3;
      }

      &:nth-child(4)::before {
        background: $color4;
      }

      &:nth-child(5)::before {
        background: $color5;
      }
    }
  }
</style>
