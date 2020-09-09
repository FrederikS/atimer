<template>
  <div class="timer">
    <progress-circle :percentage="percentage" :radius="250">
      <div class="inner">
        <div class="days">{{ days }}</div>
        <div class="details">
          <span>{{ hours }}</span>
          <span>{{ minutes }}</span>
          <span>{{ seconds }}</span>
        </div>
      </div>
    </progress-circle>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProgressCircle from "./ProgressCircle.vue";

@Component({
  components: {
    ProgressCircle
  }
})
export default class Countdown extends Vue {
  @Prop() private start!: Date;
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

  beforeMount() {
    this.update();
  }

  created() {
    setInterval(this.update, 1000);
  }

  format(): number {
    return this.days;
  }

  get percentage(): number {
    const max = Math.abs(this.start.getTime() - this.end.getTime());
    const current = Math.abs(this.start.getTime() - new Date().getTime());
    return (current * 100) / max;
  }
}
</script>

<style scoped>
.inner {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 350px;
}

.days {
  font-size: 100px;
}

.details span {
  background-color: white;
  padding: 20px;
  margin: 10px;
  color: black;
  width: 25px;
  display: inline-block;
  font-size: 20px;
  border-radius: 50%;
}
</style>
