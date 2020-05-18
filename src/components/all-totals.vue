<template>
  <div>
    <div class="tile-container" v-for="tile in data" :key="tile.data">
      <h3>Covid-19 at a glance:</h3>
      <hr />
      <span>
        <p><b>Confirmed cases:</b></p>
        <p>{{ tile.confirmed | formatCommas }}</p>
      </span>
      <span>
        <p><b>Critical cases:</b></p>
        <p>{{ tile.critical | formatCommas }}</p>
      </span>
      <span>
        <p><b>No. recovered:</b></p>
        <p>{{ tile.recovered | formatCommas }}</p>
      </span>
      <span>
        <p><b>No. deaths:</b></p>
        <p>{{ tile.deaths | formatCommas }}</p>
      </span>
      <p class="updated">
        <i>Last updated: {{ tile.lastUpdate | formatDateUpdate }}</i>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: '',
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
            confirmed: 123412435,
            recovered: 2345432,
            critical: 987654,
            deaths: 987654,
            lastUpdate: '2020-05-15T17:45:02+02:00',
          },
        ];
      });
  },
  methods: {},
};
</script>
