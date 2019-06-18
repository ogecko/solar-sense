<template>
  <q-page class="bg-blue-grey-9">
    <div class="row items-center text-center">
      <Indicator size="100px" />
    </div>

    <div class="row items-center text-center">
      <Statistic
        :value="$store.state.tempMin | num1"
        icon="fas fa-thermometer-quarter"
        label="Min"
        units="°C"
        class="text-grey-6"
      />
      <Statistic
        :value="$store.state.tempCurrent | num1"
        icon="fas fa-thermometer-half"
        label="Current"
        units="°C"
      />
      <Statistic
        :value="$store.state.tempMax | num1"
        icon="fas fa-thermometer-full"
        label="Max"
        units="°C"
        class="text-grey-6"
      />
    </div>
    <div class="row items-center text-center">
      <Statistic
        :value="$store.state.precipIntensity | num2"
        icon="fas fa-tint"
        label="Rain"
        units="mm/hr"
        class="text-grey-6"
      />
      <Statistic
        :value="$store.state.precipProbability | percent"
        icon="fas fa-cloud-rain"
        label="Chance"
        units="%"
      />
      <div class="col">{{ $store.state.weatherSummary }}</div>
    </div>
    <div class="row items-center text-center">
      <Statistic
        :value="$store.state.sunSet | time"
        icon="fas fa-sun"
        label="Sunset"
        class="text-grey-6"
      />
      <Statistic :value="new Date() | time" label="Now" />
      <Statistic
        :value="$store.state.sunRise | time"
        icon="far fa-sun"
        label="Sunrise"
      />
    </div>
  </q-page>
</template>

<style></style>

<script>
import Vue from "vue";
import { date } from "quasar";
import Statistic from "../components/Statistic.vue";
import Indicator from "../components/Indicator.vue";

export default Vue.extend({
  name: "PageIndex",
  components: {
    Statistic,
    Indicator,
  },
  filters: {
    num2: x => x.toFixed(2),
    num1: x => x.toFixed(1),
    num0: x => x.toFixed(0),
    percent: x => (x * 100).toFixed(0),
    time: d => `${date.formatDate(d, "h:mm a")}`,
  },
});
</script>
