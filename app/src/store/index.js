import Vue from "vue";
import Vuex from "vuex";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },
    state: {
      tempCurrent: 22.2,
      tempMax: 25.1,
      tempMin: 6.3,
      precipProbability: 0.05,
      precipIntensity: 0.11,
      weatherSummary: "Mostly cloudy throughout the day",
      sunRise: new Date(),
      sunSet: new Date(),
      sunAzimuth: 20,
      sunElevation: 30,
      sunAngle: 30,
      mode: "Automatic",
      positionCurrent: 30,
      controlSummary: "Automatically tracking the sun",
    },
  });

  return Store;
}
