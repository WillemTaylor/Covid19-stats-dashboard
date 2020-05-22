<template>
  <div>
    <div class="flex-container">
      <div class="tile-container" v-for="tile in data" :key="tile.data">
        <h3>Today's global figures:</h3>
        <hr />
        <span>
          <p>
            <b>Confirmed cases:</b>
          </p>
          <p>{{ tile.confirmed | formatCommas }}</p>
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
        <span>
          <p>
            <b>Active cases:</b>
          </p>
          <p>{{ tile.active | formatCommas }}</p>
        </span>
        <hr />
        <span>
          <p>
            <b>Death to infected rate:</b>
          </p>
          <p>{{ ((tile.deaths / tile.confirmed) * 100).toFixed(2) }}%</p>
        </span>
      </div>
      <div v-if="data.length > 0">
        <chart-daily :covidStats="data" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChartDaily from "./charts/chart-daily";

export default {
  components: {
    ChartDaily
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/report/totals",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "321dce50b4mshd8137d44f289d7fp13b845jsn89d47eac171b",
        useQueryString: true
      },
      params: {
        "date-format": "YYYY-MM-DD",
        format: "json",
        date: "2020-04-01"
      }
    })
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.data = [
          {
            confirmed: 932346,
            recovered: 183351,
            deaths: 6807,
            active: 484122
          }
        ];
      });
  }
};
</script>
