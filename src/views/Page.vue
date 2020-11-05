<template>
  <div class="container">
    <AppFilters />
    <div class="main">
      <AppFlightSchedule />
      <button
        class="more"
        :disabled="showMoreButtonDisabled"
        @click="showMoreHandler"
      >
        Показать еще
      </button>
    </div>
  </div>
</template>

<script>
import AppFlightSchedule from "../components/FlightSchedule.vue";
import AppFilters from "../components/Filters.vue";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Page",
  components: { AppFilters, AppFlightSchedule },
  computed: {
    ...mapGetters(["flights"]),
    ...mapState(["flightsPerPage"]),
    showMoreButtonDisabled() {
      return this.flightsPerPage >= this.flights.length;
    }
  },
  methods: {
    ...mapMutations(["setFlightsPerPage", "setAirlines", "setPriceMax"]),
    ...mapActions(["fetchFlights"]),
    showMoreHandler() {
      this.setFlightsPerPage();
    }
  },
  created() {
    this.fetchFlights();
    this.setAirlines();
    this.setPriceMax();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.main {
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.more {
  width: 250px;
  height: 28px;
  font-size: 18px;
  background: #f1f1f1;
  outline: 1px solid #575454;
  margin-top: -10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 50px;
  border: 1px solid black;
}

.more:hover {
  background-color: gainsboro;
}

.more:disabled {
  pointer-events: none;
}
</style>
