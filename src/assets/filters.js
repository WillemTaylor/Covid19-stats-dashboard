import moment from 'moment';
import Vue from 'vue';

Vue.filter('formatDateUpdate', (value) => {
  if (!value) return '';
  return moment(value).calendar();
});

Vue.filter('formatCommas', (value) => {
  if (!value) return '';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});
