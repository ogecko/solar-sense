<template>
  <q-page class>
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
      <Statistic :value="new Date() | time" label="Now"/>
      <Statistic :value="$store.state.sunRise | time" icon="far fa-sun" label="Sunrise"/>
    </div>
  </q-page>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import Statistic from "../components/Statistic.vue";
const n00 = (n: number) => (n > 9 ? "" + n : "0" + n);

export default Vue.extend({
  name: "PageIndex",
  components: {
    Statistic
  },
  filters: {
    num2: (x: number) => x.toFixed(2),
    num1: (x: number) => x.toFixed(1),
    num0: (x: number) => x.toFixed(0),
    percent: (x: number) => (x * 100).toFixed(0),
    time: (x: Date) => `${n00(x.getHours())}:${n00(x.getMinutes())}`
  }
});
</script>
