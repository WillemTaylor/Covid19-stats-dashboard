<template>
  <div>
    <heading />
    <all-totals />
    <daily-total />
    <top-infected />
  </div>
</template>

<script>
import Heading from '@/components/heading.vue';
import AllTotals from '@/components/all-totals.vue';
import DailyTotal from '@/components/daily-total.vue';
import TopInfected from '@/components/top-infected.vue';

export default {
  components: {
    Heading,
    AllTotals,
    DailyTotal,
    TopInfected,
  },
};
</script>
