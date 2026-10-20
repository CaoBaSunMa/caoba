// FontAwesome —— 必须在通用插件里注册（SSR + 客户端）。
// @fortawesome/svg-core 本身是 SSR 安全的（直接生成 SVG 字符串），
// 但之前这个插件是 mode:"client"，服务端解析不到 <font-awesome-icon> 组件。
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// 模板里实际用到的图标（icon="fab fa-github" 这种写法）必须出现在 library 里，
// 否则 fontawesome-svg-core 会打印
// "Could not find one or more icon(s) { prefix: 'fab', iconName: 'github' }"
// 并且渲染成空白。
library.add(fab, fas)

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp
  // 模板里两种写法都有：<font-awesome-icon> 和 <FontAwesomeIcon>。
  // Vue 的组件名解析不会把 kebab-case 自动匹配到 PascalCase，
  // 两个名字都注册最稳妥。
  app.component('font-awesome-icon', FontAwesomeIcon)
  app.component('FontAwesomeIcon', FontAwesomeIcon)
})
