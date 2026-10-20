// 仅注册「必须依赖 DOM / 只能在浏览器里跑」的第三方插件。
//
// simplebar-vue 已经改在 plugins/globalComponents.js 里**通用注册**（SSR 输出
// 与客户端一致，避免 hydration 结构不匹配导致 SimpleBar 初始化崩溃），
// 这里不再重复注册。
import VueSweetalert2 from "vue-sweetalert2";
import VueApexCharts from "vue3-apexcharts";

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  app.use(VueSweetalert2);
  app.use(VueApexCharts);
});
