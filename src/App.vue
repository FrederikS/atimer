<template>
  <main id="app">
    <Countdown :start="start" :end="end" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Countdown from "./components/Countdown.vue";

@Component({
  components: {
    Countdown
  }
})
export default class App extends Vue {
  get start(): Date {
    return new Date(2019, 7, 1);
  }

  get end(): Date {
    return new Date(2021, 8, 1);
  }
}
</script>

<style>
html,
body {
  height: 100%;
  display: grid;
  background-color: #eaeaea;
}

* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
</style>
