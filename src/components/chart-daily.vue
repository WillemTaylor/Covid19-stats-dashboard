<template>
  <div class="chart-container">
    <h2>Daily Breakdown</h2>
    <canvas id="chart2" />
  </div>
</template>

<script>
import Chart from "chart.js";
import casesChartData from "../assets/chart-data.js";

export default {
  props: {
    covidStats: Array
  },
  data() {
    return {
      casesChartData: casesChartData(
        "Active Cases",
        this.covidStats.map(x => x.confirmed)[0],
        this.covidStats.map(x => x.active)[0],
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
      return new Chart("chart2", {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  }
};
</script>
