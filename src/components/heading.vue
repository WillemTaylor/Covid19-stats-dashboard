<template>
  <div class="header">
    <img :src="mySvg" />
    <span>THE<b>DAILY</b>INFO</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mySvg: require('../styles/speech-bubble.svg'),
    };
  },
};
</script>
