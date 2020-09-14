<template>
  <main id="app">
    <h1>Axinja's Ausbildungs-Countdown</h1>
    <sub>Click on day for a daily surprise</sub>
    <countdown :start="start" :end="end" />
    <el-button
      class="close"
      icon="el-icon-close"
      type="text"
      @click="closeApp"
    />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Countdown from "./components/Countdown.vue";
import DailySurprise from "./components/DailySurprise.vue";
import { remote } from "electron";

@Component({
  components: {
    Countdown,
    DailySurprise
  }
})
export default class App extends Vue {
  get start(): Date {
    return new Date(2019, 7, 1);
  }

  get end(): Date {
    return new Date(2021, 8, 1);
  }

  closeApp() {
    remote.app.exit();
  }
}
</script>

<style>
html,
body {
  height: 100%;
  display: grid;
  background-color: #312d2c;
}

* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffc9c9;
  margin: auto;
}

h1 {
  margin-top: 8px;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px !important;
  font-size: 30px !important;
}
</style>
