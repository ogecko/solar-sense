<template>
  <div class="col o-indicator" :style="style">
    <svg class="o-indicator__svg" :viewBox="viewBoxAttr">
      <clipPath id="clipPathForGauge">
        <path :d="clipPath"></path>
      </clipPath>
      <g :style="styleRotateForGapAndFlip">
        <circle
          class="o-indicator__minortick"
          fill="transparent"
          stroke="rgba(0,0,0,.5)"
          style="clip-path: url(#clipPathForGauge);"
          :stroke-width="strokeWidth() - 2"
          :stroke-dasharray="xArray(0.25, 0.75)"
          cx="0"
          cy="0"
          :r="radius"
        ></circle>
        <circle
          class="o-indicator__majortick"
          fill="transparent"
          stroke="rgba(0,0,0,.5)"
          style="clip-path: url(#clipPathForGauge);"
          :stroke-width="strokeWidth() + 4"
          :stroke-dasharray="xArray(0.5, 29.5)"
          cx="0"
          cy="0"
          :r="radius"
        ></circle>
        <circle
          class="o-indicator__bar"
          fill="transparent"
          stroke="rgba(150,150,255,.7)"
          :stroke-width="strokeWidth()"
          :stroke-dasharray="xArray(value)"
          cx="0"
          cy="0"
          :r="radius"
        ></circle>
        <circle
          class="o-indicator__pointer"
          fill="transparent"
          stroke="rgba(255,255,255,1)"
          :stroke-width="strokeWidth() + 2"
          :stroke-dashoffset="1 - x(value)"
          stroke-dasharray="2 1000"
          cx="0"
          cy="0"
          :r="radius"
        ></circle>
      </g>
      <text
        class="o-indicator__sp fas fa-sun"
        fill="gold"
        font-size="14"
        x="0"
        :y="-radius - 20"
        text-anchor="middle"
        alignment-baseline="middle"
      >&#xf185;</text>
      <text
        class="o-indicator__labelvalue"
        x="0"
        y="0"
        text-anchor="middle"
        fill="white"
        font-size="32"
      >{{value}}
      </text>
      <text
        class="o-indicator__labelmin"
        fill="grey"
        font-size="7"
        :x="radius"
        y="3"
        text-anchor="middle"
        alignment-baseline="hanging"
      >6:45 am</text>
      <text
        class="o-indicator__labelmax"
        fill="grey"
        font-size="7"
        :x="-radius"
        y="3"
        text-anchor="middle"
        alignment-baseline="hanging"
      >4:55 pm</text>
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

// svg user space
const radius = 50;
const diameter = 2 * radius;
const circumference = Math.PI * diameter;
const round = x => Math.round(x * 1000) / 1000;

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
      default: 360,
    },
    // direction to rotate the guage pointer ('cw' clockwise default, 'ccw' counter clockwise)
    rotate: {
      type: String,
      default: "cw",
    },
    // gap at bottom of guage (in degrees, default 120°)
    gap: {
      type: Number,
      default: 120,
    },

    color: String,
    centerColor: String,
    trackColor: String,

    size: String,
    fontSize: String,

    // ratio
    thickness: {
      type: Number,
      default: 0.3,
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
    styleRotateForGapAndFlip() {
      return {
        transform:
          (this.rotate === "ccw" ? "rotateY(180deg) " : "") +
          `rotateZ(${90 + this.gap / 2}deg)`,
      };
    },
    radius() {
      return radius;
    },
    viewBox() {
      return diameter / (1 - this.thickness / 2);
    },
    viewBoxAttr() {
      return `${-this.viewBox / 2} ${(-this.viewBox * 3) / 4} ${this.viewBox} ${
        this.viewBox
      }`;
    },
    clipPath() {
      const r = this.viewBox / 2 + radius;
      const a = 360 - this.gap;
      const x2 = r * Math.cos((a * Math.PI) / 180);
      const y2 = r * Math.sin((a * Math.PI) / 180);
      return `M0,0 L${r},0 A${r} ${r} 0 1 1 ${x2} ${y2}`;
    },
  },
  methods: {
    x(v) {
      const position = (v - this.min) / (this.max - this.min);
      return round((position * circumference * (360 - this.gap)) / 360);
    },
    x360(v) {
      const position = (Number(v) - 0) / 360;
      return round(position * circumference);
    },
    xArray(a, b) {
      return `${this.x(a)} ${b ? this.x(b) : round(circumference)}`;
    },
    strokeWidth() {
      return (this.thickness / 2) * this.viewBox;
    },
  },
});
</script>
