<template>
  <div class="timer">
    <span>{{ days }}</span>
    <span>{{ hours }}</span>
    <span>{{ minutes }}</span>
    <span>{{ seconds }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Countdown extends Vue {
  @Prop() private end!: Date;
  private days = 0;
  private hours = 0;
  private minutes = 0;
  private seconds = 0;

  private update() {
    let delta = Math.abs(this.end.getTime() - new Date().getTime()) / 1000;

    this.days = Math.floor(delta / (24 * 60 * 60));
    delta -= this.days * (24 * 60 * 60);

    this.hours = Math.floor(delta / (60 * 60)) % 24;
    delta -= this.hours * (60 * 60);

    this.minutes = Math.floor(delta / 60) % 60;
    delta -= this.minutes * 60;

    this.seconds = Math.floor(delta) % 60;
  }

  created() {
    setInterval(this.update, 1000);
  }
}
</script>

<style scoped>
.timer span {
  background-color: yellow;
  padding: 20px;
  margin: 10px;
}
</style>
