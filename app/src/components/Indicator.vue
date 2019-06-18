<template>
  <div class="col o-indicator" :style="style">
    <svg class="o-indicator__svg" :viewbox="viewBoxAttr">
      <circle :cx="viewBox" :cy="viewBox" :r="radius"></circle>
    </svg>
  </div>
</template>

<style lang="stylus">
.o-indicator {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  line-height: 1;

  &.q-focusable {
    border-radius: 50%;
  }

  &__svg {
    width: 100%;
    height: 100%;
  }

  &__text {
    font-size: 0.25em;
  }
}
</style>

<script>
import Vue from "vue";

const radius = 50;
const diameter = 2 * radius;
// const circumference = diameter * Math.PI;
// const strokeDashArray = Math.round(circumference * 1000) / 1000;

export default Vue.extend({
  name: "oIndicator",
  props: {
    value: {
      type: Number,
      default: 0,
    },

    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },

    color: String,
    centerColor: String,
    trackColor: String,

    size: String,
    fontSize: String,

    // ratio
    thickness: {
      type: Number,
      default: 0.2,
      validator: v => v >= 0 && v <= 1,
    },

    angle: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    style() {
      return {
        fontSize: this.size,
      };
    },
    radius() {
      return radius;
    },
    viewBox() {
      return diameter / (1 - this.thickness / 2);
    },
    viewBoxAttr() {
      return `${this.viewBox / 2} ${this.viewBox / 2} ${this.viewBox} ${
        this.viewBox
      }`;
    },
  },
});
</script>
