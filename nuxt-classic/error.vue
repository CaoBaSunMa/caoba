<template>
  <div class="error-page d-flex align-items-center justify-content-center min-vh-100">
    <div class="text-center px-3">
      <h1 class="display-1 fw-bold text-primary mb-0">{{ statusCode }}</h1>
      <p class="lead text-muted mb-4">{{ statusMessage }}</p>
      <p v-if="detail" class="text-danger small mb-4">{{ detail }}</p>
      <div class="d-flex gap-2 justify-content-center">
        <a href="/" class="btn btn-primary">Back to Home</a>
        <a href="/auth/login" class="btn btn-outline-secondary">Go to Login</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// 之前这个文件只有 <script setup> 而没有 <template>，Nuxt 渲染错误页时会报
// "Component error.vue is missing template or render function"，导致真正出错时
// 用户看到的是一个空白页（Nuxt 回退到内置错误页，出现 "Customize this page"）。
const props = defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
});

const statusCode = computed(() => props.error?.statusCode ?? 500);
const statusMessage = computed(
  () =>
    props.error?.statusMessage ||
    (statusCode.value === 404 ? "Page Not Found" : "Internal Server Error")
);
const detail = computed(() => props.error?.message || "");
</script>
