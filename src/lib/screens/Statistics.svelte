<script lang="ts">
  import IconCollections from "svelte-material-icons/ChartArc.svelte";
  import IconEdit from "svelte-material-icons/Pencil.svelte";
  import IconDown from "svelte-material-icons/ChevronDown.svelte";

  import Header from "../Header.svelte";
  import BarChart from "../charts/BarChart.svelte";
  import PieChart from "../charts/PieChart.svelte";
</script>

<section>
  <Header title="Statistics">
    <IconCollections size="4rem" />
  </Header>

  <div class="container">
    <nav>
      <h3>Employee statistics</h3>
      <IconDown size="2rem" />
    </nav>

    <div class="card questions">
      <h4>Questions:</h4>
      <ul>
        <li>Question about the proejct idea</li>
        <li>Question about research</li>
        <li>Another question about research</li>
        <li>Whis solution is better</li>
        <li>Have you already used My Project #3</li>
      </ul>
      <button> Select questions </button>
    </div>

    <div class="card graph">
      <h4>Satisfaction this week</h4>
      <p>Happiness and productiveness</p>
      <BarChart />
      <div class="formula">
        <p>Formula:</p>
        <input
          type="text"
          value="AVG(Happy, Productive FROM #mood THIS week)"
          name="bar-formula"
        />
        <label for="bar-formula"><IconEdit size="1rem" /></label>
      </div>
    </div>

    <div class="card graph">
      <h4>Mood</h4>
      <p>All mood votes past 3 months</p>
      <PieChart />
      <div class="formula-wrapper">
        <div class="formula">
          <p>Formula:</p>
          <input
            type="text"
            value="CUML(#mood PAST 3 monts)"
            name="pie-formula"
          />
          <label for="pie-formula"><IconEdit size="1rem" /></label>
        </div>
      </div>
    </div>

    <button id="add-graph"> Add graph </button>
  </div>
</section>

<style lang="scss">
  @use "sass:color";
  @import "../../resources/scss/colors.scss";
  @import "../../resources/scss/transitions.scss";

  section {
    height: auto;
    overflow-y: scroll;
    overflow-y: overlay;
  }

  nav {
    height: 4rem;
    padding: 0 2rem;

    border-radius: 0.5rem;
    background: mix($accent, transparent, 5%);

    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    transition: $btn-out;

    h3 {
      color:mix($accent, black, 40%);
    }

    &:hover {
      background: mix($accent, transparent, 10%);
      transition: $btn-in;
    }
  }

  .container {
    padding: 0 1rem 1rem;

    display: grid;
    grid-gap: 1rem;
  }

  .questions {
    ul {
      list-style: none;
    }

    h4 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    li {
      opacity: 0.6;

      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }

    button {
      width: auto;
      height: auto;
      padding: 0;
      margin-top: 1rem;

      background: none;
      color: $accent;
      border: none;
      border-radius: 0;
      font-weight: 600;
    }
  }

  .graph {
    padding-bottom: calc(1rem - 1px);

    // background: mix(mix($accent, black, 40%), transparent, 5%);
    // border-color: transparent;

    display: flex;
    flex-direction: column;
    flex-grow: 0;

    h4 {
      margin-bottom: 0.5rem;
      color: mix($accent, black, 20%);
      font-size: 1.2rem;
    }

    p {
      margin-bottom: 2rem;
      color: mix($accent, black, 20%);
      opacity: 0.6;
    }

    .formula {
      position: relative;
      margin-top: 2rem;

      color: mix(mix($accent, black, 40%), transparent, 40%);

      transition: $btn-out;

      p {
        margin-bottom: 0.5rem;
      }

      input {
        width: calc(100% + 2rem);
        margin: 0 -1rem;
        padding-right: 3rem;

        background: mix($accent, white, 10%);
        color: inherit;
        border-color: transparent;
      }

      label {
        width: 3rem;
        height: 3rem;

        position: absolute;
        right: -1rem;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }

      &:hover {
        color: mix(mix($accent, black, 60%), transparent, 80%);
        transition: $btn-in;
      }

      &:focus-within {
        color: mix($accent, black, 20%);
      }
    }
  }

  #add-graph {
    width: max-content;
    margin: 0 auto;
    padding: 1rem 2rem;

    background: $accent;
    color: white;
    border: none;
    border-radius: 2rem;
    font-weight: 600;
  }
</style>
