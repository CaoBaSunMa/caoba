<template>
  <!--
    vue-star-rating 在模块求值阶段就会调用 document.createElement（内部 addStyle/addStylesClient），
    所以不能在 <script> 顶层静态 import —— Nuxt SSR 渲染时会抛 "document is not defined"。
    这里改为：服务端输出等尺寸占位，客户端挂载后再动态加载并渲染真实评分组件。
    占位符在服务端与客户端首次渲染时一致，因此不会产生 hydration mismatch。
  -->
  <component :is="starRating" v-if="starRating" v-bind="ratingProps" />
  <span
    v-else
    class="hk-rating-placeholder"
    :style="{ width: `${size * 5}px`, height: `${size}px` }"
  ></span>
</template>

<script>
export default {
  name: "HkRating",
  data() {
    return {
      // null 表示尚未在客户端加载完成
      starRating: null,
    };
  },
  computed: {
    ratingProps() {
      return {
        rating: this.rating,
        starSize: this.size,
        showRating: this.showRating,
        textClass: this.textClass,
        activeColor: this.activeColor,
        inactiveColor: this.inactiveColor,
        readOnly: this.readOnly,
        increment: this.fraction,
        padding: this.padding,
        activeOnClick: this.AciveOnClick,
        clearable: this.clearable,
        glow: this.glow,
        glowColor: this.glowColor,
        animate: this.animate,
        borderColor: this.borderColor,
        borderWidth: this.borderWidth,
        roundedCorners: this.roundedCorners,
        inline: true,
      };
    },
  },
  async mounted() {
    if (import.meta.server) return;
    const mod = await import("vue-star-rating");
    this.starRating = mod.default || mod;
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 18,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: [String, Array],
      default: "#FFC400",
    },
    inactiveColor: {
      type: [String, Array],
      default: "#D8D8D8",
    },
    showRating: {
      type: Boolean,
      default: false,
    },
    textClass: {
      type: String,
      default: "mt-2",
    },
    fraction: {
      type: Number,
      default: 1,
    },
    padding: {
      type: Number,
      default: 2,
    },
    AciveOnClick: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    glow: {
      type: Number,
      default: 0,
    },
    glowColor: {
      type: [String, Array],
      default: "#FFC400",
    },
    animate: {
      type: Boolean,
      default: false,
    },
    borderColor: {
      type: [String, Array],
      default: "#999",
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
    roundedCorners: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.hk-rating-placeholder {
  display: inline-block;
  vertical-align: middle;
}
</style>
