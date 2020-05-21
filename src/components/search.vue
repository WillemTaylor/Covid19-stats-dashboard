<template>
  <div>
    <div class="search">
      <input
        type="search"
        aria-label="Search for a country..."
        placeholder="Search for a country..."
        @keyup="onChange"
      />
    </div>
    <div class="filter-container">
      <div v-for="country in handleShowCountries" :key="country.data">
        <span @click="onClick">{{ country.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      search: ""
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/help/countries",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "321dce50b4mshd8137d44f289d7fp13b845jsn89d47eac171b",
        useQueryString: true
      },
      params: {
        format: "json"
      }
    })
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.data = [
          {
            name: "Afghanistan"
          },
          {
            name: "United Kingdom"
          },
          {
            name: "Finland"
          },
          {
            name: "France"
          },
          {
            name: "Italy"
          }
        ];
      });
  },
  computed: {
    handleShowCountries() {
      if (this.search) {
        return this.data.filter(arr =>
          this.search.length > 0
            ? arr.name.toLowerCase().includes(this.search) ||
              arr.name.toLowerCase() === this.search.toLowerCase()
            : ""
        );
      } else {
        return "";
      }
    }
  },
  methods: {
    onChange() {
      if (event) {
        this.search = event.target.value;
      }
    },
    onClick() {
      if (event) {
        this.$router.push(`/${event.target.innerHTML}`);
      }
    }
  }
};
</script>
