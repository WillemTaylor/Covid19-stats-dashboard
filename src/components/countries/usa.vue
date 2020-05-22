<template>
  <tr>
    <td @click="onClick">{{ data.map(x => x.country)[0] }}</td>
    <td>{{ data.map(x => x.confirmed)[0] | formatCommas }}</td>
    <td>{{ data.map(x => x.recovered)[0] | formatCommas }}</td>
    <td>{{ data.map(x => x.deaths)[0] | formatCommas }}</td>
  </tr>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
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
        name: "USA"
      }
    })
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.data = [
          {
            country: "USA",
            confirmed: 3243,
            recovered: 2355,
            deaths: 234,
            active: 21345
          }
        ];
      });
  },
  methods: {
    onClick() {
      if (event) {
        this.$router.push(`/${event.target.innerHTML}`);
      }
    }
  }
};
</script>
