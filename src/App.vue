<template>
  <main id="app">
    <Countdown :start="start" :end="end" />
    <tenor-embed :id="gif.id" :dimensions="gif.dims" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Countdown from "./components/Countdown.vue";
import TenorEmbed from "./components/TenorEmbed.vue";

@Component({
  components: {
    Countdown,
    TenorEmbed
  }
})
export default class App extends Vue {
  get start(): Date {
    return new Date(2019, 7, 1);
  }

  get end(): Date {
    return new Date(2021, 8, 1);
  }

  get gif() {
    return {
      id: 7271887,
      dims: [350, 360]
    };
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
  display: flex;
  flex-direction: column;
}
</style>
