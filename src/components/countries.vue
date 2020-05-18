<template>
  <div>
    <!-- {{ data.map((x) => x.name) }} -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    axios({
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/help/countries',
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
      });
  },
};
</script>
