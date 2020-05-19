<template>
  <div style="margin-top: 140px;">
    <div class="tile-container" v-for="tile in data" :key="tile.data">
      <h3>Covid-19 at a glance:</h3>
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
    <chart-totals :covidStats="data" />
  </div>
</template>

<script>
import axios from 'axios';
import ChartTotals from './chart-totals';

export default {
  components: {
    ChartTotals,
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    axios({
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/totals',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
        'x-rapidapi-key': '321dce50b4mshd8137d44f289d7fp13b845jsn89d47eac171b',
        useQueryString: true,
      },
      params: {
        format: 'json',
      },
    })
      .then((response) => {
        this.data = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.data = [
          {
            confirmed: 4957970,
            critical: 45159,
            recovered: 1946816,
            deaths: 323256,
            lastUpdate: '2020-05-15T17:45:02+02:00',
          },
        ];
      });
  },
  methods: {},
};
</script>
