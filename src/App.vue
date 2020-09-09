<template>
  <main id="app">
    <Countdown :end="end" />
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
