import axios from "axios";
import { VueConstructor } from "vue";

export default async ({ Vue }: { Vue: VueConstructor }) => {
  Vue.prototype.$axios = axios;
};
