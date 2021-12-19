<script lang="ts">
  import IconCollections from "svelte-material-icons/ChartArc.svelte";
  import IconEdit from "svelte-material-icons/Pencil.svelte";
  import IconDown from "svelte-material-icons/ChevronDown.svelte";

  import Header from "./Header.svelte";
  import BarChart from "./charts/BarChart.svelte";
  import PieChart from "./charts/PieChart.svelte";
</script>

<section>
  <Header title="Collections">
    <IconCollections size="4rem" />
  </Header>

  <div class="container">
    <nav>
      <h3>Employee statistics</h3>
      <IconDown size="2rem" />
    </nav>

    <div class="questions">
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
      <h4>Happiness this week</h4>
      <BarChart />
      <div class="formula">
        <p>Formula:</p>
        <input
          type="text"
          value="AVG(Happy, Production FROM #mood THIS week)"
        />
        <!-- <button><IconEdit size="1rem" /></button> -->
      </div>
    </div>

    <div class="card graph">
      <h4>Mood</h4>
      <PieChart />
      <div class="formula-wrapper">
        <div class="formula">
          <p>Formula:</p>
          <input type="text" value="CUML(#mood PAST 3 monts)" />
          <!-- <button><IconEdit size="1rem" /></button> -->
        </div>
      </div>
    </div>

    <button id="add-graph"> Add graph </button>
  </div>
</section>

<style lang="scss">
  @use "sass:color";
  @import "../resources/scss/colors.scss";
  @import "../resources/scss/transitions.scss";

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
      color: mix($accent, black, 40%);
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
    padding: 1rem;

    ul {
      list-style: none;
    }

    h4 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    li {
      opacity: 0.8;

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
    display: flex;
    flex-direction: column;
    flex-grow: 0;

    h4 {
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }

    .formula {
      margin-top: 2rem;

      p {
        margin-bottom: 0.5rem;
      }

      input {
        background: mix($accent, transparent, 10%);
        color: mix($accent, black, 20%);
        border-color: transparent;
      }

      button {
        width: 3rem;
        background: mix($accent, transparent, 10%);
        color: mix($accent, black, 20%);

        border: none;
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
