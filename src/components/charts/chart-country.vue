<template>
  <div class="chart-container">
    <h2>{{ covidStats.map(x => x.country)[0] }} Breakdown</h2>
    <canvas id="chart3" />
  </div>
</template>

<script>
import Chart from "chart.js";
import casesChartData from "../../assets/chart-data.js";

export default {
  props: {
    covidStats: Array
  },
  data() {
    return {
      casesChartData: casesChartData(
        "Critical Cases",
        this.covidStats.map(x => x.confirmed)[0],
        this.covidStats.map(x => x.critical)[0],
        this.covidStats.map(x => x.recovered)[0],
        this.covidStats.map(x => x.deaths)[0]
      )
    };
  },
  mounted() {
    this.createChart(this.casesChartData);
  },
  methods: {
    createChart(chartData) {
      return new Chart("chart3", {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  }
};
</script>
