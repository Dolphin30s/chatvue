import Vue from "vue";
import App from "./App";
import router from "./router";

import { firestorePlugin } from "vuefire";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

import "@firebase/firestore";

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
