<template>
  <div>
    <heading />
    <countries />
    <all-totals />
    <daily-total />
  </div>
</template>

<script>
import Heading from '@/components/heading.vue';
import Countries from '@/components/countries.vue';
import AllTotals from '@/components/all-totals.vue';
import DailyTotal from '@/components/daily-total.vue';

export default {
  components: {
    Heading,
    Countries,
    AllTotals,
    DailyTotal,
  },
};
</script>
