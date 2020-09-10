<template>
  <div>
    <el-button round @click="centerDialogVisible = true">Motivate me!</el-button>
    <el-dialog :width="width" :visible.sync="centerDialogVisible">
      <div class="tenor-gif-embed">
        <div :style="paddingTop">
          <iframe
            frameborder="0"
            allowtransparency="true"
            allowfullscreen="true"
            scrolling="no"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            :src="embedUrl"
          ></iframe>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TenorEmbed extends Vue {
  @Prop() private id!: string;
  @Prop() dimensions!: number[];

  data() {
    return {
      centerDialogVisible: false
    };
  }

  get width(): number {
    return this.dimensions[0];
  }

  get paddingTop(): string {
    const height = this.dimensions[1];
    return `padding-top: ${(100 / this.width) * height}%`;
  }

  get embedUrl(): string {
    return `https://tenor.com/embed/${this.id}`;
  }

  mounted() {
    const tenorScript = document.createElement("script");
    tenorScript.setAttribute("type", "text/javascript");
    tenorScript.setAttribute("src", "https://tenor.com/embed.js");
    tenorScript.async = true;
    document.body.appendChild(tenorScript);
  }
}
</script>

<style>
.tenor-gif-embed {
  width: 100%;
  position: relative;
}

.el-dialog__header,
.el-dialog__body {
  padding: 0 !important;
}
</style>
