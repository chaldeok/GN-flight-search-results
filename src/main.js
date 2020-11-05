import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import currencyFilter from "./js/currency-filter.js";
import timeDurationFilter from "./js/duration.js";
import timeFilter from "./js/time-filter";
import dateFilter from "./js/date-filter";
Vue.config.productionTip = false;

Vue.filter("currency", currencyFilter);
Vue.filter("duration", timeDurationFilter);
Vue.filter("time", timeFilter);
Vue.filter("date", dateFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
