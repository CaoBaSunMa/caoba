<script setup>
// 全局中间件 middleware/redirect-home.global.js 会把 / 重定向到 /dashboard。
// 这里仍然补一个真实的 / 路由，否则侧边栏品牌、登录页等处的 <NuxtLink to="/">
// 在解析阶段就会报 "No match found for location with path /"。
</script>

<template>
  <div />
</template>
