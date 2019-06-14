<template>
  <div class="col">
    <div class="text-h4 q-pt-sm">
      <q-icon :name="icon" />
      {{ value }}
    </div>
    <div class="text-grey-6 text-weight-light">
      {{ label }}
      <span v-if="units">({{ units }})</span>
    </div>
  </div>
</template>

<style>
.text-tight {
  line-height: 50%;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Statistic",
  props: {
    value: { type: String, default: "" },
    units: { type: String, default: "" },
    label: { type: String, default: "" },
    icon: { type: String, default: "" }
  }
});
</script>
