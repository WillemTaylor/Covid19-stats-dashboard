<template>
  <div>
    <heading />
    <div class="flex-container">
      <div class="tile-container" v-for="tile in data" :key="tile.data">
        <h2>{{ tile.country }}</h2>
        <hr />
        <span>
          <p>
            <b>Confirmed cases:</b>
          </p>
          <p>{{ tile.confirmed | formatCommas }}</p>
        </span>
        <span>
          <p>
            <b>Critical cases:</b>
          </p>
          <p>{{ tile.critical | formatCommas }}</p>
        </span>
        <span>
          <p>
            <b>Recovered:</b>
          </p>
          <p>{{ tile.recovered | formatCommas }}</p>
        </span>
        <span>
          <p>
            <b>Deaths:</b>
          </p>
          <p>{{ tile.deaths | formatCommas }}</p>
        </span>
        <hr />
        <span>
          <p>
            <b>Death to infected rate:</b>
          </p>
          <p>{{ ((tile.deaths / tile.confirmed) * 100).toFixed(2) }}%</p>
        </span>
        <p class="updated">
          <i>Last updated: {{ tile.lastUpdate | formatDateUpdate }}</i>
        </p>
      </div>
      <div v-if="data.length > 0">
        <chart-country :covidStats="data" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../components/heading";
import ChartCountry from "../components/charts/chart-country.vue";
import axios from "axios";

export default {
  components: {
    Heading,
    ChartCountry
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    let path = window.location.hash.substring(2).toLowerCase();

    axios({
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/country",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "321dce50b4mshd8137d44f289d7fp13b845jsn89d47eac171b",
        useQueryString: true
      },
      params: {
        format: "json",
        name: path
      }
    })
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.data = [
          {
            country: "",
            confirmed: "228006",
            critical: "640",
            recovered: "134560",
            deaths: "32486",
            lastUpdate: new Date()
          }
        ];
      });
  }
};
</script>

<style lang="scss" scoped>
.flex-container {
  margin-top: 140px;
}
</style>
