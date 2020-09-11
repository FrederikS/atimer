<template>
  <div>
    <el-button round @click="centerDialogVisible = true"
      >Motivate me!</el-button
    >
    <el-dialog :width="width" :visible.sync="centerDialogVisible">
      <img :src="gif.url" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import data from "../assets/data.json";

type TenorGif = {
  id: string;
  url: string;
  dims: number[];
};

@Component
export default class TenorEmbed extends Vue {
  private gif: TenorGif = data[0];

  data() {
    return {
      centerDialogVisible: false
    };
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

.el-dialog__body img {
  display: block;
}

.el-dialog {
  margin-top: 15vh;
}
</style>
