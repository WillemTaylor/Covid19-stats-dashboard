<template>
  <div class="flex-container">
    <div class="tile-container last">
      <h3>Top infected Countries:</h3>
      <hr />
      <table>
        <tr>
          <th>Country</th>
          <th>Confirmed cases</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
        <tr style="height: 10px;" />
        <Usa />
        <Spain />
        <Uk />
        <Italy />
        <France />
      </table>
    </div>
    <div>
      <Search />
    </div>
  </div>
</template>

<script>
import Italy from './countries/italy';
import Usa from './countries/usa';
import Uk from './countries/uk';
import Spain from './countries/spain';
import France from './countries/france';
import Search from './search';

export default {
  components: {
    Italy,
    Usa,
    Uk,
    Spain,
    France,
    Search,
  },
};
</script>
