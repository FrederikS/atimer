<template>
  <div>
    <el-button type="text" @click="surprise">
      <slot />
    </el-button>
    <el-dialog :width="width" :visible.sync="centerDialogVisible">
      <img :src="gif.url" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import data from "../assets/data.json";

type Gif = {
  id: string;
  url: string;
  dims: number[];
};

@Component
export default class DailySurprise extends Vue {
  private gif: Gif = data[0];
  private centerDialogVisible = false;
  private pos = 0;
  @Prop() private day!: number;

  surprise() {
    this.centerDialogVisible = true;
  }

  mounted() {
    if (localStorage.surprisePos) {
      this.pos = parseInt(localStorage.surprisePos, 10);
    }

    if (localStorage.surpriseDay) {
      this.day = parseInt(localStorage.surpriseDay, 10);
    }
  }

  @Watch("pos")
  onPosChanged(newPos: number) {
    if (data[newPos]) {
      this.gif = data[newPos];
      localStorage.surprisePos = newPos;
    } else {
      this.pos = 0;
    }
  }

  @Watch("day")
  onDayChanged(newDay: number, oldDay: number) {
    if (newDay !== oldDay) {
      localStorage.surpriseDay = newDay;
      this.pos++;
    }
  }

  get width(): string {
    return `${this.gif.dims[0]}px`;
  }
}
</script>

<style>
.el-dialog__header,
.el-dialog__body {
  padding: 0 !important;
}

.el-dialog__body {
  max-height: 460px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.el-dialog__body img {
  display: block;
}

.el-dialog {
  margin: auto !important;
}

.el-button--text {
  color: inherit !important;
}

.el-dialog__wrapper {
  display: grid;
}
</style>
