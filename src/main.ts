import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
/* tslint:disable:no-var-requires */
const library = require("@fortawesome/fontawesome-svg-core").library;
const fasSmile = require("@fortawesome/free-solid-svg-icons").faSmile;
const FontAwesomeIcon = require("@fortawesome/vue-fontawesome").FontAwesomeIcon;

library.add(fasSmile);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
