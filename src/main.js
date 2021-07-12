import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/main.scss";

import "@/assets/svg.js";
import VueIcon from "@/components/VueIcon/index.vue"; // svg组件

Vue.component("vue-icon", VueIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
