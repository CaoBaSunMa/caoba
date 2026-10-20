// https://nuxt.com/docs/api/configuration/nuxt-config
import sass from "sass";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@bootstrap-vue-next/nuxt"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  css: ["~/styles/scss/style.scss"],
  plugins: [
    // 通用插件：必须先于 client 插件执行
    "./plugins/globalComponents.js",
    { src: "./plugins/useBootstrap.client.ts", mode: "client" },
    // font-awesome-icon 在模板里被 SSR 渲染，@fortawesome/svg-core 本身是
    // SSR 安全的（直接生成 SVG 字符串），所以必须通用注册；只注册在 client 上会
    // 导致服务端解析不到组件 + hydration 不一致。
    "./plugins/fontwesome.js",
    { src: "~/plugins/plugins.js", mode: "client" },
  ],
  vite: {
    ssr: {
      // @fortawesome/vue-fontawesome 没有 exports 字段。SSR 下它会被 externalize，
      // Node 解析 main 字段 -> CJS 版 index.js，它 require 的是 fontawesome-svg-core
      // 的 CJS 构建；而我们的插件 import 时走 exports 的 import 条件 -> ESM 构建。
      // 两者是两个彼此独立的 library 实例，插件里的 library.add(fab, fas) 对组件
      // 不可见，结果是所有图标渲染成空白，并在服务端日志刷
      // "Could not find one or more icon(s)"。
      // 强制打包它，Vite 就会用 module 字段（index.es.js），两端共用同一个 core 实例。
      noExternal: ["@fortawesome/vue-fontawesome"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Suppress deprecation warnings
          implementation: sass,
          logger: {
            warn: (message: any) => {
              if (
                !message.includes("Deprecation Warning") &&
                !message.includes("@import rules are deprecated") &&
                !message.includes(
                  "Global built-in functions are deprecated and will be removed"
                ) &&
                !message.includes(
                  "The legacy JS API is deprecated and will be removed"
                ) &&
                !message.includes("https://sass-lang.com/d/color-functions") &&
                !message.includes("repetitive deprecation warnings omitted")
              ) {
                console.warn(message); // Only log non-deprecation warnings
              }
            },
          },
        },
      },
    },
  },
  app: {
    head: {
      title: "直观的 NuxtJS-Bootstrap SaaS 应用模板",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      {
        hid: "description",
        name: "description",
        content: "由 caoba 打造的基于 NuxtJS-Bootstrap 的后台仪表盘模板",
      },
      {
        name: "keywords",
        content:
          "NuxtJS, Nuxt, Vuejs, Vue, Nuxt.js, Vue.js, JavaScript, Vuejs 后台模板,Vuejs 后台管理,Vuejs 仪表盘,Vuejs bootstrap,响应式 Web 应用,Vuejs Web 应用,多应用演示",
      },
    ],
  },
});
