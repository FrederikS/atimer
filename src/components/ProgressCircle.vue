<template>
  <div class="pcircle">
    <svg class="progress" :width="width" :height="width">
      <circle
        stroke="#ffc9c9"
        :stroke-width="strokeWidth - 2"
        :stroke-dasharray="circumference"
        fill="transparent"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
      <circle
        stroke="white"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        fill="transparent"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
    </svg>
    <div class="info">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProgressCircle extends Vue {
  @Prop() private radius!: number;
  @Prop() private percentage!: number;
  @Prop({ default: 10 }) private strokeWidth!: number;

  private normalizedRadius = this.radius - this.strokeWidth * 2;
  private circumference = this.normalizedRadius * 2 * Math.PI;

  get width(): number {
    return this.radius * 2;
  }

  get offset(): number {
    return this.circumference - (this.percentage / 100) * this.circumference;
  }
}
</script>

<style scoped>
.progress {
  position: absolute;
}

circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.progress circle:nth-child(2) {
  stroke: #5c1d77;
}

.pcircle {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.info {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
</style>
