<template>
  <div class="timer">
    <progress-circle :percentage="percentage" :radius="200">
      <div class="inner">
        <div class="main">
          <span class="value">{{ days }}</span>
          <span class="unit">tage</span>
        </div>
        <div class="details">
          <div>
            <span class="value">{{ hours }}</span>
            <span class="unit">std</span>
          </div>
          <div>
            <span class="value">{{ minutes }}</span>
            <span class="unit">min</span>
          </div>
          <div>
            <span class="value">{{ seconds }}</span>
            <span class="unit">sek</span>
          </div>
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
}

.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.main .value {
  font-size: 100px;
}

.main .unit {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
}

.details {
  display: flex;
  justify-content: center;
}

.details div {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.details .value {
  color: black;
  width: 30px;
  background-color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 50%;
  font-size: 25px;
}

.details .unit {
  font-size: 15px;
  text-transform: uppercase;
  font-weight: lighter;
}
</style>
